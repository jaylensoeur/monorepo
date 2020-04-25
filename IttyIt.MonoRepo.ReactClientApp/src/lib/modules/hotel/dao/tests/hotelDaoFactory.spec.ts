import 'should';
import HotelDaoFactory from '../HotelDaoFactory';

describe('modules - hotel - dao', () => {
    describe('HotelDaoFactory', () => {
        it('should create a mock hotelDao', async () => {
            const hotelDaoFactory = new HotelDaoFactory({ apiUrl: '' });
            const hotelDao = hotelDaoFactory.createInstance();
            expect(hotelDao.constructor.name).toBe('HotelMockDao');
        });

        it('should create a api with url when a url exist', async () => {
            const hotelDaoFactory = new HotelDaoFactory({ apiUrl: 'https://api.something.com/v1' });
            const hotelDao = hotelDaoFactory.createInstance();
            expect(hotelDao.constructor.name).toBe('HotelApiDao');
        });
    });
});
