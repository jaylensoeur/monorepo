/** eslint-disable @typescript-eslint/explicit-function-return-type **/

import { hotelRepository } from '../../dependencies';

const fetchSortBy = async (dispatch: (o: object) => void, sortBy: string) => {
    dispatch({ type: 'FETCH_HOTEL_LOADING' });
    const hotels = await hotelRepository.getHotels();
    dispatch({ type: `FETCH_HOTEL_SORT_BY_PRICE_${sortBy}`, payload: hotels });
    dispatch({ type: 'FETCH_HOTEL_LOADED' });
};

export const sortByPriceAsc = () => {
    return (dispatch: any) => {
        return fetchSortBy(dispatch, 'ASC');
    };
};

export const sortByPriceDesc = () => {
    return (dispatch: any) => {
        return fetchSortBy(dispatch, 'DESC');
    };
};

export const mapDispatchToProps = (dispatch: any) => {
    return {
        sortByPriceAsc: () => dispatch(sortByPriceAsc()),
        sortByPriceDesc: () => dispatch(sortByPriceDesc()),
    };
};
