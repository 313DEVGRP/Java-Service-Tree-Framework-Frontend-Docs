import { Logger } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import type { Request } from 'express';
import { GraphqlContext } from '../graphql';
export declare const MUTEX_RETRY = 5;
export declare const MUTEX_WAIT = 100;
export declare class MutexService {
    private readonly request;
    private readonly ref;
    protected logger: Logger;
    private readonly locker;
    constructor(request: Request | GraphqlContext, ref: ModuleRef);
    protected getId(): string;
    /**
     * lock an resource and return a lock guard, which will release the lock when disposed
     *
     * if the lock is not available, it will retry for [MUTEX_RETRY] times
     *
     * usage:
     * ```typescript
     * {
     *   // lock is acquired here
     *   await using lock = await mutex.lock('resource-key');
     *   if (lock) {
     *     // do something
     *   } else {
     *     // failed to lock
     *   }
     * }
     * // lock is released here
     * ```
     * @param key resource key
     * @returns LockGuard
     */
    lock(key: string): Promise<import("./lock").Lock | undefined>;
}
//# sourceMappingURL=mutex.d.ts.map