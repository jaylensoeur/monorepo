import HotelApiDao from './HotelApiDao';
import HotelMockDao from './HotelMockDao';

export default class HotelFactory {
    constructor(private readonly config: any) {}

    createInstance() {
        if (this.config.apiUrl.replace(/ /g, '').length) {
            return new HotelApiDao(this.config.apiUrl);
        } else {
            return new HotelMockDao();
        }
    }
}
