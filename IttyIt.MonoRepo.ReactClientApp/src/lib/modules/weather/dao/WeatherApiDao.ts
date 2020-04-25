import axios from 'axios';

export default class WeatherApiDao {
    async getWeahterForcast() {
        const data = await axios.get('http://localhost:5000/weatherforecast');
        return data.data;
    }
}
