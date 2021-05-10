<template>
    <nav class="navigation">
        <div class="navigation__close">
            <button class="closeButton">
                <span :class="['material-icons', 'closeButton__icon']">close</span>
            </button>
        </div>
        <div class="searchBar">
            <div class="searchBar__searchBox">
                <span :class="['material-icons', 'searchBar__icon']">search</span>
                <input class="searchBar__input" placeholder="search location"/>
            </div>
            <button class="searchBar__button">Search</button>
        </div>
        <button class="place">
            <p class="place__name">London</p>
            <span :class="['material-icons', 'place__icon']">chevron_right</span>
        </button>
        <button class="place">
            <p class="place__name">Barcelona</p>
            <span :class="['material-icons', 'place__icon']">chevron_right</span>
        </button>
        <button class="place">
            <p class="place__name">LongBeach</p>
            <span :class="['material-icons', 'place__icon']">chevron_right</span>
        </button>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navigation {
    height: 100vh;
    padding: 12px;

    color: #E7E7EB;
    background-color: #1E213A;
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
    margin-top: 14px;
    margin-bottom: 38px;
}
.searchBar__searchBox {
    display: flex;
    padding: 15px;
    margin-right: 12px;
    border: 1px solid #E7E7EB;
}
.searchBar__icon {
    color: #616475;
    margin-right: 17px;
}
.searchBar__input {
    background: transparent;

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
</style>
