import { createStore } from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const store = createStore({
    state() {
        return {
            error: '',
            availablePlaces: [{
                title:"London",
                location_type:"City",
                woeid:44418,
                latt_long:"51.506321,-0.12714"
            },
            {
                title:"Barcelona",
                location_type:"City",
                woeid:753692,
                latt_long:"41.385578,2.168740"
            },
            {
                title:"Long Beach",
                location_type:"City",
                woeid:2441472,
                latt_long:"33.766720,-118.192398"
            }],
            loading: false,
            woeid: 44418,
            currentCity: 'London',
            weatherForecast: 
                {
                    "consolidated_weather":[
                    {
                        "id":5204240814309376,
                        "weather_state_name":"Showers",
                        "weather_state_abbr":"s",
                        "wind_direction_compass":"S",
                        "created":"2021-05-11T09:32:02.690930Z",
                        "applicable_date":"2021-05-11",
                        "min_temp":7.465,
                        "max_temp":16.35,
                        "the_temp":18.735,
                        "wind_speed":7.74303049818394,
                        "wind_direction":186.00244214605814,
                        "air_pressure":1007.5,
                        "humidity":61,
                        "visibility":13.099436789151357,
                        "predictability":73
                    },
                    {"id":6330140721152000,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"SSW","created":"2021-05-11T09:32:03.078954Z","applicable_date":"2021-05-12","min_temp":8.15,"max_temp":16.29,"the_temp":15.805,"wind_speed":6.667166076279859,"wind_direction":210.81342547799323,"air_pressure":1010.0,"humidity":51,"visibility":11.666865505448182,"predictability":71},
                    {"id":5379780288446464,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"SE","created":"2021-05-11T09:32:03.504903Z","applicable_date":"2021-05-13","min_temp":8.739999999999998,"max_temp":15.67,"the_temp":12.725000000000001,"wind_speed":4.485839611707628,"wind_direction":133.832042494509,"air_pressure":1007.0,"humidity":68,"visibility":8.679934184363319,"predictability":77},
                    {"id":6626642949570560,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"NNE","created":"2021-05-11T09:32:18.830254Z","applicable_date":"2021-05-14","min_temp":7.380000000000001,"max_temp":16.240000000000002,"the_temp":14.68,"wind_speed":4.477586177973965,"wind_direction":22.37956556596637,"air_pressure":1010.0,"humidity":60,"visibility":11.29714964606697,"predictability":75},
                    {"id":5216313128517632,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"S","created":"2021-05-11T09:32:19.110985Z","applicable_date":"2021-05-15","min_temp":8.155000000000001,"max_temp":14.77,"the_temp":14.335,"wind_speed":6.395249940759299,"wind_direction":190.60297747685865,"air_pressure":1007.5,"humidity":68,"visibility":9.476221367215462,"predictability":77},
                    {"id":5671181068795904,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"WSW","created":"2021-05-11T09:32:05.475213Z","applicable_date":"2021-05-16","min_temp":8.719999999999999,"max_temp":17.490000000000002,"the_temp":16.64,"wind_speed":7.722609560168616,"wind_direction":241.00000000000003,"air_pressure":1006.0,"humidity":52,"visibility":9.59521395052891,"predictability":77}
                    ],
                    "time":"2021-05-11T11:31:35.251118+01:00",
                    "sun_rise":"2021-05-11T05:14:40.106869+01:00",
                    "sun_set":"2021-05-11T20:40:06.440905+01:00",
                    "timezone_name":"LMT","parent":{
                        "title":"England",
                        "location_type":"Region / State / Province",
                        "woeid":24554868,"latt_long":"52.883560,-1.974060"
                    },
                    "sources":[
                        {"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":360},
                        {"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},
                        {"title":"HAMweather","slug":"hamweather","url":"http://www.hamweather.com/","crawl_rate":360},
                        {"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},
                        {"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},
                        {"title":"Weather Underground","slug":"wunderground","url":"https://www.wunderground.com/?apiref=fc30dc3cd224e19b","crawl_rate":720},
                        {"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360}
                    ],
                    "title":"London",
                    "location_type":"City",
                    "woeid":44418,
                    "latt_long":"51.506321,-0.12714",
                    "timezone":"Europe/London"
                }
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters 

})

export default store;
