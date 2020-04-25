export interface CacheInterface<T> {
    getItem(key: string): T;
}
