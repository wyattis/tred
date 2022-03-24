declare type RequestMiddleware = (next: RequestMiddleware, uri: RequestInfo, opts?: RequestInit) => Response | Promise<Response>;
declare type ResponseMiddleware = (next: ResponseMiddleware, uri: RequestInfo, res: Response) => Response | Promise<Response>;
declare type FetchInit = Omit<RequestInit, 'method'> & {
    query?: Record<string, string | string[]>;
    baseUrl?: string;
};
export declare class Fetch {
    private opts;
    before: RequestMiddleware[];
    after: ResponseMiddleware[];
    constructor(opts?: FetchInit);
    do(uri: string, method: string, init?: FetchInit & RequestInit): Promise<Response>;
    private merge;
    get(uri: string, opts?: FetchInit): Promise<Response>;
    post(uri: string, opts?: FetchInit): Promise<Response>;
    put(uri: string, opts?: FetchInit): Promise<Response>;
    delete(uri: string, opts?: FetchInit): Promise<Response>;
}
export declare class OAuthFetch extends Fetch {
    private store;
    constructor(opts: FetchInit | undefined, store: Store);
}
export {};
