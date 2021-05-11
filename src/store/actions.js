export default {
    getUserGeoLocation(context) {
        function getPosition() {
            return new Promise((resolve, reject) =>
                navigator.geolocation.getCurrentPosition(resolve, reject)
            );
        }

        if (!navigator.geolocation) {
            context.commit('saveGeoLocation', {error: 'geolocation is not supported'});
        } else {
            getPosition()
                .then((position) => {
                    context.commit('saveGeoLocation', {
                        latt: position.coords.latitude,
                        long: position.coords.longitude
                    });
                })
                .catch((err) => {
                    context.commit('saveGeoLocation', {error: err});
                })
        }
    }
}
