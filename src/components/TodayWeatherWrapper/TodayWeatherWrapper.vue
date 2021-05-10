<template>
    <section>
        <toolbar />
        <div>
            ikonka
            <div>15*C</div>
            <div>Shower</div>
            <div>today * Fri, 5 Jun</div>
            <div>Helsinki</div>
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

</style>
