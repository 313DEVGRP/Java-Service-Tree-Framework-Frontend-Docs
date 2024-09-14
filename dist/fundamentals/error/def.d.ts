export type UserFriendlyErrorBaseType = 'bad_request' | 'too_many_requests' | 'resource_not_found' | 'resource_already_exists' | 'invalid_input' | 'action_forbidden' | 'no_permission' | 'quota_exceeded' | 'authentication_required' | 'internal_server_error';
type ErrorArgType = 'string' | 'number' | 'boolean';
type ErrorArgs = Record<string, ErrorArgType | Record<string, ErrorArgType>>;
export type UserFriendlyErrorOptions = {
    type: UserFriendlyErrorBaseType;
    args?: ErrorArgs;
    message: string | ((args: any) => string);
};
export declare class UserFriendlyError extends Error {
    /**
     * Standard HTTP status code
     */
    status: number;
    /**
     * Business error category, for example 'resource_already_exists' or 'quota_exceeded'
     */
    type: string;
    /**
     * Additional data that could be used for error handling or formatting
     */
    data: any;
    constructor(type: UserFriendlyErrorBaseType, name: keyof typeof USER_FRIENDLY_ERRORS, message?: string | ((args?: any) => string), args?: any);
    toJSON(): {
        status: number;
        code: string;
        type: string;
        name: string;
        message: string;
        data: any;
    };
    log(context: string): void;
}
export declare function generateUserFriendlyErrors(): string;
export declare const USER_FRIENDLY_ERRORS: {
    internal_server_error: {
        type: "internal_server_error";
        message: string;
    };
    too_many_request: {
        type: "too_many_requests";
        message: string;
    };
    user_not_found: {
        type: "resource_not_found";
        message: string;
    };
    user_avatar_not_found: {
        type: "resource_not_found";
        message: string;
    };
    email_already_used: {
        type: "resource_already_exists";
        message: string;
    };
    same_email_provided: {
        type: "invalid_input";
        message: string;
    };
    wrong_sign_in_credentials: {
        type: "invalid_input";
        message: string;
    };
    unknown_oauth_provider: {
        type: "invalid_input";
        args: {
            name: "string";
        };
        message: ({ name }: any) => string;
    };
    oauth_state_expired: {
        type: "bad_request";
        message: string;
    };
    invalid_oauth_callback_state: {
        type: "bad_request";
        message: string;
    };
    missing_oauth_query_parameter: {
        type: "bad_request";
        args: {
            name: "string";
        };
        message: ({ name }: any) => string;
    };
    oauth_account_already_connected: {
        type: "bad_request";
        message: string;
    };
    invalid_email: {
        type: "invalid_input";
        message: string;
    };
    invalid_password_length: {
        type: "invalid_input";
        args: {
            min: "number";
            max: "number";
        };
        message: ({ min, max }: any) => string;
    };
    password_required: {
        type: "invalid_input";
        message: string;
    };
    wrong_sign_in_method: {
        type: "invalid_input";
        message: string;
    };
    early_access_required: {
        type: "action_forbidden";
        message: string;
    };
    sign_up_forbidden: {
        type: "action_forbidden";
        message: string;
    };
    email_token_not_found: {
        type: "invalid_input";
        message: string;
    };
    invalid_email_token: {
        type: "invalid_input";
        message: string;
    };
    link_expired: {
        type: "bad_request";
        message: string;
    };
    authentication_required: {
        type: "authentication_required";
        message: string;
    };
    action_forbidden: {
        type: "action_forbidden";
        message: string;
    };
    access_denied: {
        type: "no_permission";
        message: string;
    };
    email_verification_required: {
        type: "action_forbidden";
        message: string;
    };
    workspace_not_found: {
        type: "resource_not_found";
        args: {
            workspaceId: "string";
        };
        message: ({ workspaceId }: any) => string;
    };
    not_in_workspace: {
        type: "action_forbidden";
        args: {
            workspaceId: "string";
        };
        message: ({ workspaceId }: any) => string;
    };
    workspace_access_denied: {
        type: "no_permission";
        args: {
            workspaceId: "string";
        };
        message: ({ workspaceId }: any) => string;
    };
    workspace_owner_not_found: {
        type: "internal_server_error";
        args: {
            workspaceId: "string";
        };
        message: ({ workspaceId }: any) => string;
    };
    cant_change_workspace_owner: {
        type: "action_forbidden";
        message: string;
    };
    doc_not_found: {
        type: "resource_not_found";
        args: {
            workspaceId: "string";
            docId: "string";
        };
        message: ({ workspaceId, docId }: any) => string;
    };
    doc_access_denied: {
        type: "no_permission";
        args: {
            workspaceId: "string";
            docId: "string";
        };
        message: ({ workspaceId, docId }: any) => string;
    };
    version_rejected: {
        type: "action_forbidden";
        args: {
            version: "string";
            serverVersion: "string";
        };
        message: ({ version, serverVersion }: any) => string;
    };
    invalid_history_timestamp: {
        type: "invalid_input";
        args: {
            timestamp: "string";
        };
        message: string;
    };
    doc_history_not_found: {
        type: "resource_not_found";
        args: {
            workspaceId: "string";
            docId: "string";
            timestamp: "number";
        };
        message: ({ workspaceId, docId, timestamp }: any) => string;
    };
    blob_not_found: {
        type: "resource_not_found";
        args: {
            workspaceId: "string";
            blobId: "string";
        };
        message: ({ workspaceId, blobId }: any) => string;
    };
    expect_to_publish_page: {
        type: "invalid_input";
        message: string;
    };
    expect_to_revoke_public_page: {
        type: "invalid_input";
        message: string;
    };
    page_is_not_public: {
        type: "bad_request";
        message: string;
    };
    failed_to_checkout: {
        type: "internal_server_error";
        message: string;
    };
    subscription_already_exists: {
        type: "resource_already_exists";
        args: {
            plan: "string";
        };
        message: ({ plan }: any) => string;
    };
    subscription_not_exists: {
        type: "resource_not_found";
        args: {
            plan: "string";
        };
        message: ({ plan }: any) => string;
    };
    subscription_has_been_canceled: {
        type: "action_forbidden";
        message: string;
    };
    subscription_expired: {
        type: "action_forbidden";
        message: string;
    };
    same_subscription_recurring: {
        type: "bad_request";
        args: {
            recurring: "string";
        };
        message: ({ recurring }: any) => string;
    };
    customer_portal_create_failed: {
        type: "internal_server_error";
        message: string;
    };
    subscription_plan_not_found: {
        type: "resource_not_found";
        args: {
            plan: "string";
            recurring: "string";
        };
        message: string;
    };
    cant_update_lifetime_subscription: {
        type: "action_forbidden";
        message: string;
    };
    copilot_session_not_found: {
        type: "resource_not_found";
        message: string;
    };
    copilot_session_deleted: {
        type: "action_forbidden";
        message: string;
    };
    no_copilot_provider_available: {
        type: "internal_server_error";
        message: string;
    };
    copilot_failed_to_generate_text: {
        type: "internal_server_error";
        message: string;
    };
    copilot_failed_to_create_message: {
        type: "internal_server_error";
        message: string;
    };
    unsplash_is_not_configured: {
        type: "internal_server_error";
        message: string;
    };
    copilot_action_taken: {
        type: "action_forbidden";
        message: string;
    };
    copilot_message_not_found: {
        type: "resource_not_found";
        args: {
            messageId: "string";
        };
        message: ({ messageId }: any) => string;
    };
    copilot_prompt_not_found: {
        type: "resource_not_found";
        args: {
            name: "string";
        };
        message: ({ name }: any) => string;
    };
    copilot_prompt_invalid: {
        type: "invalid_input";
        message: string;
    };
    copilot_provider_side_error: {
        type: "internal_server_error";
        args: {
            provider: "string";
            kind: "string";
            message: "string";
        };
        message: ({ provider, kind, message }: any) => string;
    };
    blob_quota_exceeded: {
        type: "quota_exceeded";
        message: string;
    };
    member_quota_exceeded: {
        type: "quota_exceeded";
        message: string;
    };
    copilot_quota_exceeded: {
        type: "quota_exceeded";
        message: string;
    };
    runtime_config_not_found: {
        type: "resource_not_found";
        args: {
            key: "string";
        };
        message: ({ key }: any) => string;
    };
    invalid_runtime_config_type: {
        type: "invalid_input";
        args: {
            key: "string";
            want: "string";
            get: "string";
        };
        message: ({ key, want, get }: any) => string;
    };
    mailer_service_is_not_configured: {
        type: "internal_server_error";
        message: string;
    };
    cannot_delete_all_admin_account: {
        type: "action_forbidden";
        message: string;
    };
    cannot_delete_own_account: {
        type: "action_forbidden";
        message: string;
    };
};
export {};
//# sourceMappingURL=def.d.ts.map