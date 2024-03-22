import { GoogleUser } from "@domain/entities/GoogleUser";
import { UserRole } from "@domain/entities/User";

export type HttpRequest<TBody = any, TParams = any, TQuery = any, THeaders = any, TFiles = any, Thost = any, TProtocole = any> = {
    body?: TBody;
    params?: TParams;
    query?: TQuery,
    headers?: THeaders;
    files?: TFiles;
    userId?: string;
    userRole?: UserRole;

    user?:GoogleUser;
    host?: Thost;
    protocole?: TProtocole;

};