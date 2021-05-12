<template>
    <div class="toolbar">
        <button class="toolbar__searchButton" @click="showNavigationHandler(true)">Search for places</button>
        <button class="toolbar__circleButton" @click="getClosestCity">
            <span class="material-icons" :class="'toolbar__locationIcon'">my_location</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "Toolbar",
    inject: ['showNavigationHandler'],
    methods: {
        getClosestCity(){
            const getPosition = () => {

                this.$store.dispatch('loading', {loading: true});

                return new Promise((resolve, reject) =>
                    navigator.geolocation.getCurrentPosition(resolve, reject)
                );
            }
            if (!navigator.geolocation){
                return 
            } else {
                getPosition()
                    .then((position) => {
                        const userLocation = `lattlong=${position.coords.latitude},${position.coords.longitude}`;
                        fetch(`http://localhost:4000/weather/search?${userLocation}`)
                            .then( res => res.json())
                            .then( data => {
                                console.log(data);
                                console.log(this);
                                this.$store.dispatch('getWeather', {location: data[0].woeid});
                            })
                            .catch((err) => {
                                console.log(err);
                            })
                    })
                    .catch((err) => {
                        console.log('Couldn\'t get location');
                        console.log(err);
                    })
            }
            }
    }
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
    transition: .3s all ease-in-out;
    cursor: pointer;

    z-index: 1;  /* TODO: DELETE THIS PROPERTY, THERE IS PROBLEM WITH CLOUD BGC IMG:before*/
}

.toolbar__circleButton {
    display: flex;
    justify-content: center;
    align-items:center;

    width: 40px;
    height: 40px;

    background: #6E707A;
    font-size: 22px;

    color: #E7E7EB;
    border: none;
    border-radius: 50%;
    transition: .3s all ease-in-out;
    cursor: pointer;

    z-index: 1;   /* TODO: DELETE THIS PROPERTY, THERE IS PROBLEM WITH CLOUD BGC IMG:before*/
}
.toolbar__circleButton:hover,
.toolbar__circleButton:active,
.toolbar__searchButton:hover,
.toolbar__searchButton:active {
    background: #494a51;
    color: #b2b2be;
}
  /* .toolbar__locationIcon { 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 

    width: 22px;
    height: 22px; 
    font-size: 22px;  
}  */

@media (min-width: 1024px){
    .toolbar {
        padding: 42px 46px;
    }
}
</style>
