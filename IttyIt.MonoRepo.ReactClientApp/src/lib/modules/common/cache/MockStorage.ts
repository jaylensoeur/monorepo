import { CacheInterface } from './CacheInterface';

export default class MockStorage implements CacheInterface<string> {
    getItem(key: string): string {
        return '';
    }
}
