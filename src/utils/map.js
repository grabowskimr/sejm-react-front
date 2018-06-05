const getCity = () => {

    var latlng;
    navigator.geolocation.watchPosition(function(position) {
        latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        new google.maps.Geocoder().geocode({'latLng' : latlng}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    var country = null, countryCode = null, city = null, cityAlt = null;
                    var c, lc, component;
                    for (var r = 0, rl = results.length; r < rl; r += 1) {
                        var result = results[r];
        
                        if (!city && result.types[0] === 'locality') {
                            for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
                                component = result.address_components[c];
        
                                if (component.types[0] === 'locality') {
                                    city = component.long_name;
                                    break;
                                }
                            }
                        }
                        else if (!city && !cityAlt && result.types[0] === 'administrative_area_level_1') {
                            for (c = 0, lc = result.address_components.length; c < lc; c += 1) {
                                component = result.address_components[c];
        
                                if (component.types[0] === 'administrative_area_level_1') {
                                    cityAlt = component.long_name;
                                    break;
                                }
                            }
                        } else if (!country && result.types[0] === 'country') {
                            country = result.address_components[0].long_name;
                            countryCode = result.address_components[0].short_name;
                        }
        
                        if (city && country) {
                            break;
                        }
                    }
        
                    console.log("City: " + city + ", City2: " + cityAlt + ", Country: " + country + ", Country Code: " + countryCode);
                }
            }
        });
    });

}

export default googleMap;