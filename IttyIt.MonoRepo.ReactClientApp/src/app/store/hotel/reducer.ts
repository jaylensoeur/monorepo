import { HotelDto } from '../../../lib/modules/HotelDto';

type Action = {
    type: string;
    payload: any;
};

const hotels = (state: any = {}, action: Action) => {
    switch (action.type) {
        case 'FETCH_HOTEL_LOADING':
            return {
                ...state,
                ...{
                    meta: {
                        isLoaded: false,
                    },
                },
            };
        case 'FETCH_HOTEL_LOADED':
            return {
                ...state,
                ...{
                    meta: {
                        isLoaded: true,
                    },
                },
            };
        case 'FETCH_HOTEL_SORT_BY_PRICE_ASC':
            if (!action.payload || action.payload.length < 1) {
                return state;
            }
            const sortedDataAsc = action.payload.sort((hotelA: HotelDto, hotelB: HotelDto) => {
                return hotelA.price === hotelB.price ? 0 : hotelA.price > hotelB.price ? 1 : -1;
            });

            return {
                ...state,
                ...{
                    data: [...sortedDataAsc],
                },
            };
        case 'FETCH_HOTEL_SORT_BY_PRICE_DESC':
            if (!action.payload || action.payload.length < 1) {
                return state;
            }
            const sortedDataDesc = action.payload.sort((hotelA: HotelDto, hotelB: HotelDto) => {
                return hotelA.price === hotelB.price ? 0 : hotelA.price > hotelB.price ? -1 : 1;
            });

            return {
                ...state,
                ...{
                    data: [...sortedDataDesc],
                },
            };
        default:
            return state;
    }
};

export default hotels;
