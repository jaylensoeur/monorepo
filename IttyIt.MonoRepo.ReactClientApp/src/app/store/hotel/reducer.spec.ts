import reducer from './reducer';

describe('app - store - hotel', () => {
    describe('hotel reducer', () => {
        it('should add meta isLoaded to state', async () => {
            const newState = reducer({}, { type: 'FETCH_HOTEL_LOADING', payload: {} });
            expect(newState.meta.isLoaded).toBeFalsy();
        });

        it('should add meta isLoaded to state', async () => {
            const newState = reducer({}, { type: 'FETCH_HOTEL_LOADED', payload: {} });
            expect(newState.meta.isLoaded).toBeTruthy();
        });

        it('should sort by price by ASC order', async () => {
            const newState = reducer(
                {},
                {
                    type: 'FETCH_HOTEL_SORT_BY_PRICE_ASC',
                    payload: [{ price: 295 }, { price: 595 }, { price: 195 }, { price: 1 }, { price: 595 }],
                },
            );
            expect(newState.data.length).toBe(5);
            expect(newState.data[0].price).toBe(1);
            expect(newState.data[1].price).toBe(195);
            expect(newState.data[2].price).toBe(295);
            expect(newState.data[3].price).toBe(595);
            expect(newState.data[4].price).toBe(595);
        });

        it('should return the current state when there is no hotels in the payload', async () => {
            const oldState: any = { data: [] };
            const newState = reducer(oldState, {
                type: 'FETCH_HOTEL_SORT_BY_PRICE_ASC',
                payload: [],
            });
            expect(newState.data.length).toBe(0);
            expect(oldState.data.length).toBe(newState.data.length);
        });

        it('should sort by price by DESC order', async () => {
            const newState = reducer(
                {},
                {
                    type: 'FETCH_HOTEL_SORT_BY_PRICE_DESC',
                    payload: [{ price: 295 }, { price: 595 }, { price: 195 }, { price: 1 }, { price: 595 }],
                },
            );

            expect(newState.data.length).toBe(5);
            expect(newState.data[0].price).toBe(595);
            expect(newState.data[1].price).toBe(595);
            expect(newState.data[2].price).toBe(295);
            expect(newState.data[3].price).toBe(195);
            expect(newState.data[4].price).toBe(1);
        });

        it('should return the current state when there is no hotels in the payload', async () => {
            const oldState: any = { data: [] };
            const newState = reducer(oldState, {
                type: 'FETCH_HOTEL_SORT_BY_PRICE_DEC',
                payload: [],
            });
            expect(newState.data.length).toBe(0);
            expect(oldState.data.length).toBe(newState.data.length);
        });

        it('should return default state when action fails all match cases', async () => {
            const oldState: any = { data: [], name: 'jay' };
            const newState = reducer(oldState, {
                type: 'FETCH_HOTEL_SORT_B',
                payload: [],
            });
            expect(newState.data.length).toBe(0);
            expect(oldState.data.length).toBe(newState.data.length);
            expect(oldState.name).toBe(newState.name);
            expect(oldState.name).toBe('jay');
        });
    });
});
