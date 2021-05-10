<template>
    <section class="WeatherParameters">
        <h1 class="WeatherParameters__header">Today's Hightlights</h1>
        <weather-parameter 
            name="Wind status"
            value="7"
            unit="mph"> WSW </weather-parameter>
        <weather-parameter 
            name="Humidity"
            value="84"
            unit="%"> 0-------------50-------------100 </weather-parameter>
        <weather-parameter 
            name="Visibility"
            value="6,4"
            unit=" miles"/>
        <weather-parameter 
            name="Air Pressure"
            value="998"
            unit=" mb"/>
    </section>    
</template>

<script>
import WeatherParameter from './WeatherParameter/WeatherParameter.vue';

export default {
    name: 'WeatherParameters',
    components: {
        WeatherParameter
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
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 24px;
}
</style>
