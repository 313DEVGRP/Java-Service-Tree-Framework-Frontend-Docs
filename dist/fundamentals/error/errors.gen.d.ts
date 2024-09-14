import { UserFriendlyError } from './def';
export declare class InternalServerError extends UserFriendlyError {
    constructor(message?: string);
}
export declare class TooManyRequest extends UserFriendlyError {
    constructor(message?: string);
}
export declare class UserNotFound extends UserFriendlyError {
    constructor(message?: string);
}
export declare class UserAvatarNotFound extends UserFriendlyError {
    constructor(message?: string);
}
export declare class EmailAlreadyUsed extends UserFriendlyError {
    constructor(message?: string);
}
export declare class SameEmailProvided extends UserFriendlyError {
    constructor(message?: string);
}
export declare class WrongSignInCredentials extends UserFriendlyError {
    constructor(message?: string);
}
declare class UnknownOauthProviderDataType {
    name: string;
}
export declare class UnknownOauthProvider extends UserFriendlyError {
    constructor(args: UnknownOauthProviderDataType, message?: string | ((args: UnknownOauthProviderDataType) => string));
}
export declare class OauthStateExpired extends UserFriendlyError {
    constructor(message?: string);
}
export declare class InvalidOauthCallbackState extends UserFriendlyError {
    constructor(message?: string);
}
declare class MissingOauthQueryParameterDataType {
    name: string;
}
export declare class MissingOauthQueryParameter extends UserFriendlyError {
    constructor(args: MissingOauthQueryParameterDataType, message?: string | ((args: MissingOauthQueryParameterDataType) => string));
}
export declare class OauthAccountAlreadyConnected extends UserFriendlyError {
    constructor(message?: string);
}
export declare class InvalidEmail extends UserFriendlyError {
    constructor(message?: string);
}
declare class InvalidPasswordLengthDataType {
    min: number;
    max: number;
}
export declare class InvalidPasswordLength extends UserFriendlyError {
    constructor(args: InvalidPasswordLengthDataType, message?: string | ((args: InvalidPasswordLengthDataType) => string));
}
export declare class PasswordRequired extends UserFriendlyError {
    constructor(message?: string);
}
export declare class WrongSignInMethod extends UserFriendlyError {
    constructor(message?: string);
}
export declare class EarlyAccessRequired extends UserFriendlyError {
    constructor(message?: string);
}
export declare class SignUpForbidden extends UserFriendlyError {
    constructor(message?: string);
}
export declare class EmailTokenNotFound extends UserFriendlyError {
    constructor(message?: string);
}
export declare class InvalidEmailToken extends UserFriendlyError {
    constructor(message?: string);
}
export declare class LinkExpired extends UserFriendlyError {
    constructor(message?: string);
}
export declare class AuthenticationRequired extends UserFriendlyError {
    constructor(message?: string);
}
export declare class ActionForbidden extends UserFriendlyError {
    constructor(message?: string);
}
export declare class AccessDenied extends UserFriendlyError {
    constructor(message?: string);
}
export declare class EmailVerificationRequired extends UserFriendlyError {
    constructor(message?: string);
}
declare class WorkspaceNotFoundDataType {
    workspaceId: string;
}
export declare class WorkspaceNotFound extends UserFriendlyError {
    constructor(args: WorkspaceNotFoundDataType, message?: string | ((args: WorkspaceNotFoundDataType) => string));
}
declare class NotInWorkspaceDataType {
    workspaceId: string;
}
export declare class NotInWorkspace extends UserFriendlyError {
    constructor(args: NotInWorkspaceDataType, message?: string | ((args: NotInWorkspaceDataType) => string));
}
declare class WorkspaceAccessDeniedDataType {
    workspaceId: string;
}
export declare class WorkspaceAccessDenied extends UserFriendlyError {
    constructor(args: WorkspaceAccessDeniedDataType, message?: string | ((args: WorkspaceAccessDeniedDataType) => string));
}
declare class WorkspaceOwnerNotFoundDataType {
    workspaceId: string;
}
export declare class WorkspaceOwnerNotFound extends UserFriendlyError {
    constructor(args: WorkspaceOwnerNotFoundDataType, message?: string | ((args: WorkspaceOwnerNotFoundDataType) => string));
}
export declare class CantChangeWorkspaceOwner extends UserFriendlyError {
    constructor(message?: string);
}
declare class DocNotFoundDataType {
    workspaceId: string;
    docId: string;
}
export declare class DocNotFound extends UserFriendlyError {
    constructor(args: DocNotFoundDataType, message?: string | ((args: DocNotFoundDataType) => string));
}
declare class DocAccessDeniedDataType {
    workspaceId: string;
    docId: string;
}
export declare class DocAccessDenied extends UserFriendlyError {
    constructor(args: DocAccessDeniedDataType, message?: string | ((args: DocAccessDeniedDataType) => string));
}
declare class VersionRejectedDataType {
    version: string;
    serverVersion: string;
}
export declare class VersionRejected extends UserFriendlyError {
    constructor(args: VersionRejectedDataType, message?: string | ((args: VersionRejectedDataType) => string));
}
declare class InvalidHistoryTimestampDataType {
    timestamp: string;
}
export declare class InvalidHistoryTimestamp extends UserFriendlyError {
    constructor(args: InvalidHistoryTimestampDataType, message?: string | ((args: InvalidHistoryTimestampDataType) => string));
}
declare class DocHistoryNotFoundDataType {
    workspaceId: string;
    docId: string;
    timestamp: number;
}
export declare class DocHistoryNotFound extends UserFriendlyError {
    constructor(args: DocHistoryNotFoundDataType, message?: string | ((args: DocHistoryNotFoundDataType) => string));
}
declare class BlobNotFoundDataType {
    workspaceId: string;
    blobId: string;
}
export declare class BlobNotFound extends UserFriendlyError {
    constructor(args: BlobNotFoundDataType, message?: string | ((args: BlobNotFoundDataType) => string));
}
export declare class ExpectToPublishPage extends UserFriendlyError {
    constructor(message?: string);
}
export declare class ExpectToRevokePublicPage extends UserFriendlyError {
    constructor(message?: string);
}
export declare class PageIsNotPublic extends UserFriendlyError {
    constructor(message?: string);
}
export declare class FailedToCheckout extends UserFriendlyError {
    constructor(message?: string);
}
declare class SubscriptionAlreadyExistsDataType {
    plan: string;
}
export declare class SubscriptionAlreadyExists extends UserFriendlyError {
    constructor(args: SubscriptionAlreadyExistsDataType, message?: string | ((args: SubscriptionAlreadyExistsDataType) => string));
}
declare class SubscriptionNotExistsDataType {
    plan: string;
}
export declare class SubscriptionNotExists extends UserFriendlyError {
    constructor(args: SubscriptionNotExistsDataType, message?: string | ((args: SubscriptionNotExistsDataType) => string));
}
export declare class SubscriptionHasBeenCanceled extends UserFriendlyError {
    constructor(message?: string);
}
export declare class SubscriptionExpired extends UserFriendlyError {
    constructor(message?: string);
}
declare class SameSubscriptionRecurringDataType {
    recurring: string;
}
export declare class SameSubscriptionRecurring extends UserFriendlyError {
    constructor(args: SameSubscriptionRecurringDataType, message?: string | ((args: SameSubscriptionRecurringDataType) => string));
}
export declare class CustomerPortalCreateFailed extends UserFriendlyError {
    constructor(message?: string);
}
declare class SubscriptionPlanNotFoundDataType {
    plan: string;
    recurring: string;
}
export declare class SubscriptionPlanNotFound extends UserFriendlyError {
    constructor(args: SubscriptionPlanNotFoundDataType, message?: string | ((args: SubscriptionPlanNotFoundDataType) => string));
}
export declare class CantUpdateLifetimeSubscription extends UserFriendlyError {
    constructor(message?: string);
}
export declare class CopilotSessionNotFound extends UserFriendlyError {
    constructor(message?: string);
}
export declare class CopilotSessionDeleted extends UserFriendlyError {
    constructor(message?: string);
}
export declare class NoCopilotProviderAvailable extends UserFriendlyError {
    constructor(message?: string);
}
export declare class CopilotFailedToGenerateText extends UserFriendlyError {
    constructor(message?: string);
}
export declare class CopilotFailedToCreateMessage extends UserFriendlyError {
    constructor(message?: string);
}
export declare class UnsplashIsNotConfigured extends UserFriendlyError {
    constructor(message?: string);
}
export declare class CopilotActionTaken extends UserFriendlyError {
    constructor(message?: string);
}
declare class CopilotMessageNotFoundDataType {
    messageId: string;
}
export declare class CopilotMessageNotFound extends UserFriendlyError {
    constructor(args: CopilotMessageNotFoundDataType, message?: string | ((args: CopilotMessageNotFoundDataType) => string));
}
declare class CopilotPromptNotFoundDataType {
    name: string;
}
export declare class CopilotPromptNotFound extends UserFriendlyError {
    constructor(args: CopilotPromptNotFoundDataType, message?: string | ((args: CopilotPromptNotFoundDataType) => string));
}
export declare class CopilotPromptInvalid extends UserFriendlyError {
    constructor(message?: string);
}
declare class CopilotProviderSideErrorDataType {
    provider: string;
    kind: string;
    message: string;
}
export declare class CopilotProviderSideError extends UserFriendlyError {
    constructor(args: CopilotProviderSideErrorDataType, message?: string | ((args: CopilotProviderSideErrorDataType) => string));
}
export declare class BlobQuotaExceeded extends UserFriendlyError {
    constructor(message?: string);
}
export declare class MemberQuotaExceeded extends UserFriendlyError {
    constructor(message?: string);
}
export declare class CopilotQuotaExceeded extends UserFriendlyError {
    constructor(message?: string);
}
declare class RuntimeConfigNotFoundDataType {
    key: string;
}
export declare class RuntimeConfigNotFound extends UserFriendlyError {
    constructor(args: RuntimeConfigNotFoundDataType, message?: string | ((args: RuntimeConfigNotFoundDataType) => string));
}
declare class InvalidRuntimeConfigTypeDataType {
    key: string;
    want: string;
    get: string;
}
export declare class InvalidRuntimeConfigType extends UserFriendlyError {
    constructor(args: InvalidRuntimeConfigTypeDataType, message?: string | ((args: InvalidRuntimeConfigTypeDataType) => string));
}
export declare class MailerServiceIsNotConfigured extends UserFriendlyError {
    constructor(message?: string);
}
export declare class CannotDeleteAllAdminAccount extends UserFriendlyError {
    constructor(message?: string);
}
export declare class CannotDeleteOwnAccount extends UserFriendlyError {
    constructor(message?: string);
}
export declare enum ErrorNames {
    INTERNAL_SERVER_ERROR = 0,
    TOO_MANY_REQUEST = 1,
    USER_NOT_FOUND = 2,
    USER_AVATAR_NOT_FOUND = 3,
    EMAIL_ALREADY_USED = 4,
    SAME_EMAIL_PROVIDED = 5,
    WRONG_SIGN_IN_CREDENTIALS = 6,
    UNKNOWN_OAUTH_PROVIDER = 7,
    OAUTH_STATE_EXPIRED = 8,
    INVALID_OAUTH_CALLBACK_STATE = 9,
    MISSING_OAUTH_QUERY_PARAMETER = 10,
    OAUTH_ACCOUNT_ALREADY_CONNECTED = 11,
    INVALID_EMAIL = 12,
    INVALID_PASSWORD_LENGTH = 13,
    PASSWORD_REQUIRED = 14,
    WRONG_SIGN_IN_METHOD = 15,
    EARLY_ACCESS_REQUIRED = 16,
    SIGN_UP_FORBIDDEN = 17,
    EMAIL_TOKEN_NOT_FOUND = 18,
    INVALID_EMAIL_TOKEN = 19,
    LINK_EXPIRED = 20,
    AUTHENTICATION_REQUIRED = 21,
    ACTION_FORBIDDEN = 22,
    ACCESS_DENIED = 23,
    EMAIL_VERIFICATION_REQUIRED = 24,
    WORKSPACE_NOT_FOUND = 25,
    NOT_IN_WORKSPACE = 26,
    WORKSPACE_ACCESS_DENIED = 27,
    WORKSPACE_OWNER_NOT_FOUND = 28,
    CANT_CHANGE_WORKSPACE_OWNER = 29,
    DOC_NOT_FOUND = 30,
    DOC_ACCESS_DENIED = 31,
    VERSION_REJECTED = 32,
    INVALID_HISTORY_TIMESTAMP = 33,
    DOC_HISTORY_NOT_FOUND = 34,
    BLOB_NOT_FOUND = 35,
    EXPECT_TO_PUBLISH_PAGE = 36,
    EXPECT_TO_REVOKE_PUBLIC_PAGE = 37,
    PAGE_IS_NOT_PUBLIC = 38,
    FAILED_TO_CHECKOUT = 39,
    SUBSCRIPTION_ALREADY_EXISTS = 40,
    SUBSCRIPTION_NOT_EXISTS = 41,
    SUBSCRIPTION_HAS_BEEN_CANCELED = 42,
    SUBSCRIPTION_EXPIRED = 43,
    SAME_SUBSCRIPTION_RECURRING = 44,
    CUSTOMER_PORTAL_CREATE_FAILED = 45,
    SUBSCRIPTION_PLAN_NOT_FOUND = 46,
    CANT_UPDATE_LIFETIME_SUBSCRIPTION = 47,
    COPILOT_SESSION_NOT_FOUND = 48,
    COPILOT_SESSION_DELETED = 49,
    NO_COPILOT_PROVIDER_AVAILABLE = 50,
    COPILOT_FAILED_TO_GENERATE_TEXT = 51,
    COPILOT_FAILED_TO_CREATE_MESSAGE = 52,
    UNSPLASH_IS_NOT_CONFIGURED = 53,
    COPILOT_ACTION_TAKEN = 54,
    COPILOT_MESSAGE_NOT_FOUND = 55,
    COPILOT_PROMPT_NOT_FOUND = 56,
    COPILOT_PROMPT_INVALID = 57,
    COPILOT_PROVIDER_SIDE_ERROR = 58,
    BLOB_QUOTA_EXCEEDED = 59,
    MEMBER_QUOTA_EXCEEDED = 60,
    COPILOT_QUOTA_EXCEEDED = 61,
    RUNTIME_CONFIG_NOT_FOUND = 62,
    INVALID_RUNTIME_CONFIG_TYPE = 63,
    MAILER_SERVICE_IS_NOT_CONFIGURED = 64,
    CANNOT_DELETE_ALL_ADMIN_ACCOUNT = 65,
    CANNOT_DELETE_OWN_ACCOUNT = 66
}
export declare const ErrorDataUnionType: UnknownOauthProviderDataType | MissingOauthQueryParameterDataType | InvalidPasswordLengthDataType | WorkspaceNotFoundDataType | NotInWorkspaceDataType | WorkspaceAccessDeniedDataType | WorkspaceOwnerNotFoundDataType | DocNotFoundDataType | DocAccessDeniedDataType | VersionRejectedDataType | InvalidHistoryTimestampDataType | DocHistoryNotFoundDataType | BlobNotFoundDataType | SubscriptionAlreadyExistsDataType | SubscriptionNotExistsDataType | SameSubscriptionRecurringDataType | SubscriptionPlanNotFoundDataType | CopilotMessageNotFoundDataType | CopilotPromptNotFoundDataType | CopilotProviderSideErrorDataType | RuntimeConfigNotFoundDataType | InvalidRuntimeConfigTypeDataType;
export {};
//# sourceMappingURL=errors.gen.d.ts.map