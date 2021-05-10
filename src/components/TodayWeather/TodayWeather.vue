<template>
    <section class="todayWeatherWrapper">
        <toolbar />
        <div class="todayWeather">
            <img class="todayWeather__image"
                src="/img/Shower.png"/>
            <div class="todayWeather__temperature">15<span class="todayWeather__degree">&#8451;</span></div>
            <div class="todayWeather__description">Shower</div>
            <div class="todayWeather__date">Today<span class="todayWeather__dot">•</span>Fri, 5 Jun</div>
            <div class="todayWeather__localization">
                <span class="material-icons" :class="'todayWeather__placeIcon'">place</span>
                Helsinki
            </div>
        </div>
    </section>
</template>

<script>
import Toolbar from './Toolbar/Toolbar.vue';

export default {
    name: 'TodayWeatherWrapper',
    components: {
        Toolbar
    },
}
</script>

<style scoped>
.todayWeatherWrapper {
    position: relative;

    min-height: 100vh;
    width: 100%;

    
    background-color: #1E213A;

    /* background-image: url('./../../assets/Cloud-background.png');
    background-blend-mode: soft-light;
    background-repeat: no-repeat;
    background-size: 564px 326px;
    background-position: -111px 58px; */
    overflow: hidden;
}

.todayWeatherWrapper::before {
    content: ' ';
    display: block;
    position: absolute;
    left: -111px;
    top: 58px;
    width: 564px;
    height: 326px;
    opacity: 0.05;

    /* background-image: url('./../../assets/Cloud-background.png'); */
    background-image: url('/img/Cloud-background.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.todayWeather {
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.todayWeather__image {
    margin-top: 76px;
    width: 150px;
    height: 174px;
}
.todayWeather__temperature {
    margin-top: 40px;

    /* height: 169px;
    width: 192px; */

    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 144px;
    color: #E7E7EB;

    /* line-height: 169px; */



}
.todayWeather__degree {
    
    font-size: 45px;
    color: #A09FB1;
    font-weight: 600;

}
.todayWeather__description {
    margin-top: 23px;

    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 36px;
    color: #A09FB1;
    line-height: 42px;
    text-align: center;
}
.todayWeather__date {
    margin-top: 48px;

    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #88869D;
}
.todayWeather__dot {
    padding: 0 16px;
}
.todayWeather__localization {
    display: flex;

    margin-top: 32px;
    margin-bottom: 100px;  /* ? */
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #88869D;


}
.todayWeather__placeIcon {
    margin-right: 9px;
}
</style>

