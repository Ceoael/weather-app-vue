<template>
  <main class="weather-app">
    <navigation />
    <today-weather-wrapper />
    <general-weather-info />
  </main>
</template>

<script>
import TodayWeatherWrapper from './components/TodayWeather/TodayWeather.vue';
import GeneralWeatherInfo from './components/GeneralWeatherInfo/GeneralWeatherInfo.vue';
import Navigation from './components/Navigation/Navigation.vue';

export default {
  name: 'App',
  components: {
    TodayWeatherWrapper,
    GeneralWeatherInfo,
    Navigation    
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #100E1D;
  }
  @media (min-width: 1024px) {
    .weather-app {
      display: flex;
    }
  }
</style>
