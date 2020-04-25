import HotelRepository from '../lib/modules/hotel/repository/HotelRepository';
import HotelDaoFactory from '../lib/modules/hotel/dao/HotelDaoFactory';
import config from './config.json';
import CacheDao from '../lib/modules/hotel/dao/CacheDao';
import WeatherRepository from '../lib/modules/weather/repository/WeatherRepository';
import WeatherApiDao from '../lib/modules/weather/dao/WeatherApiDao';

const hotelDaoFactory = new HotelDaoFactory(config);
const cacheDao = new CacheDao(hotelDaoFactory.createInstance(), window.localStorage);
const weatherDao = new WeatherApiDao();
export const weatherRepository = new WeatherRepository(weatherDao);
export const hotelRepository = new HotelRepository(cacheDao);
