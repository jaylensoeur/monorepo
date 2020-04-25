import WeatherApiDao from '../dao/WeatherApiDao';

export default class WeatherRepository {
    constructor(private readonly weatherDao: WeatherApiDao) {}

    async getWeather() {
        return this.weatherDao.getWeahterForcast();
    }
}
