<template>
  <main>
    <today-weather-wrapper />
  </main>
</template>

<script>
import TodayWeatherWrapper from './components/TodayWeatherWrapper/TodayWeatherWrapper.vue';
export default {
  name: 'App',
  components: {
    TodayWeatherWrapper
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
