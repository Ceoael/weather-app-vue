<template>
    <div class="toolbar">
        <button class="toolbar__searchButton">Search for places</button>
        <button class="toolbar__circleButton">
            <span class="material-icons" :class="'toolbar__locationIcon'">my_location</span>
        </button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 18px 11px;
    padding-bottom: 0;
}
.toolbar__searchButton {
    width: 161px;
    height: 40px;

    background: #6E707A;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #E7E7EB;

    border: none;
}
.toolbar__circleButton {
    position: relative;

    width: 40px;
    height: 40px;

    background: #6E707A;
    /* background: rgba(110, 112, 122, 0,3); */

    border: none;
    border-radius: 50%;
}
.toolbar__locationIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 22px;
    height: 22px;
    font-size: 22px;

    color: #E7E7EB;
}
</style>
