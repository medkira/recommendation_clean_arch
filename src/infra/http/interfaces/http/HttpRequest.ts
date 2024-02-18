export type HttpRequest<TBody = any, TParams = any, Theaders = any> = {
    body?: TBody;
    params?: TParams;
    headers?: Theaders;
    userId?: string;
}