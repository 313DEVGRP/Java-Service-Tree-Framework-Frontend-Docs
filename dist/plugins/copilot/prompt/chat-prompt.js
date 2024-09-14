import { Logger } from '@nestjs/common';
import Mustache from 'mustache';
import { getTokenEncoder, } from '../types';
// disable escaping
Mustache.escape = (text) => text;
function extractMustacheParams(template) {
    const regex = /\{\{\s*([^{}]+)\s*\}\}/g;
    const params = [];
    let match;
    while ((match = regex.exec(template)) !== null) {
        params.push(match[1]);
    }
    return Array.from(new Set(params));
}
export class ChatPrompt {
    static createFromPrompt(options) {
        return new ChatPrompt(options.name, options.action || undefined, options.model, options.config, options.messages);
    }
    constructor(name, action, model, config, messages) {
        this.name = name;
        this.action = action;
        this.model = model;
        this.config = config;
        this.messages = messages;
        this.logger = new Logger(ChatPrompt.name);
        this.templateParamKeys = [];
        this.templateParams = {};
        this.encoder = getTokenEncoder(model);
        this.promptTokenSize =
            this.encoder?.count(messages.map(m => m.content).join('') || '') || 0;
        this.templateParamKeys = extractMustacheParams(messages.map(m => m.content).join(''));
        this.templateParams = messages.reduce((acc, m) => Object.assign(acc, m.params), {});
    }
    /**
     * get prompt token size
     */
    get tokens() {
        return this.promptTokenSize;
    }
    /**
     * get prompt param keys in template
     */
    get paramKeys() {
        return this.templateParamKeys.slice();
    }
    /**
     * get prompt params
     */
    get params() {
        return { ...this.templateParams };
    }
    encode(message) {
        return this.encoder?.count(message) || 0;
    }
    checkParams(params, sessionId) {
        const selfParams = this.templateParams;
        for (const key of Object.keys(selfParams)) {
            const options = selfParams[key];
            const income = params[key];
            if (typeof income !== 'string' ||
                (Array.isArray(options) && !options.includes(income))) {
                if (sessionId) {
                    const prefix = income
                        ? `Invalid param value: ${key}=${income}`
                        : `Missing param value: ${key}`;
                    this.logger.warn(`${prefix} in session ${sessionId}, use default options: ${Array.isArray(options) ? options[0] : options}`);
                }
                if (Array.isArray(options)) {
                    // use the first option if income is not in options
                    params[key] = options[0];
                }
                else {
                    params[key] = options;
                }
            }
        }
    }
    /**
     * render prompt messages with params
     * @param params record of params, e.g. { name: 'Alice' }
     * @returns e.g. [{ role: 'system', content: 'Hello, {{name}}' }] => [{ role: 'system', content: 'Hello, Alice' }]
     */
    finish(params, sessionId) {
        this.checkParams(params, sessionId);
        const { attachments: attach, ...restParams } = params;
        const paramsAttach = Array.isArray(attach) ? attach : [];
        return this.messages.map(({ attachments: attach, content, params: _, ...rest }) => {
            const result = {
                ...rest,
                params,
                content: Mustache.render(content, restParams),
            };
            const attachments = [
                ...(Array.isArray(attach) ? attach : []),
                ...paramsAttach,
            ];
            if (attachments.length && rest.role === 'user') {
                result.attachments = attachments;
            }
            return result;
        });
    }
}
//# sourceMappingURL=chat-prompt.js.map