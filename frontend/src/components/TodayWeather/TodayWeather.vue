<template>
    <section class="todayWeatherWrapper">
        <toolbar />
        <div class="todayWeather">
            <img class="todayWeather__image"
                :src="imageSrc"/>
            <div class="todayWeather__temperature">{{ temperature }}<span class="todayWeather__degree">&#8451;</span></div>
            <div class="todayWeather__description">{{ weatherState }}</div>
            <div class="todayWeather__date">Today<span class="todayWeather__dot">•</span>{{ todayDate }}</div>
            <div class="todayWeather__localization">
                <span class="material-icons" :class="'todayWeather__placeIcon'">place</span>
                {{ localization }}
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
    computed: {
        temperature() {
            return this.$store.getters.todayWeatherForecast.temperature;
        },
        weatherState() {
            return this.$store.getters.todayWeatherForecast.weatherState;
        },
        imageSrc() {
            return `/img/${this.weatherState}.png`;
        },
        localization() {
            return this.$store.getters.currentCity;
        },
        todayDate() {
            return this.$store.getters.todayWeatherForecast.date;
        }
    }
}
</script>

<style scoped>
* {
    --toolbarHeight: 58px;
}

.todayWeatherWrapper {
    position: relative;

    min-height: 100vh;
    width: 100%;

    background-color: #1E213A;
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
    
    background-image: url('/img/Cloud-background.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.todayWeather {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - var(--toolbarHeight));

    align-items: center;
    justify-content: space-around;
    
}
.todayWeather__image {
    width: 150px;
}
.todayWeather__temperature {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 144px;
    color: #E7E7EB;
}
.todayWeather__degree {
    
    font-size: 48px;
    color: #A09FB1;
    font-weight: 100;

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
    margin-top: 10px;

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
    margin-top: 10px;
    margin-bottom: 32px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #88869D;


}
.todayWeather__placeIcon {
    margin-right: 9px;
}
@media (min-width: 420px){

}

@media (min-width: 1024px){
    * {
        --toolbarHeight: 82px;
    }

    .todayWeatherWrapper {
        max-width: 460px;
    }
    .todayWeatherWrapper::before {
        width: 650px;
        height: 376px;
    }
    .todayWeather__image {
        margin-top: 0px;
        width: 202px;
    }
    .todayWeather__temperature {
        margin-top: 0;
    }
    .todayWeather__description,
    .todayWeather__date {
        margin-top: 20px;
    }
}

@media (min-width: 1024px){
    .todayWeatherWrapper {
        position: fixed;
    }
}

</style>

