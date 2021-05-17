<template>
    <section class="generalWeatherInfo">
        <next-days-forecast />
        <weather-parameters />
        <footer class="footer">created by <a class="footer_link" href="https://github.com/ceoael">ceoael</a> - devChallenges.io</footer>
    </section>
</template>

<script>
import NextDaysForecast from './NextDaysForecast/NextDaysForecast.vue';
import WeatherParameters from './WeatherParameters/WeatherParameters.vue';

export default {
    name: 'GeneralWeatherInformation',
    components: {
        NextDaysForecast,
        WeatherParameters
    }
}
</script>

<style scoped>
.generalWeatherInfo {
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding-bottom: 60px;

    background: #100E1D;
    color: #E7E7EB;
}
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;

    padding: 20px 0;

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    text-align: center;
    color: #A09FB1;
}
.footer_link {
    color: #A09FB1;
    font-weight: 700;
}

@media (min-width: 1024px) {
    .generalWeatherInfo {
        margin-left: 460px;
    }
}
</style>
