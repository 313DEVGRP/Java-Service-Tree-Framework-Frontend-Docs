var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* eslint-disable */
// AUTO GENERATED FILE
import { createUnionType, Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { UserFriendlyError } from './def';
export class InternalServerError extends UserFriendlyError {
    constructor(message) {
        super('internal_server_error', 'internal_server_error', message);
    }
}
export class TooManyRequest extends UserFriendlyError {
    constructor(message) {
        super('too_many_requests', 'too_many_request', message);
    }
}
export class UserNotFound extends UserFriendlyError {
    constructor(message) {
        super('resource_not_found', 'user_not_found', message);
    }
}
export class UserAvatarNotFound extends UserFriendlyError {
    constructor(message) {
        super('resource_not_found', 'user_avatar_not_found', message);
    }
}
export class EmailAlreadyUsed extends UserFriendlyError {
    constructor(message) {
        super('resource_already_exists', 'email_already_used', message);
    }
}
export class SameEmailProvided extends UserFriendlyError {
    constructor(message) {
        super('invalid_input', 'same_email_provided', message);
    }
}
export class WrongSignInCredentials extends UserFriendlyError {
    constructor(message) {
        super('invalid_input', 'wrong_sign_in_credentials', message);
    }
}
let UnknownOauthProviderDataType = class UnknownOauthProviderDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], UnknownOauthProviderDataType.prototype, "name", void 0);
UnknownOauthProviderDataType = __decorate([
    ObjectType()
], UnknownOauthProviderDataType);
export class UnknownOauthProvider extends UserFriendlyError {
    constructor(args, message) {
        super('invalid_input', 'unknown_oauth_provider', message, args);
    }
}
export class OauthStateExpired extends UserFriendlyError {
    constructor(message) {
        super('bad_request', 'oauth_state_expired', message);
    }
}
export class InvalidOauthCallbackState extends UserFriendlyError {
    constructor(message) {
        super('bad_request', 'invalid_oauth_callback_state', message);
    }
}
let MissingOauthQueryParameterDataType = class MissingOauthQueryParameterDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], MissingOauthQueryParameterDataType.prototype, "name", void 0);
MissingOauthQueryParameterDataType = __decorate([
    ObjectType()
], MissingOauthQueryParameterDataType);
export class MissingOauthQueryParameter extends UserFriendlyError {
    constructor(args, message) {
        super('bad_request', 'missing_oauth_query_parameter', message, args);
    }
}
export class OauthAccountAlreadyConnected extends UserFriendlyError {
    constructor(message) {
        super('bad_request', 'oauth_account_already_connected', message);
    }
}
export class InvalidEmail extends UserFriendlyError {
    constructor(message) {
        super('invalid_input', 'invalid_email', message);
    }
}
let InvalidPasswordLengthDataType = class InvalidPasswordLengthDataType {
};
__decorate([
    Field(),
    __metadata("design:type", Number)
], InvalidPasswordLengthDataType.prototype, "min", void 0);
__decorate([
    Field(),
    __metadata("design:type", Number)
], InvalidPasswordLengthDataType.prototype, "max", void 0);
InvalidPasswordLengthDataType = __decorate([
    ObjectType()
], InvalidPasswordLengthDataType);
export class InvalidPasswordLength extends UserFriendlyError {
    constructor(args, message) {
        super('invalid_input', 'invalid_password_length', message, args);
    }
}
export class PasswordRequired extends UserFriendlyError {
    constructor(message) {
        super('invalid_input', 'password_required', message);
    }
}
export class WrongSignInMethod extends UserFriendlyError {
    constructor(message) {
        super('invalid_input', 'wrong_sign_in_method', message);
    }
}
export class EarlyAccessRequired extends UserFriendlyError {
    constructor(message) {
        super('action_forbidden', 'early_access_required', message);
    }
}
export class SignUpForbidden extends UserFriendlyError {
    constructor(message) {
        super('action_forbidden', 'sign_up_forbidden', message);
    }
}
export class EmailTokenNotFound extends UserFriendlyError {
    constructor(message) {
        super('invalid_input', 'email_token_not_found', message);
    }
}
export class InvalidEmailToken extends UserFriendlyError {
    constructor(message) {
        super('invalid_input', 'invalid_email_token', message);
    }
}
export class LinkExpired extends UserFriendlyError {
    constructor(message) {
        super('bad_request', 'link_expired', message);
    }
}
export class AuthenticationRequired extends UserFriendlyError {
    constructor(message) {
        super('authentication_required', 'authentication_required', message);
    }
}
export class ActionForbidden extends UserFriendlyError {
    constructor(message) {
        super('action_forbidden', 'action_forbidden', message);
    }
}
export class AccessDenied extends UserFriendlyError {
    constructor(message) {
        super('no_permission', 'access_denied', message);
    }
}
export class EmailVerificationRequired extends UserFriendlyError {
    constructor(message) {
        super('action_forbidden', 'email_verification_required', message);
    }
}
let WorkspaceNotFoundDataType = class WorkspaceNotFoundDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], WorkspaceNotFoundDataType.prototype, "workspaceId", void 0);
WorkspaceNotFoundDataType = __decorate([
    ObjectType()
], WorkspaceNotFoundDataType);
export class WorkspaceNotFound extends UserFriendlyError {
    constructor(args, message) {
        super('resource_not_found', 'workspace_not_found', message, args);
    }
}
let NotInWorkspaceDataType = class NotInWorkspaceDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], NotInWorkspaceDataType.prototype, "workspaceId", void 0);
NotInWorkspaceDataType = __decorate([
    ObjectType()
], NotInWorkspaceDataType);
export class NotInWorkspace extends UserFriendlyError {
    constructor(args, message) {
        super('action_forbidden', 'not_in_workspace', message, args);
    }
}
let WorkspaceAccessDeniedDataType = class WorkspaceAccessDeniedDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], WorkspaceAccessDeniedDataType.prototype, "workspaceId", void 0);
WorkspaceAccessDeniedDataType = __decorate([
    ObjectType()
], WorkspaceAccessDeniedDataType);
export class WorkspaceAccessDenied extends UserFriendlyError {
    constructor(args, message) {
        super('no_permission', 'workspace_access_denied', message, args);
    }
}
let WorkspaceOwnerNotFoundDataType = class WorkspaceOwnerNotFoundDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], WorkspaceOwnerNotFoundDataType.prototype, "workspaceId", void 0);
WorkspaceOwnerNotFoundDataType = __decorate([
    ObjectType()
], WorkspaceOwnerNotFoundDataType);
export class WorkspaceOwnerNotFound extends UserFriendlyError {
    constructor(args, message) {
        super('internal_server_error', 'workspace_owner_not_found', message, args);
    }
}
export class CantChangeWorkspaceOwner extends UserFriendlyError {
    constructor(message) {
        super('action_forbidden', 'cant_change_workspace_owner', message);
    }
}
let DocNotFoundDataType = class DocNotFoundDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], DocNotFoundDataType.prototype, "workspaceId", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], DocNotFoundDataType.prototype, "docId", void 0);
DocNotFoundDataType = __decorate([
    ObjectType()
], DocNotFoundDataType);
export class DocNotFound extends UserFriendlyError {
    constructor(args, message) {
        super('resource_not_found', 'doc_not_found', message, args);
    }
}
let DocAccessDeniedDataType = class DocAccessDeniedDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], DocAccessDeniedDataType.prototype, "workspaceId", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], DocAccessDeniedDataType.prototype, "docId", void 0);
DocAccessDeniedDataType = __decorate([
    ObjectType()
], DocAccessDeniedDataType);
export class DocAccessDenied extends UserFriendlyError {
    constructor(args, message) {
        super('no_permission', 'doc_access_denied', message, args);
    }
}
let VersionRejectedDataType = class VersionRejectedDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], VersionRejectedDataType.prototype, "version", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], VersionRejectedDataType.prototype, "serverVersion", void 0);
VersionRejectedDataType = __decorate([
    ObjectType()
], VersionRejectedDataType);
export class VersionRejected extends UserFriendlyError {
    constructor(args, message) {
        super('action_forbidden', 'version_rejected', message, args);
    }
}
let InvalidHistoryTimestampDataType = class InvalidHistoryTimestampDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], InvalidHistoryTimestampDataType.prototype, "timestamp", void 0);
InvalidHistoryTimestampDataType = __decorate([
    ObjectType()
], InvalidHistoryTimestampDataType);
export class InvalidHistoryTimestamp extends UserFriendlyError {
    constructor(args, message) {
        super('invalid_input', 'invalid_history_timestamp', message, args);
    }
}
let DocHistoryNotFoundDataType = class DocHistoryNotFoundDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], DocHistoryNotFoundDataType.prototype, "workspaceId", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], DocHistoryNotFoundDataType.prototype, "docId", void 0);
__decorate([
    Field(),
    __metadata("design:type", Number)
], DocHistoryNotFoundDataType.prototype, "timestamp", void 0);
DocHistoryNotFoundDataType = __decorate([
    ObjectType()
], DocHistoryNotFoundDataType);
export class DocHistoryNotFound extends UserFriendlyError {
    constructor(args, message) {
        super('resource_not_found', 'doc_history_not_found', message, args);
    }
}
let BlobNotFoundDataType = class BlobNotFoundDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], BlobNotFoundDataType.prototype, "workspaceId", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], BlobNotFoundDataType.prototype, "blobId", void 0);
BlobNotFoundDataType = __decorate([
    ObjectType()
], BlobNotFoundDataType);
export class BlobNotFound extends UserFriendlyError {
    constructor(args, message) {
        super('resource_not_found', 'blob_not_found', message, args);
    }
}
export class ExpectToPublishPage extends UserFriendlyError {
    constructor(message) {
        super('invalid_input', 'expect_to_publish_page', message);
    }
}
export class ExpectToRevokePublicPage extends UserFriendlyError {
    constructor(message) {
        super('invalid_input', 'expect_to_revoke_public_page', message);
    }
}
export class PageIsNotPublic extends UserFriendlyError {
    constructor(message) {
        super('bad_request', 'page_is_not_public', message);
    }
}
export class FailedToCheckout extends UserFriendlyError {
    constructor(message) {
        super('internal_server_error', 'failed_to_checkout', message);
    }
}
let SubscriptionAlreadyExistsDataType = class SubscriptionAlreadyExistsDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], SubscriptionAlreadyExistsDataType.prototype, "plan", void 0);
SubscriptionAlreadyExistsDataType = __decorate([
    ObjectType()
], SubscriptionAlreadyExistsDataType);
export class SubscriptionAlreadyExists extends UserFriendlyError {
    constructor(args, message) {
        super('resource_already_exists', 'subscription_already_exists', message, args);
    }
}
let SubscriptionNotExistsDataType = class SubscriptionNotExistsDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], SubscriptionNotExistsDataType.prototype, "plan", void 0);
SubscriptionNotExistsDataType = __decorate([
    ObjectType()
], SubscriptionNotExistsDataType);
export class SubscriptionNotExists extends UserFriendlyError {
    constructor(args, message) {
        super('resource_not_found', 'subscription_not_exists', message, args);
    }
}
export class SubscriptionHasBeenCanceled extends UserFriendlyError {
    constructor(message) {
        super('action_forbidden', 'subscription_has_been_canceled', message);
    }
}
export class SubscriptionExpired extends UserFriendlyError {
    constructor(message) {
        super('action_forbidden', 'subscription_expired', message);
    }
}
let SameSubscriptionRecurringDataType = class SameSubscriptionRecurringDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], SameSubscriptionRecurringDataType.prototype, "recurring", void 0);
SameSubscriptionRecurringDataType = __decorate([
    ObjectType()
], SameSubscriptionRecurringDataType);
export class SameSubscriptionRecurring extends UserFriendlyError {
    constructor(args, message) {
        super('bad_request', 'same_subscription_recurring', message, args);
    }
}
export class CustomerPortalCreateFailed extends UserFriendlyError {
    constructor(message) {
        super('internal_server_error', 'customer_portal_create_failed', message);
    }
}
let SubscriptionPlanNotFoundDataType = class SubscriptionPlanNotFoundDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], SubscriptionPlanNotFoundDataType.prototype, "plan", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], SubscriptionPlanNotFoundDataType.prototype, "recurring", void 0);
SubscriptionPlanNotFoundDataType = __decorate([
    ObjectType()
], SubscriptionPlanNotFoundDataType);
export class SubscriptionPlanNotFound extends UserFriendlyError {
    constructor(args, message) {
        super('resource_not_found', 'subscription_plan_not_found', message, args);
    }
}
export class CantUpdateLifetimeSubscription extends UserFriendlyError {
    constructor(message) {
        super('action_forbidden', 'cant_update_lifetime_subscription', message);
    }
}
export class CopilotSessionNotFound extends UserFriendlyError {
    constructor(message) {
        super('resource_not_found', 'copilot_session_not_found', message);
    }
}
export class CopilotSessionDeleted extends UserFriendlyError {
    constructor(message) {
        super('action_forbidden', 'copilot_session_deleted', message);
    }
}
export class NoCopilotProviderAvailable extends UserFriendlyError {
    constructor(message) {
        super('internal_server_error', 'no_copilot_provider_available', message);
    }
}
export class CopilotFailedToGenerateText extends UserFriendlyError {
    constructor(message) {
        super('internal_server_error', 'copilot_failed_to_generate_text', message);
    }
}
export class CopilotFailedToCreateMessage extends UserFriendlyError {
    constructor(message) {
        super('internal_server_error', 'copilot_failed_to_create_message', message);
    }
}
export class UnsplashIsNotConfigured extends UserFriendlyError {
    constructor(message) {
        super('internal_server_error', 'unsplash_is_not_configured', message);
    }
}
export class CopilotActionTaken extends UserFriendlyError {
    constructor(message) {
        super('action_forbidden', 'copilot_action_taken', message);
    }
}
let CopilotMessageNotFoundDataType = class CopilotMessageNotFoundDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], CopilotMessageNotFoundDataType.prototype, "messageId", void 0);
CopilotMessageNotFoundDataType = __decorate([
    ObjectType()
], CopilotMessageNotFoundDataType);
export class CopilotMessageNotFound extends UserFriendlyError {
    constructor(args, message) {
        super('resource_not_found', 'copilot_message_not_found', message, args);
    }
}
let CopilotPromptNotFoundDataType = class CopilotPromptNotFoundDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], CopilotPromptNotFoundDataType.prototype, "name", void 0);
CopilotPromptNotFoundDataType = __decorate([
    ObjectType()
], CopilotPromptNotFoundDataType);
export class CopilotPromptNotFound extends UserFriendlyError {
    constructor(args, message) {
        super('resource_not_found', 'copilot_prompt_not_found', message, args);
    }
}
export class CopilotPromptInvalid extends UserFriendlyError {
    constructor(message) {
        super('invalid_input', 'copilot_prompt_invalid', message);
    }
}
let CopilotProviderSideErrorDataType = class CopilotProviderSideErrorDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], CopilotProviderSideErrorDataType.prototype, "provider", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], CopilotProviderSideErrorDataType.prototype, "kind", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], CopilotProviderSideErrorDataType.prototype, "message", void 0);
CopilotProviderSideErrorDataType = __decorate([
    ObjectType()
], CopilotProviderSideErrorDataType);
export class CopilotProviderSideError extends UserFriendlyError {
    constructor(args, message) {
        super('internal_server_error', 'copilot_provider_side_error', message, args);
    }
}
export class BlobQuotaExceeded extends UserFriendlyError {
    constructor(message) {
        super('quota_exceeded', 'blob_quota_exceeded', message);
    }
}
export class MemberQuotaExceeded extends UserFriendlyError {
    constructor(message) {
        super('quota_exceeded', 'member_quota_exceeded', message);
    }
}
export class CopilotQuotaExceeded extends UserFriendlyError {
    constructor(message) {
        super('quota_exceeded', 'copilot_quota_exceeded', message);
    }
}
let RuntimeConfigNotFoundDataType = class RuntimeConfigNotFoundDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], RuntimeConfigNotFoundDataType.prototype, "key", void 0);
RuntimeConfigNotFoundDataType = __decorate([
    ObjectType()
], RuntimeConfigNotFoundDataType);
export class RuntimeConfigNotFound extends UserFriendlyError {
    constructor(args, message) {
        super('resource_not_found', 'runtime_config_not_found', message, args);
    }
}
let InvalidRuntimeConfigTypeDataType = class InvalidRuntimeConfigTypeDataType {
};
__decorate([
    Field(),
    __metadata("design:type", String)
], InvalidRuntimeConfigTypeDataType.prototype, "key", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], InvalidRuntimeConfigTypeDataType.prototype, "want", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], InvalidRuntimeConfigTypeDataType.prototype, "get", void 0);
InvalidRuntimeConfigTypeDataType = __decorate([
    ObjectType()
], InvalidRuntimeConfigTypeDataType);
export class InvalidRuntimeConfigType extends UserFriendlyError {
    constructor(args, message) {
        super('invalid_input', 'invalid_runtime_config_type', message, args);
    }
}
export class MailerServiceIsNotConfigured extends UserFriendlyError {
    constructor(message) {
        super('internal_server_error', 'mailer_service_is_not_configured', message);
    }
}
export class CannotDeleteAllAdminAccount extends UserFriendlyError {
    constructor(message) {
        super('action_forbidden', 'cannot_delete_all_admin_account', message);
    }
}
export class CannotDeleteOwnAccount extends UserFriendlyError {
    constructor(message) {
        super('action_forbidden', 'cannot_delete_own_account', message);
    }
}
export var ErrorNames;
(function (ErrorNames) {
    ErrorNames[ErrorNames["INTERNAL_SERVER_ERROR"] = 0] = "INTERNAL_SERVER_ERROR";
    ErrorNames[ErrorNames["TOO_MANY_REQUEST"] = 1] = "TOO_MANY_REQUEST";
    ErrorNames[ErrorNames["USER_NOT_FOUND"] = 2] = "USER_NOT_FOUND";
    ErrorNames[ErrorNames["USER_AVATAR_NOT_FOUND"] = 3] = "USER_AVATAR_NOT_FOUND";
    ErrorNames[ErrorNames["EMAIL_ALREADY_USED"] = 4] = "EMAIL_ALREADY_USED";
    ErrorNames[ErrorNames["SAME_EMAIL_PROVIDED"] = 5] = "SAME_EMAIL_PROVIDED";
    ErrorNames[ErrorNames["WRONG_SIGN_IN_CREDENTIALS"] = 6] = "WRONG_SIGN_IN_CREDENTIALS";
    ErrorNames[ErrorNames["UNKNOWN_OAUTH_PROVIDER"] = 7] = "UNKNOWN_OAUTH_PROVIDER";
    ErrorNames[ErrorNames["OAUTH_STATE_EXPIRED"] = 8] = "OAUTH_STATE_EXPIRED";
    ErrorNames[ErrorNames["INVALID_OAUTH_CALLBACK_STATE"] = 9] = "INVALID_OAUTH_CALLBACK_STATE";
    ErrorNames[ErrorNames["MISSING_OAUTH_QUERY_PARAMETER"] = 10] = "MISSING_OAUTH_QUERY_PARAMETER";
    ErrorNames[ErrorNames["OAUTH_ACCOUNT_ALREADY_CONNECTED"] = 11] = "OAUTH_ACCOUNT_ALREADY_CONNECTED";
    ErrorNames[ErrorNames["INVALID_EMAIL"] = 12] = "INVALID_EMAIL";
    ErrorNames[ErrorNames["INVALID_PASSWORD_LENGTH"] = 13] = "INVALID_PASSWORD_LENGTH";
    ErrorNames[ErrorNames["PASSWORD_REQUIRED"] = 14] = "PASSWORD_REQUIRED";
    ErrorNames[ErrorNames["WRONG_SIGN_IN_METHOD"] = 15] = "WRONG_SIGN_IN_METHOD";
    ErrorNames[ErrorNames["EARLY_ACCESS_REQUIRED"] = 16] = "EARLY_ACCESS_REQUIRED";
    ErrorNames[ErrorNames["SIGN_UP_FORBIDDEN"] = 17] = "SIGN_UP_FORBIDDEN";
    ErrorNames[ErrorNames["EMAIL_TOKEN_NOT_FOUND"] = 18] = "EMAIL_TOKEN_NOT_FOUND";
    ErrorNames[ErrorNames["INVALID_EMAIL_TOKEN"] = 19] = "INVALID_EMAIL_TOKEN";
    ErrorNames[ErrorNames["LINK_EXPIRED"] = 20] = "LINK_EXPIRED";
    ErrorNames[ErrorNames["AUTHENTICATION_REQUIRED"] = 21] = "AUTHENTICATION_REQUIRED";
    ErrorNames[ErrorNames["ACTION_FORBIDDEN"] = 22] = "ACTION_FORBIDDEN";
    ErrorNames[ErrorNames["ACCESS_DENIED"] = 23] = "ACCESS_DENIED";
    ErrorNames[ErrorNames["EMAIL_VERIFICATION_REQUIRED"] = 24] = "EMAIL_VERIFICATION_REQUIRED";
    ErrorNames[ErrorNames["WORKSPACE_NOT_FOUND"] = 25] = "WORKSPACE_NOT_FOUND";
    ErrorNames[ErrorNames["NOT_IN_WORKSPACE"] = 26] = "NOT_IN_WORKSPACE";
    ErrorNames[ErrorNames["WORKSPACE_ACCESS_DENIED"] = 27] = "WORKSPACE_ACCESS_DENIED";
    ErrorNames[ErrorNames["WORKSPACE_OWNER_NOT_FOUND"] = 28] = "WORKSPACE_OWNER_NOT_FOUND";
    ErrorNames[ErrorNames["CANT_CHANGE_WORKSPACE_OWNER"] = 29] = "CANT_CHANGE_WORKSPACE_OWNER";
    ErrorNames[ErrorNames["DOC_NOT_FOUND"] = 30] = "DOC_NOT_FOUND";
    ErrorNames[ErrorNames["DOC_ACCESS_DENIED"] = 31] = "DOC_ACCESS_DENIED";
    ErrorNames[ErrorNames["VERSION_REJECTED"] = 32] = "VERSION_REJECTED";
    ErrorNames[ErrorNames["INVALID_HISTORY_TIMESTAMP"] = 33] = "INVALID_HISTORY_TIMESTAMP";
    ErrorNames[ErrorNames["DOC_HISTORY_NOT_FOUND"] = 34] = "DOC_HISTORY_NOT_FOUND";
    ErrorNames[ErrorNames["BLOB_NOT_FOUND"] = 35] = "BLOB_NOT_FOUND";
    ErrorNames[ErrorNames["EXPECT_TO_PUBLISH_PAGE"] = 36] = "EXPECT_TO_PUBLISH_PAGE";
    ErrorNames[ErrorNames["EXPECT_TO_REVOKE_PUBLIC_PAGE"] = 37] = "EXPECT_TO_REVOKE_PUBLIC_PAGE";
    ErrorNames[ErrorNames["PAGE_IS_NOT_PUBLIC"] = 38] = "PAGE_IS_NOT_PUBLIC";
    ErrorNames[ErrorNames["FAILED_TO_CHECKOUT"] = 39] = "FAILED_TO_CHECKOUT";
    ErrorNames[ErrorNames["SUBSCRIPTION_ALREADY_EXISTS"] = 40] = "SUBSCRIPTION_ALREADY_EXISTS";
    ErrorNames[ErrorNames["SUBSCRIPTION_NOT_EXISTS"] = 41] = "SUBSCRIPTION_NOT_EXISTS";
    ErrorNames[ErrorNames["SUBSCRIPTION_HAS_BEEN_CANCELED"] = 42] = "SUBSCRIPTION_HAS_BEEN_CANCELED";
    ErrorNames[ErrorNames["SUBSCRIPTION_EXPIRED"] = 43] = "SUBSCRIPTION_EXPIRED";
    ErrorNames[ErrorNames["SAME_SUBSCRIPTION_RECURRING"] = 44] = "SAME_SUBSCRIPTION_RECURRING";
    ErrorNames[ErrorNames["CUSTOMER_PORTAL_CREATE_FAILED"] = 45] = "CUSTOMER_PORTAL_CREATE_FAILED";
    ErrorNames[ErrorNames["SUBSCRIPTION_PLAN_NOT_FOUND"] = 46] = "SUBSCRIPTION_PLAN_NOT_FOUND";
    ErrorNames[ErrorNames["CANT_UPDATE_LIFETIME_SUBSCRIPTION"] = 47] = "CANT_UPDATE_LIFETIME_SUBSCRIPTION";
    ErrorNames[ErrorNames["COPILOT_SESSION_NOT_FOUND"] = 48] = "COPILOT_SESSION_NOT_FOUND";
    ErrorNames[ErrorNames["COPILOT_SESSION_DELETED"] = 49] = "COPILOT_SESSION_DELETED";
    ErrorNames[ErrorNames["NO_COPILOT_PROVIDER_AVAILABLE"] = 50] = "NO_COPILOT_PROVIDER_AVAILABLE";
    ErrorNames[ErrorNames["COPILOT_FAILED_TO_GENERATE_TEXT"] = 51] = "COPILOT_FAILED_TO_GENERATE_TEXT";
    ErrorNames[ErrorNames["COPILOT_FAILED_TO_CREATE_MESSAGE"] = 52] = "COPILOT_FAILED_TO_CREATE_MESSAGE";
    ErrorNames[ErrorNames["UNSPLASH_IS_NOT_CONFIGURED"] = 53] = "UNSPLASH_IS_NOT_CONFIGURED";
    ErrorNames[ErrorNames["COPILOT_ACTION_TAKEN"] = 54] = "COPILOT_ACTION_TAKEN";
    ErrorNames[ErrorNames["COPILOT_MESSAGE_NOT_FOUND"] = 55] = "COPILOT_MESSAGE_NOT_FOUND";
    ErrorNames[ErrorNames["COPILOT_PROMPT_NOT_FOUND"] = 56] = "COPILOT_PROMPT_NOT_FOUND";
    ErrorNames[ErrorNames["COPILOT_PROMPT_INVALID"] = 57] = "COPILOT_PROMPT_INVALID";
    ErrorNames[ErrorNames["COPILOT_PROVIDER_SIDE_ERROR"] = 58] = "COPILOT_PROVIDER_SIDE_ERROR";
    ErrorNames[ErrorNames["BLOB_QUOTA_EXCEEDED"] = 59] = "BLOB_QUOTA_EXCEEDED";
    ErrorNames[ErrorNames["MEMBER_QUOTA_EXCEEDED"] = 60] = "MEMBER_QUOTA_EXCEEDED";
    ErrorNames[ErrorNames["COPILOT_QUOTA_EXCEEDED"] = 61] = "COPILOT_QUOTA_EXCEEDED";
    ErrorNames[ErrorNames["RUNTIME_CONFIG_NOT_FOUND"] = 62] = "RUNTIME_CONFIG_NOT_FOUND";
    ErrorNames[ErrorNames["INVALID_RUNTIME_CONFIG_TYPE"] = 63] = "INVALID_RUNTIME_CONFIG_TYPE";
    ErrorNames[ErrorNames["MAILER_SERVICE_IS_NOT_CONFIGURED"] = 64] = "MAILER_SERVICE_IS_NOT_CONFIGURED";
    ErrorNames[ErrorNames["CANNOT_DELETE_ALL_ADMIN_ACCOUNT"] = 65] = "CANNOT_DELETE_ALL_ADMIN_ACCOUNT";
    ErrorNames[ErrorNames["CANNOT_DELETE_OWN_ACCOUNT"] = 66] = "CANNOT_DELETE_OWN_ACCOUNT";
})(ErrorNames || (ErrorNames = {}));
registerEnumType(ErrorNames, {
    name: 'ErrorNames'
});
export const ErrorDataUnionType = createUnionType({
    name: 'ErrorDataUnion',
    types: () => [UnknownOauthProviderDataType, MissingOauthQueryParameterDataType, InvalidPasswordLengthDataType, WorkspaceNotFoundDataType, NotInWorkspaceDataType, WorkspaceAccessDeniedDataType, WorkspaceOwnerNotFoundDataType, DocNotFoundDataType, DocAccessDeniedDataType, VersionRejectedDataType, InvalidHistoryTimestampDataType, DocHistoryNotFoundDataType, BlobNotFoundDataType, SubscriptionAlreadyExistsDataType, SubscriptionNotExistsDataType, SameSubscriptionRecurringDataType, SubscriptionPlanNotFoundDataType, CopilotMessageNotFoundDataType, CopilotPromptNotFoundDataType, CopilotProviderSideErrorDataType, RuntimeConfigNotFoundDataType, InvalidRuntimeConfigTypeDataType],
});
//# sourceMappingURL=errors.gen.js.map