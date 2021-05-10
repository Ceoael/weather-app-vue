<template>
    <section class="generalWeatherInfo">
        <next-days-forecast />
        <section>Today's Hightlights</section>
    </section>
</template>

<script>
import NextDaysForecast from './NextDaysForecast/NextDaysForecast.vue';

export default {
    name: 'GeneralWeatherInformation',
    components: {
        NextDaysForecast
    }
}
</script>

<style scoped>
.generalWeatherInfo {
    min-height: 100vh;
    background: #100E1D;
    color: #E7E7EB;
}
</style>
