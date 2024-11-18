import { randomUUID } from 'node:crypto';

import {
  Body,
  Controller,
  Get,
  Header,
  HttpStatus,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';

import {
  Config,
  EarlyAccessRequired,
  EmailTokenNotFound,
  InternalServerError,
  InvalidEmailToken,
  SignUpForbidden,
  Throttle,
  URLHelper,
} from '../../fundamentals';
import { UserService } from '../user';
import { validators } from '../utils/validators';
import { CurrentUser } from './current-user';
import { Public } from './guard';
import { AuthService, parseAuthUserSeqNum } from './service';
import { TokenService, TokenType } from './token';

class SignInCredential {
  email!: string;
  password?: string;
}

class ReqAdd {
  ref?: number;
  c_title?: string;
  c_type?: string;
  c_req_pdservice_link?: string;
  c_req_pdservice_versionset_link?: string;
  c_req_start_date?: string;
  c_req_end_date?: string;
  c_req_writer?: string;
  c_req_contents?: string;
  c_req_desc?: string;
  c_req_etc?: string;
  c_req_priority_link?: string;
  c_req_difficulty_link?: string;
  c_req_state_link?: string;
  c_req_reviewer01?: string;
  c_req_reviewer02?: string;
  c_req_reviewer03?: string;
  c_req_reviewer04?: string;
  c_req_reviewer05?: string;
  c_req_reviewer01_status?: string;
  c_req_reviewer02_status?: string;
  c_req_reviewer03_status?: string;
  c_req_reviewer04_status?: string;
  c_req_reviewer05_status?: string;
}

class MagicLinkCredential {
  email!: string;
  token!: string;
}

@Throttle('strict')
@Controller('/api/auth')
export class AuthController {
  constructor(
    private readonly url: URLHelper,
    private readonly auth: AuthService,
    private readonly user: UserService,
    private readonly token: TokenService,
    private readonly config: Config
  ) {}

  @Public()
  @Post('/sign-in')
  @Header('content-type', 'application/json')
  async signIn(
    @Req() req: Request,
    @Res() res: Response,
    @Body() credential: SignInCredential,
    @Query('redirect_uri') redirectUri = this.url.home
  ) {
    validators.assertValidEmail(credential.email);
    const canSignIn = await this.auth.canSignIn(credential.email);
    if (!canSignIn) {
      throw new EarlyAccessRequired();
    }

    if (credential.password) {
      const user = await this.auth.signIn(
        credential.email,
        credential.password
      );

      await this.auth.setCookie(req, res, user);
      res.status(HttpStatus.OK).send(user);
    } else {
      // send email magic link
      const user = await this.user.findUserByEmail(credential.email);
      if (!user) {
        const allowSignup = await this.config.runtime.fetch('auth/allowSignup');
        if (!allowSignup) {
          throw new SignUpForbidden();
        }
      }

      const result = await this.sendSignInEmail(
        { email: credential.email, signUp: !user },
        redirectUri
      );

      if (result.rejected.length) {
        throw new InternalServerError('Failed to send sign-in email.');
      }

      res.status(HttpStatus.OK).send({
        email: credential.email,
      });
    }
  }

  async sendSignInEmail(
    { email, signUp }: { email: string; signUp: boolean },
    redirectUri: string
  ) {
    const token = await this.token.createToken(TokenType.SignIn, email);

    const magicLink = this.url.link('/magic-link', {
      token,
      email,
      redirect_uri: redirectUri,
    });

    const result = await this.auth.sendSignInEmail(email, magicLink, signUp);

    return result;
  }

  @Get('/sign-out')
  async signOut(
    @Req() req: Request,
    @Res() res: Response,
    @Query('redirect_uri') redirectUri?: string
  ) {
    const session = await this.auth.signOut(
      req.cookies[AuthService.sessionCookieName],
      parseAuthUserSeqNum(req.headers[AuthService.authUserSeqHeaderName])
    );

    if (session) {
      res.cookie(AuthService.sessionCookieName, session.id, {
        expires: session.expiresAt ?? void 0, // expiredAt is `string | null`
        ...this.auth.cookieOptions,
      });
    } else {
      res.clearCookie(AuthService.sessionCookieName);
    }

    if (redirectUri) {
      return this.url.safeRedirect(res, redirectUri);
    } else {
      return res.send(null);
    }
  }

  @Public()
  @Post('/magic-link')
  async magicLinkSignIn(
    @Req() req: Request,
    @Res() res: Response,
    @Body() { email, token }: MagicLinkCredential
  ) {
    if (!token || !email) {
      throw new EmailTokenNotFound();
    }

    validators.assertValidEmail(email);

    const valid = await this.token.verifyToken(TokenType.SignIn, token, {
      credential: email,
    });

    if (!valid) {
      throw new InvalidEmailToken();
    }

    const user = await this.user.fulfillUser(email, {
      emailVerifiedAt: new Date(),
      registered: true,
    });

    await this.auth.setCookie(req, res, user);

    res.send({ id: user.id, email: user.email, name: user.name });
  }

  @Throttle('default', { limit: 1200 })
  @Public()
  @Get('/session')
  async currentSessionUser(@CurrentUser() user?: CurrentUser) {
    return {
      user,
    };
  }

  @Throttle('default', { limit: 1200 })
  @Public()
  @Get('/sessions')
  async currentSessionUsers(@Req() req: Request) {
    const token = req.cookies[AuthService.sessionCookieName];
    if (!token) {
      return {
        users: [],
      };
    }

    return {
      users: await this.auth.getUserList(token),
    };
  }

  @Public()
  @Get('/challenge')
  async challenge() {
    // TODO(@darksky): impl in following PR
    return {
      challenge: randomUUID(),
      resource: randomUUID(),
    };
  }

  @Public()
  @Get('/arms')
  async arms(@Req() req: Request,
             @Res() res: Response,
             @CurrentUser() user?: CurrentUser) {
    // ARMS API
    return {
      user: user
    };
  }
}

  // arms_ref: reqadd.ref,
  // arms_c_title: reqadd.c_title,
  // arms_c_type: reqadd.c_type,
  // arms_c_req_pdservice_link: reqadd.c_req_pdservice_link,
  // arms_c_req_pdservice_versionset_link: reqadd.c_req_pdservice_versionset_link,
  // arms_c_req_start_date: reqadd.c_req_start_date,
  // arms_c_req_end_date: reqadd.c_req_end_date,
  // arms_c_req_writer: reqadd.c_req_writer,
  // arms_c_req_contents: reqadd.c_req_contents,
  // arms_c_req_desc: reqadd.c_req_desc,
  // arms_c_req_etc: reqadd.c_req_etc,
  // arms_c_req_priority_link: reqadd.c_req_priority_link,
  // arms_c_req_difficulty_link: reqadd.c_req_difficulty_link,
  // arms_c_req_state_link: reqadd.c_req_state_link,
  // arms_c_req_reviewer01: reqadd.c_req_reviewer01,
  // arms_c_req_reviewer02: reqadd.c_req_reviewer02,
  // arms_c_req_reviewer03: reqadd.c_req_reviewer03,
  // arms_c_req_reviewer04: reqadd.c_req_reviewer04,
  // arms_c_req_reviewer05: reqadd.c_req_reviewer05,
  // arms_c_req_reviewer01_status: reqadd.c_req_reviewer01_status,
  // arms_c_req_reviewer02_status: reqadd.c_req_reviewer02_status,
  // arms_c_req_reviewer03_status: reqadd.c_req_reviewer03_status,
  // arms_c_req_reviewer04_status: reqadd.c_req_reviewer04_status,
  // arms_c_req_reviewer05_status: reqadd.c_req_reviewer05_status
