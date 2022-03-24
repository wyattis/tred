export declare class LocalStore implements Store {
    get<T>(key: string): Promise<T | undefined>;
    set<T>(key: string, val: T): Promise<void>;
    del(key: string): Promise<void>;
}
