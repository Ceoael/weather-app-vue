<template>
    <div class="forecastElement__wrapper">
        <div class="forecastElement">
            <h2 class="forecastElement__date">{{ date }}</h2>
            <img class="forecastElement__image" :src="imageSource" :alt="imageName"/>
            <div class="forecastElement__temperatures">
                <p>{{ dayTemperature }}°C</p>
                <p class="forecastElement__temperatures--night">{{ nightTemperature }}°C</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        date: {
            type: String,
            required: true
        },
        imageName: {
            type: String,
            required: true
        },
        dayTemperature: {
            type: Number,
            required: true
        },
        nightTemperature: {
            type: Number,
            required: true
        }
        
    },
    computed: {
        imageSource() {
            return `/img/${this.imageName}.png`;
        }
    }
}
</script>

<style scoped>
.forecastElement__wrapper{
    display: flex;
    justify-content: center;
    width: 50%;
}
.forecastElement {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 120px;
    height: 177px;

    margin-bottom: 32px;

    background-color: #1E213A;

    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #E7E7EB;
}
.forecastElement__date {
    font-size: 16px;
    font-weight: 500;
}
.forecastElement__image {
    width: 62px;
    padding-top: 10px;
    padding-bottom: 31px;
}
.forecastElement__temperatures {
    display: flex;
}
.forecastElement__temperatures--night {
    padding-left: 16px;
    color: #A09FB1;
}
@media (min-width: 640px) {
    .forecastElement__wrapper{
        width: auto;
        padding-left:5px;
    }
    .forecastElement__wrapper:nth-of-type(1){
        padding-left:0;
    }
}
@media (min-width: 1200px) {
    .forecastElement__wrapper{
        padding-left: 15px;
    }
}
</style>
