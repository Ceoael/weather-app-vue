export default {
    setLoading(state, payload){
        state.loading = payload.loading;
    },
    saveUserWoeid(state, payload) {
        state.woeid = payload.woeid;
    },
    saveCurrentCity(state, payload) {
        state.currentCity = payload.currentCity;
    },
    saveWeatherForecast(state, payload) {
        state.weatherForecast = payload.weatherForecast;
    },
    setAvailablePlaces(state, payload) {
        state.availablePlaces = payload.places;
    },
    setError(state, payload) {
        state.error = payload.message;
    }
}
