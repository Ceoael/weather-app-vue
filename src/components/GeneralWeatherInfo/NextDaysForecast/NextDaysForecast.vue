<template>
    <section class="nextDaysForecast">
        <day-weather 
            date="Tommorow"
            imageName="Sleet"
            dayTemperature="16"
            nightTemperature="11"/>
        <day-weather 
            date="Sun, 7 Jun"
            imageName="LightRain"
            dayTemperature="16"
            nightTemperature="11"/>
        <day-weather 
            date="Mon, 8 Jun"
            imageName="Thunderstorm"
            dayTemperature="16"
            nightTemperature="11"/>
        <day-weather 
            date="Tue, 9 Jun"
            imageName="LightCloud"
            dayTemperature="16"
            nightTemperature="11"/>
        <day-weather 
            date="Wed, 10 Jun"
            imageName="HeavyRain"
            dayTemperature="16"
            nightTemperature="11"/>
    </section>
</template>

<script>
import DayWeather from './DayWeather/DayWeather.vue';

export default {
    name: 'NextDaysForecast',
    components: {
        DayWeather
    }
}
</script>

<style scoped>
.nextDaysForecast {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 100%;
    
    padding: 55px 52px;
}
</style>
