import sinon from 'sinon';
import 'should';
import CacheDao from '../CacheDao';
import HotelApiDao from '../HotelApiDao';
import { HotelDaoInterface } from '../HotelDaoInterface';
import MockStorage from '../../../common/cache/MockStorage';

describe('modules - hotel - dao', () => {
    let sandbox: any;
    let cacheDao: HotelDaoInterface;
    let storageStubGetItem: any;
    let hotelDaoStubGetHotels: any;

    beforeEach(async () => {
        const storage = new MockStorage();
        const hotelDao = new HotelApiDao('https://www.test.com/v1/api');
        sandbox = sinon.createSandbox();
        storageStubGetItem = sandbox.stub(storage, 'getItem');
        hotelDaoStubGetHotels = sandbox.stub(hotelDao, 'getHotels');

        cacheDao = new CacheDao(hotelDao, storage);
    });

    afterEach(async () => {
        sandbox.restore();
    });

    describe('CacheDao', () => {
        it('should return data from cache when there is data', async () => {
            const data = '{"hotels": {"data": [{}]}}';
            storageStubGetItem.returns(data);
            const hotels = await cacheDao.getHotels();

            expect(hotels.length).toBe(1);
            storageStubGetItem.calledOnce.should.be.true();
        });

        it('should get data from other source when no data is in cache', async () => {
            const data = '{}';
            storageStubGetItem.returns(data);
            hotelDaoStubGetHotels.returns({});
            await cacheDao.getHotels();

            hotelDaoStubGetHotels.calledOnce.should.be.true();
        });
    });
});
