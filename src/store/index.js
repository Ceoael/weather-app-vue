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
                    consolidated_weather:[
                    {
                        id: 0,
                        weather_state_name:"",
                        wind_direction_compass:"",
                        applicable_date:"",
                        min_temp:0,
                        max_temp:0,
                        the_temp:0,
                        wind_speed:0,
                        wind_direction:0,
                        air_pressure:0,
                        humidity:0,
                        visibility:0,
                    }]
                }
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters 

})

export default store;
