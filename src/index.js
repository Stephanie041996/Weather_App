import CurrentLocation from './CurrentLocation.js';
import navbar from './nav.js';

const currentLoc = new CurrentLocation();

const initApp = () => {
// add listners 
const geoButton = document.getElementById("getLocation");
geoButton.addEventListener("click", getGeoWeather);
// set up 

//load weather
}

document.addEventListener("DOMContentLoaded", initApp);

const getGeoWeather = (event) => {
if (!navigator.geolocation) geoError();
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

}