<template>
    <section class="nextDaysForecast">
        <day-weather v-for="(day, index) in weatherForecast"
            :key="day.id"
            :date="index === 0 ? 'Tommorow' : day.date"
            :imageName="day.state"
            :nightTemperature="day.nightTemp"
            :dayTemperature="day.dayTemp"
            />
    </section>
</template>

<script>
import DayWeather from './DayWeather/DayWeather.vue';

export default {
    name: 'NextDaysForecast',
    components: {
        DayWeather
    },
    computed: {
        weatherForecast() {
            return this.$store.getters.nextDaysForecast;
        }
    }
}
</script>

<style scoped>
.nextDaysForecast {
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    
    padding: 55px 15px;
    padding-bottom: 25px;
}
@media (min-width: 640px) {
    .nextDaysForecast {
        justify-content: center;
    }
}
</style>
