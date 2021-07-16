import CurrentLocation from './CurrentLocation.js';
import displayError from './domFunctions.js';
import { setLocationObject, getHomeLocation } from './dataFunctions.js';

const currentLoc = new CurrentLocation();

const initApp = () => {
// add listners 
const geoButton = document.getElementById("getLocation");
geoButton.addEventListener("click", getGeoWeather);
const homeButton = document.getElementById("home");
homeButton.addEventListener("click", loadWeather);

// set up 

//load weather
loadWeather();

};

document.addEventListener("DOMContentLoaded", initApp);

const getGeoWeather = (event) => {
if (!navigator.geolocation) return geoError();
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

};

const geoError = (errObj) => {
    const errMsg = errObj ? errObj.message : "Geolocation not supported";
    displayError(errMsg, errMsg);
};

const geoSuccess = (position) => {
    const myCoordsObj = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
    name: `Lat:${position.coords.latitude} Long:${position.coords.longitude}`

    };

    setLocationObject(currentLoc, myCoordsObj);
    updateDataAndDisplay(currentLoc);

};

const loadWeather = (event) => {
    const savedLocation = getHomeLocation();
    if (!savedLocation && !event) return getGeoWeather();
    if (!savedLocation && event.type === "click") {
      displayError(
        "No Home Location Saved.",
        "Sorry. Please save your home location first."
      );
    } else if (savedLocation && !event) {
      displayHomeLocationWeather(savedLocation);
    } else {
      const homeIcon = document.querySelector(".fa-home");
      displayHomeLocationWeather(savedLocation);
    }
  };
 const  displayHomeLocationWeather = (home) => {
 if (typeof home === "string") {
     const locationJson = JSON.parse(home);
     const myCoordsObj = {
        lat: locationJson.lat,
        lon: locationJson.lon,
        name: locationJson.name,
        unit: locationJson.unit
     };
     setLocationObject(currentLoc, myCoordsObj);
     updateDataAndDisplay(currentLoc);
 }

  }


const updateDataAndDisplay = async (locationObj) => {
    // const weatherJson = await getWeatherFromCoords(locationObj);
    // if (weatherJson) updateDisplay(weatherJson, locationObj);
    console.log(locationObj);
  };


