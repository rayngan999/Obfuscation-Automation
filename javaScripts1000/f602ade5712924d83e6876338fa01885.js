ï»¿function getUserPosition() {
    var curLocation = getLocationFromCookie();
    if (curLocation.latitude === undefined && curLocation.longitude === undefined) {
        try { if (!google) { google = 0; } } catch (err) { google = 0; }
        if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(function (position) {
                setLocationCookie(position.coords.latitude, position.coords.longitude);
                return getLocationFromCookie();
            }, getEmptyLocation);
        } else if (google && google.gears) {
            var geloc = google.gears.factory.create('beta.geolocation');
            geloc.getPermission();
            return geloc.getCurrentPosition(function (position) {
                setLocationCookie(position.coords.latitude, position.coords.longitude);
                return getLocationFromCookie();
            }, getEmptyLocation);
        } else {
            getEmptyLocation();
        }
    }
    else {
        return curLocation;
    }
}

function getEmptyLocation() {
    setLocationCookie('', '');
    return getLocationFromCookie();
}

function getLocationFromCookie() {
    return { latitude: getCookie("CurrentLatitude"), longitude: getCookie("CurrentLongitude") };
}

function setLocationCookie(latitude, longitude) {
    document.cookie = 'CurrentLatitude=' + latitude + '; path=/';
    document.cookie = 'CurrentLongitude=' + longitude + '; path=/';
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}