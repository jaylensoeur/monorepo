import { HotelDaoInterface } from './HotelDaoInterface';
import { HotelDto } from '../../HotelDto';

export default class HotelApiDao implements HotelDaoInterface {
    constructor(private readonly apiUrl: string) {}

    async getHotels(): Promise<HotelDto[]> {
        console.warn('api url not configured yet');
        return [];
    }
}
