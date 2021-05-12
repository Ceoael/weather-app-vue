<template>
  <main class="weather-app">
    <backdrop :show="loading">
      <spinner/>
    </backdrop>
    
    <navigation :show="showNavigation"/>
    <today-weather-wrapper />
    <general-weather-info />
  </main>
</template>

<script>
import TodayWeatherWrapper from './components/TodayWeather/TodayWeather.vue';
import GeneralWeatherInfo from './components/GeneralWeatherInfo/GeneralWeatherInfo.vue';
import Navigation from './components/Navigation/Navigation.vue';
import Backdrop from './components/Backdrop/Backdrop.vue';
import Spinner from './components/Spinner/Spinner.vue';


export default {
  name: 'App',
  components: {
    TodayWeatherWrapper,
    GeneralWeatherInfo,
    Navigation,
    Backdrop,
    Spinner 
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
  computed: {
    loading () {
      return this.$store.getters.loading;
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
