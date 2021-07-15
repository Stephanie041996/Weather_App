import CurrentLocation from './CurrentLocation.js';
import displayError from './domFunctions.js';
import { setLocationObject } from './dataFunctions.js';

const currentLoc = new CurrentLocation();

const initApp = () => {
// add listners 
const geoButton = document.getElementById("getLocation");
geoButton.addEventListener("click", getGeoWeather);
// set up 

//load weather
};

document.addEventListener("DOMContentLoaded", initApp);

const getGeoWeather = (event) => {
if (!navigator.geolocation) geoError();
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

};

const geoError = (errObj) => {
    const errMsg = errObj.message ? errObj.message : "Geolocation not supported";
    displayError(errMsg, errMsg);
};

const geoSuccess = (position) => {
    const myCoordsObj = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
    name: `Lat:${position.coords.latitude} Long:${position.coords.longitude}`

    };

    setLocationObject(currentLoc, myCoordsObj);

console.log(currentLoc);
    

    // update data and display
}