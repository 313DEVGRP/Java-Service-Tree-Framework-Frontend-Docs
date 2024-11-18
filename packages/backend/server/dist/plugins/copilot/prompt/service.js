var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PromptConfigSchema, PromptMessageSchema, } from '../types';
import { ChatPrompt } from './chat-prompt';
import { refreshPrompts } from './prompts';
let PromptService = class PromptService {
    constructor(db) {
        this.db = db;
        this.cache = new Map();
    }
    async onModuleInit() {
        await refreshPrompts(this.db);
    }
    /**
     * list prompt names
     * @returns prompt names
     */
    async listNames() {
        return this.db.aiPrompt
            .findMany({ select: { name: true } })
            .then(prompts => Array.from(new Set(prompts.map(p => p.name))));
    }
    async list() {
        return this.db.aiPrompt.findMany({
            select: {
                name: true,
                action: true,
                model: true,
                config: true,
                messages: {
                    select: {
                        role: true,
                        content: true,
                        params: true,
                    },
                    orderBy: {
                        idx: 'asc',
                    },
                },
            },
        });
    }
    /**
     * get prompt messages by prompt name
     * @param name prompt name
     * @returns prompt messages
     */
    async get(name) {
        const cached = this.cache.get(name);
        if (cached)
            return cached;
        const prompt = await this.db.aiPrompt.findUnique({
            where: {
                name,
            },
            select: {
                name: true,
                action: true,
                model: true,
                config: true,
                messages: {
                    select: {
                        role: true,
                        content: true,
                        params: true,
                    },
                    orderBy: {
                        idx: 'asc',
                    },
                },
            },
        });
        const messages = PromptMessageSchema.array().safeParse(prompt?.messages);
        const config = PromptConfigSchema.safeParse(prompt?.config);
        if (prompt && messages.success && config.success) {
            const chatPrompt = ChatPrompt.createFromPrompt({
                ...prompt,
                config: config.data,
                messages: messages.data,
            });
            this.cache.set(name, chatPrompt);
            return chatPrompt;
        }
        return null;
    }
    async set(name, model, messages, config) {
        return await this.db.aiPrompt
            .create({
            data: {
                name,
                model,
                config: config || undefined,
                messages: {
                    create: messages.map((m, idx) => ({
                        idx,
                        ...m,
                        attachments: m.attachments || undefined,
                        params: m.params || undefined,
                    })),
                },
            },
        })
            .then(ret => ret.id);
    }
    async update(name, messages, config) {
        const { id } = await this.db.aiPrompt.update({
            where: { name },
            data: {
                config: config || undefined,
                messages: {
                    // cleanup old messages
                    deleteMany: {},
                    create: messages.map((m, idx) => ({
                        idx,
                        ...m,
                        attachments: m.attachments || undefined,
                        params: m.params || undefined,
                    })),
                },
            },
        });
        this.cache.delete(name);
        return id;
    }
    async delete(name) {
        const { id } = await this.db.aiPrompt.delete({ where: { name } });
        this.cache.delete(name);
        return id;
    }
};
PromptService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Object])
], PromptService);
export { PromptService };
//# sourceMappingURL=service.js.map