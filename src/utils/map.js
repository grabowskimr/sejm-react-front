const mapActions = {
    getLocalization: () => {
        const geolocation = navigator.geolocation;
        const location = new Promise((resolve, reject) => {
            if (!geolocation) {
                reject(new Error('Not Supported'));
            }
            
            geolocation.getCurrentPosition(function(position) {
                var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var data = {};
                new google.maps.Geocoder().geocode({'latLng' : latlng}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        results.map(loc => {
                            if(loc.types.indexOf('street_address') >= 0) {
                                loc.address_components.map(address => {
                                    if(address.types.indexOf('locality') >= 0) {
                                        data.city = address.long_name;
                                    }
                                });
                            }

                            if(loc.types.indexOf('administrative_area_level_2') >= 0) {
                                loc.address_components.map(address => {
                                    if(address.types.indexOf('administrative_area_level_2') >= 0) {
                                        data.country = address.long_name;
                                    }
                                });
                            }
                        })
                    }
                    resolve(data);
                })
            })
        })
        return location;
    }
}

export default mapActions;