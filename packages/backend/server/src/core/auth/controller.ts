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

import axios from 'axios';

class SignInCredential {
  email!: string;
  password?: string;
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
  async arms(

    @Query('c_title') c_title?: string,
    @Query('c_req_pdservice_link') c_req_pdservice_link?: number,
    @Query('c_req_pdservice_versionset_link') c_req_pdservice_versionset_link?: string,
    @Query('c_req_contents') c_req_contents?: string,
    @Query('c_req_desc') c_req_desc?: string,
    @Query('c_req_etc') c_req_etc?: string,

    @CurrentUser() user?: CurrentUser
  ) {

    //if - else 문으로 인증을 검증 합니다.
    if ( typeof user === "undefined" || user == null || user == undefined ) {

      console.log("인증 없이 ARMS 호출을 방어합니다.");
      return {
        error : "인증없이 ARMS 호출을 시도하였습니다. Client를 추적합니다."
      }

    }else{


      var c_req_start_date = 'Mon Nov 18 2024 00:00:00 GMT+0900 (한국 표준시)';
      var c_req_end_date = 'Fri Nov 29 2024 00:00:00 GMT+0900 (한국 표준시)';
      var c_req_writer = '[admin] - 9af24080-050d-4943-b40e-d789c0f976ee';
      var c_req_priority_link = 7;
      var c_req_difficulty_link= 3;
      var c_req_state_link= 10;
      var c_req_reviewer01 = '[admin] - 9af24080-050d-4943-b40e-d789c0f976ee';
      var c_req_reviewer02 = 'none';
      var c_req_reviewer03 = 'none';
      var c_req_reviewer04 = 'none';
      var c_req_reviewer05 = 'none';
      var c_req_reviewer01_status= 'Draft';
      var c_req_reviewer02_status= 'Draft';
      var c_req_reviewer03_status= 'Draft';
      var c_req_reviewer04_status= 'Draft';
      var c_req_reviewer05_status= 'Draft';

      const formData = new URLSearchParams();
      formData.append('ref', "2");
      formData.append('c_title', c_title || '');
      formData.append('c_type', "default");
      formData.append('c_req_pdservice_link', c_req_pdservice_link?.toString() || '');
      formData.append('c_req_pdservice_versionset_link', c_req_pdservice_versionset_link || '');
      formData.append('c_req_start_date', c_req_start_date);
      formData.append('c_req_end_date', c_req_end_date);
      formData.append('c_req_writer', c_req_writer);
      formData.append('c_req_contents', c_req_contents || '');
      formData.append('c_req_desc', c_req_desc || '');
      formData.append('c_req_etc', c_req_etc || '');
      formData.append('c_req_priority_link', c_req_priority_link?.toString() || '');
      formData.append('c_req_difficulty_link', c_req_difficulty_link?.toString() || '');
      formData.append('c_req_state_link', c_req_state_link?.toString() || '');
      formData.append('c_req_reviewer01', c_req_reviewer01);
      formData.append('c_req_reviewer02', c_req_reviewer02);
      formData.append('c_req_reviewer03', c_req_reviewer03);
      formData.append('c_req_reviewer04', c_req_reviewer04);
      formData.append('c_req_reviewer05', c_req_reviewer05);
      formData.append('c_req_reviewer01_status', c_req_reviewer01_status);
      formData.append('c_req_reviewer02_status', c_req_reviewer02_status);
      formData.append('c_req_reviewer03_status', c_req_reviewer03_status);
      formData.append('c_req_reviewer04_status', c_req_reviewer04_status);
      formData.append('c_req_reviewer05_status', c_req_reviewer05_status);


      // 인증을 통과하면 ARMS API를 호출합니다.
      // 미들 프록시를 거치지 않고 다이렉트로 백엔드 호출 합니다.
      // @ts-ignore
      axios({
        method: 'post',
        url: 'http://backend-core:31313/arms/reqAdd/T_ARMS_REQADD_11/addNode.do',
        data: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*'
        },
        crossDomain: true
      }).then((res) => {
        console.log(res.data);
        return {
          user: user,
          res: res.data
        };
      }).catch((err) => {
        console.error(err);
        return {
          err: err
        };
      });

      return {
        result : "ARMS연동 콘솔에서 확인합니다."
      };

    }
  }

  @Public()
  @Get('/pdService')
  async arms_pdservice(@CurrentUser() user?: CurrentUser) {

      // 인증을 통과하면 ARMS API를 호출합니다.
      // 미들 프록시를 거치지 않고 다이렉트로 백엔드 호출 합니다.
      // @ts-ignore
      var response_data;
      axios({
        method: 'get',
        url: 'http://backend-core:31313/arms/pdServicePure/getPdServiceMonitor.do'
      }).then((res) => {
        console.log(res);
        response_data = res;
        return {
          res: response_data
        };
      }).catch((err) => {
        console.error(err);
        return {
          err: err
        };
      });

      return {
        result : response_data
      };

  }


  @Public()
  @Get('/version')
  async arms_version(
    @Query('c_req_pdservice') c_req_pdservice?: number,
    @CurrentUser() user?: CurrentUser
  ) {

    //if - else 문으로 인증을 검증 합니다.
    if ( typeof user === "undefined" || user == null || user == undefined ) {

      console.log("인증 없이 ARMS 호출을 방어합니다.");
      return {
        error : "인증없이 ARMS 호출을 시도하였습니다. Client를 추적합니다."
      }

    }else{


      const formData = new URLSearchParams();
      formData.append('c_req_pdservice_link', c_req_pdservice?.toString() || '');


      // 인증을 통과하면 ARMS API를 호출합니다.
      // 미들 프록시를 거치지 않고 다이렉트로 백엔드 호출 합니다.
      // @ts-ignore
      axios({
        method: 'post',
        url: 'http://backend-core:31313/arms/pdServicePure/getPdServiceMonitor.do?c_ids=27',
        data: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*'
        },
        crossDomain: true
      }).then((res) => {
        console.log(res.data);
        return {
          user: user,
          res: res.data
        };
      }).catch((err) => {
        console.error(err);
        return {
          err: err
        };
      });

      return {
        result : "getPdServiceVersion error"
      };

    }
  }

}
