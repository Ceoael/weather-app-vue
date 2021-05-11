<template>
  <main class="weather-app">
    <navigation :show="showNavigation"/>
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
  },
  provide(){
    return {
      showNavigationHandler: this.showNavigationHandler
    }
  },
  data(){
    return {
      showNavigation: false
    }
  },
  methods: {
    showNavigationHandler(bValue) {
      this.showNavigation = bValue;
    }
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

  .weather-app {
      overflow: hidden;
  }

  @media (min-width: 1024px) {
    .weather-app {
      display: flex;
    }
  }
</style>
