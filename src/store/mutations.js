export default {
    saveGeoLocation(state, payload) { // this.$store.commit('saveUserGeoLocation', { latt: 10, long: 10 });
        if (payload.error) {
            state.geoLocation = {
                error: payload.error
            }
        } else {
            state.geoLocation = {
                latt: payload.latt,
                long: payload.long
            };
        }
    },
    saveUserWoeid(state, payload) {
        state.woeid = payload.woeid;
    },
    saveCurrentCity(state, payload) {
        state.currentCity = payload.currentCity;
    },
    saveWeatherForecast(state, payload) {
        state.weatherForecast = payload.weatherForecast;
    }
}
