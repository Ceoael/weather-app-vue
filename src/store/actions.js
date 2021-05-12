export default {
    getWeather(context, payload) {
        fetch(`http://localhost:4000/weather?woeid=${payload.location}`)
            .then (res => res.json())
            .then (data => {
                const {title} = data;
                context.commit('saveCurrentCity', {currentCity: title});
                context.commit('saveWeatherForecast', {weatherForecast: data})
                context.commit('setLoading', {loading: false});
                context.commit('setError', {message: ''});
            })
            .catch ((err) => {
                console.log(err);

                context.commit('setError', {message: 'Connection problem'});
                context.commit('setLoading', {loading: false});}
            )
        // setTimeout(()=>{
        //     console.log(payload.location);
        //     const data = {"consolidated_weather":[{"id":4856532979154944,"weather_state_name":"Light Cloud","weather_state_abbr":"lc","wind_direction_compass":"SE","created":"2021-05-11T16:37:59.677027Z","applicable_date":"2021-05-11","min_temp":12.71,"max_temp":26.535,"the_temp":23.939999999999998,"wind_speed":11.613508064696838,"wind_direction":136.332753728081,"air_pressure":1014,"humidity":48,"visibility":15.18009822635807,"predictability":70},{"id":5270906894024704,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"ESE","created":"2021-05-11T16:38:02.666869Z","applicable_date":"2021-05-12","min_temp":12.425,"max_temp":24.380000000000003,"the_temp":22.85,"wind_speed":11.96030628546091,"wind_direction":122.98769921860338,"air_pressure":1010,"humidity":46,"visibility":14.461171756939473,"predictability":68},{"id":5088783503458304,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"ESE","created":"2021-05-11T16:38:04.989896Z","applicable_date":"2021-05-13","min_temp":9.295,"max_temp":19.43,"the_temp":18.355,"wind_speed":7.653882835244837,"wind_direction":104.49439389961533,"air_pressure":1003,"humidity":47,"visibility":14.540707269545852,"predictability":71},{"id":5982432885997568,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"SW","created":"2021-05-11T16:38:07.964653Z","applicable_date":"2021-05-14","min_temp":10.745000000000001,"max_temp":17.915,"the_temp":15.405,"wind_speed":6.040220575540179,"wind_direction":230.3580971012683,"air_pressure":1002,"humidity":73,"visibility":10.4322009464726,"predictability":75},{"id":5551688703279104,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"W","created":"2021-05-11T16:38:11.084615Z","applicable_date":"2021-05-15","min_temp":10.73,"max_temp":16.885,"the_temp":15.995000000000001,"wind_speed":6.425846234751717,"wind_direction":259.6632597711814,"air_pressure":1009.5,"humidity":67,"visibility":13.845392905432275,"predictability":75},{"id":6263620267671552,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"SSW","created":"2021-05-11T16:38:14.204047Z","applicable_date":"2021-05-16","min_temp":8.955,"max_temp":20.9,"the_temp":17.9,"wind_speed":3.967016622922135,"wind_direction":203.99999999999997,"air_pressure":1010,"humidity":50,"visibility":9.999726596675416,"predictability":73}],"time":"2021-05-11T23:16:34.312653+02:00","sun_rise":"2021-05-11T04:47:22.141443+02:00","sun_set":"2021-05-11T20:18:21.438700+02:00","timezone_name":"LMT","parent":{"title":"Poland","location_type":"Country","woeid":23424923,"latt_long":"51.918919,19.134300"},"sources":[{"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":360},{"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},{"title":"HAMweather","slug":"hamweather","url":"http://www.hamweather.com/","crawl_rate":360},{"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},{"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},{"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360}],"title":"Warsaw","location_type":"City","woeid":523920,"latt_long":"52.235352,21.009390","timezone":"Europe/Warsaw"};
                        
        //     const {title} = data;
        //     context.commit('saveCurrentCity', {currentCity: title});
        //     context.commit('saveWeatherForecast', {weatherForecast: data})
        //     context.commit('setLoading', {loading: false});
        // }, 5000)
    },
    getAvailablePlaces(context, payload) {
        context.commit('setLoading', {loading: true});

        fetch(`http://localhost:4000/weather/search?query=${payload.name}`)
            .then( res => res.json())
            .then( data => {
                if (Array.isArray(data) && !data.length) {
                    context.commit('setError', {message: 'Weather forecast for this location is unavailable.'});
                    context.commit('setLoading', {loading: false});
                    return;
                }
                context.commit('setAvailablePlaces', {places: data});
                context.commit('setLoading', {loading: false});
                context.commit('setError', {message: ''});
            })
            .catch((err) => {
                console.log(err);
                
                context.commit('setError', {message: 'Connection problem'});
                context.commit('setLoading', {loading: false});
            })

    },
    loading(context, payload) {
        context.commit('setLoading', {loading: payload.loading});
    }
}
