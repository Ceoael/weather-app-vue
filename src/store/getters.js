export default {
    weatherForecast(state) {    //this.$store.getters.weatherForecast;
        if (!state.weatherForecast['consolidated_weather']) return {error: 'Store is empty.'};
        const consolidatedWeather = state.weatherForecast['consolidated_weather'];

        return consolidatedWeather;
    },
    woeid(state) {   
        return state.woeid;
    },
    currentCity(state) {
        return state.currentCity;
    },
    geoLocation(state) {
        return state.geoLocation;
    }    
}
