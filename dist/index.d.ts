export declare class Tred {
    private config;
    private fetch;
    constructor(config: TredConfig);
    top(): Promise<Listing<Link>>;
    best(): Promise<Listing<Link>>;
}
