<template>
    <nav class="navigation" :class="{'navigation--show' : show}">
        <div class="navigation__close">
            <button class="closeButton" @click="closeNav">
                <span :class="['material-icons', 'closeButton__icon']">close</span>
            </button>
        </div>
        <div class="searchBar">
            <div class="searchBar__searchBox">
                <span :class="['material-icons', 'searchBar__icon']">search</span>
                <input class="searchBar__input" placeholder="search location" v-model.trim="placeName"/>
            </div>
            <button class="searchBar__button" @click="searchHandler">Search</button>
        </div>
        <div class="error">
            {{ error }}
        </div>

        <button v-for="place in places"
            class="place" 
            :key="place.woeid"
            @click="selectedCityHandler(place.woeid)">
            <p class="place__name">{{ place.title }}</p>
            <span :class="['material-icons', 'place__icon']">chevron_right</span>
        </button>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    inject: ["showNavigationHandler"],
    data() {
        return {
            placeName: '',
        }
    },
    methods: {
        closeNav() {
            this.showNavigationHandler(false);
            this.placeName = '';
        },
        selectedCityHandler(woeid) {
            this.closeNav();
            this.$store.dispatch('loading', {loading: true});
            this.$store.dispatch('getWeather', {location: woeid});
        },
        searchHandler() {
            if (!this.placeName) return;

            const formattedName = encodeURI(this.placeName);

            this.$store.dispatch('getAvailablePlaces', {name: formattedName});
        }
    },
    computed: {
        places() {
            return this.$store.getters.getAvailablePlaces;
        },
        error() {
            return this.$store.getters.getErrorMessage;
        }
    }
}
</script>

<style scoped>
.navigation {
    position: fixed;
    top: 0;
    left:0;

    height: 100%;
    /* min-height:100%;
    max-height: 100%; */
    padding: 12px;

    color: #E7E7EB;
    background-color: #1E213A;

    z-index: 2;
    
    
    transform: translateX(-100%);
    transition: .3s transform ease-in-out;

    overflow-y: scroll;
}

.navigation--show {
    transform: translateX(0);
}

.navigation__close {
    display: flex;
    justify-content: flex-end;
}
.closeButton {
    display: flex;
    padding: 5px;

    background: transparent;
    border: none;   
    border-radius: 5px; 
    cursor: pointer;

    transition: .3s background ease-in-out;
}
.closeButton:hover,
.closeButton:active {
    background: rgba(0,0,0,0.5);
}
.closeButton__icon {
    color:#E7E7EB;
}
.searchBar {
    display: flex;
    justify-content: space-between;

    margin-top: 14px;
    margin-bottom: 38px;
}
.searchBar__searchBox {
    flex-grow: 1;
    
    display: flex;
    padding: 15px 10px;
    margin-right: 12px;
    border: 1px solid #E7E7EB;
}
.searchBar__icon {
    color: #616475;
    margin-right: 5px;
}
.searchBar__input {
    display: block;
    background: transparent;
    
    width: 100%;

    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 16px;
    color: #616475;

    border: none;
    outline: none;
}

.searchBar__button {
    width: 86px;

    background: #3C47E9;

    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #E7E7EB;

    border: none;
    transition: .3s all ease-in-out;
}
.searchBar__button:hover,
.searchBar__button:active {
    background: #4e72eb;
}
.error {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #f54d4d;
    text-align: center;

    padding-bottom: 15px;
}
.place {
    display: flex;
    justify-content: space-between;
    padding: 22px 12px;
    margin-bottom: 28px;
    background: transparent;
    width: 100%;

    border: 2px solid transparent;
    cursor: pointer;

    transition: .3s all ease-in-out;
}
.place:hover {
    border: 2px solid #616475;
}

.place__name {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 16px;
    color: #E7E7EB;
}
.place__icon {
    color: #616475;
    opacity: 0;
    transition: .3s all ease-in-out;
}

.place:hover .place__icon {
    opacity: 1;
}

@media (min-width: 281px) {
    .searchBar__searchBox {
        padding: 15px;
    }
    .searchBar__icon {
        margin-right: 17px;
    }
}

@media (min-width: 1024px) {
    .navigation {
        width: 460px;
    }
}
</style>
