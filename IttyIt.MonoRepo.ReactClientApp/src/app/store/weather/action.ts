/** eslint-disable @typescript-eslint/explicit-function-return-type **/

import { weatherRepository } from '../../dependencies';

const fetchWeather = async (dispatch: (o: object) => void) => {
    dispatch({ type: 'FETCH_WEATHER_LOADING' });
    const weather = await weatherRepository.getWeather();
    dispatch({ type: `FETCH_WEATHER`, payload: weather });
    dispatch({ type: 'FETCH_WEATHER_LOADED' });
};

export const getWeather = () => {
    return (dispatch: any) => {
        return fetchWeather(dispatch);
    };
};

export const mapDispatchToProps = (dispatch: any) => {
    return {
        getWeather: () => dispatch(getWeather()),
    };
};
