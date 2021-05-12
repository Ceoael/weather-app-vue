function formattedDate(date) {
    const [dayName, day, month] = new Date(date).toUTCString().split(' ');
    return `${dayName} ${day} ${month}`;
}

export default {
    loading(state) {
        return state.loading;
    },
    weatherForecast(state) {
        if (!state.weatherForecast['consolidated_weather']) return {error: 'Store is empty.'};
        const consolidatedWeather = state.weatherForecast['consolidated_weather'];

        return consolidatedWeather;
    },
    isForecastAvailable(state) {
        return state.weatherForecast;
    },
    todayWeatherForecast(_, getters) {
        const {
            applicable_date,
            weather_state_name,
            wind_direction_compass,
            the_temp,
            wind_speed,
            air_pressure,
            humidity,
            visibility} = getters.weatherForecast[0];

        return {
            date: formattedDate(applicable_date),
            weatherState: weather_state_name.replace(/\s/g, ''),
            temperature: Math.floor(the_temp),
            windDirection: wind_direction_compass,
            windSpeed: Math.floor(wind_speed),
            airPressure: air_pressure,
            humidity,
            visibility: Math.floor(visibility)
        }
    },
    nextDaysForecast(_, getters) {
        const slicedForecast = getters.weatherForecast.slice(1);
        const formattedForecast = slicedForecast.map((day) => {
            return {
                id: day.id,
                date: formattedDate(day.applicable_date),
                state: day.weather_state_name.replace(/\s/g, ''),
                nightTemp: Math.floor(day.min_temp),
                dayTemp: Math.floor(day.the_temp)
            }
        })
        return formattedForecast;
    },
    woeid(state) {   
        return state.woeid;
    },
    currentCity(state) {
        return state.currentCity;
    },
    geoLocation(state) {
        return state.geoLocation;
    },
    getAvailablePlaces(state) {
        return state.availablePlaces;
    }    
}
