<template>
    <section class="WeatherParameters">
        <h1 class="WeatherParameters__header">Today's Hightlights</h1>
        <weather-parameter 
            name="Wind status"
            :value="windSpeed"
            unit="mph">{{ windDirection }}</weather-parameter>
        <weather-parameter 
            name="Humidity"
            :value="humidity"
            unit="%"/>
        <weather-parameter 
            name="Visibility"
            :value="visibility"
            unit=" miles"/>
        <weather-parameter 
            name="Air Pressure"
            :value="airPressure"
            unit=" mb"/>
    </section>    
</template>

<script>
import WeatherParameter from './WeatherParameter/WeatherParameter.vue';

export default {
    name: 'WeatherParameters',
    components: {
        WeatherParameter
    },
    computed: {
        windSpeed(){
            return this.$store.getters.todayWeatherForecast.windSpeed
        },
        windDirection(){
            return this.$store.getters.todayWeatherForecast.windDirection
        },
        humidity(){
            return this.$store.getters.todayWeatherForecast.humidity;
        },
        visibility(){
            return this.$store.getters.todayWeatherForecast.visibility;
        },
        airPressure(){
            return this.$store.getters.todayWeatherForecast.airPressure;
        }
    }
}
</script>

<style scoped>
.WeatherParameters {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 21px;
}
.WeatherParameters__header {
    width: 100%;

    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 24px;
}

@media (min-width: 1024px){
    
    .WeatherParameters {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
}
</style>
