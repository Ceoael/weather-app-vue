<template>
    <div class="weatherParameter">
        <h2 class="weatherParameter__header">{{ name }}</h2>
        <p class="weatherParameter__value">{{ value }}<span class="weatherParameter__value--unit">{{ unit }}</span></p>
        <div v-if="$slots.default" class="weatherParameter__additionalData">
            <slot></slot>
        </div>
    </div>    
</template>

<script>

export default {
    name: 'WeatherParameter',
    props: {
        name: {
            type: String,
            required: true
        },
        value: {
            type: String || Number,
            required: true
        },
        unit: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.weatherParameter {
    width: 100%;

    padding-top: 22px;
    padding-bottom: 38px;
    margin-top: 32px;

    font-family: 'Raleway', sans-serif;
    text-align: center;
    color: #E7E7EB;


    background-color: #1E213A;
}
.weatherParameter__header {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 6px;
}
.weatherParameter__value {
    font-size: 64px;
    font-weight: 700;
}
.weatherParameter__value--unit {
    font-size: 36px;
    font-weight: 500;
}
.weatherParameter__additionalData {
    padding-top: 32px;

    font-size: 16px;
    font-style: normal;
    font-weight: 700;
}
</style>
