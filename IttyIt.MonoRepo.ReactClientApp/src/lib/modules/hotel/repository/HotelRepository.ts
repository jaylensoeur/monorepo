import { HotelDaoInterface } from '../dao/HotelDaoInterface';
import { HotelDto } from '../../HotelDto';

export default class HotelRepository {
    constructor(private readonly hotelDao: HotelDaoInterface) {}

    async getHotels(): Promise<HotelDto[]> {
        return this.hotelDao.getHotels();
    }
}
