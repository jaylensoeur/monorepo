import { HotelDaoInterface } from './HotelDaoInterface';
import { CacheInterface } from '../../common/cache/CacheInterface';

export default class CacheDao implements HotelDaoInterface {
    constructor(private readonly hotelDao: HotelDaoInterface, private readonly cacheStorage: CacheInterface<string>) {}

    /**
     * We can add a bit more smarts here so the cache can make a request for etag value
     * if data has change at the source of truth
     */
    async getHotels(): Promise<any> {
        const data: { hotels: any } = JSON.parse(this.cacheStorage.getItem('redux'));
        if (data.hotels && data.hotels.data && data.hotels.data.length) {
            return data.hotels.data;
        }

        return this.hotelDao.getHotels();
    }
}
