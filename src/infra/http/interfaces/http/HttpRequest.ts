import { UserRole } from "@domain/entities/User";

export type HttpRequest<TBody = any, TParams = any, THeaders = any> = {
    body?: TBody;
    params?: TParams;
    headers?: THeaders;
    userId?: string;
    userRole?: UserRole;
};