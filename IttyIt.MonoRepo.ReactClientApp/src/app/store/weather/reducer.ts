import { HotelDto } from '../../../lib/modules/HotelDto';

type Action = {
    type: string;
    payload: any;
};

const weather = (state: any = {}, action: Action) => {
    switch (action.type) {
        case 'FETCH_WEATHER_LOADING':
            return {
                ...state,
                ...{
                    meta: {
                        isLoaded: false,
                    },
                },
            };
        case 'FETCH_WEATHER':
            if (!action.payload || action.payload.length < 1) {
                return state;
            }

            return {
                ...state,
                ...{
                    data: action.payload,
                },
            };
        case 'FETCH_WEATHER_LOADED':
            return {
                ...state,
                ...{
                    meta: {
                        isLoaded: true,
                    },
                },
            };
        default:
            return state;
    }
};

export default weather;
