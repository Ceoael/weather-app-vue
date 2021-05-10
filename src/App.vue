<template>
  <main>
    <today-weather-wrapper />
    <general-weather-info />
  </main>
</template>

<script>
import TodayWeatherWrapper from './components/TodayWeather/TodayWeather.vue';
import GeneralWeatherInfo from './components/GeneralWeatherInfo/GeneralWeatherInfo.vue';

export default {
  name: 'App',
  components: {
    TodayWeatherWrapper,
    GeneralWeatherInfo
    
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>
