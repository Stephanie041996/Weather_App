export const  setLocationObject = (locationObject, coordsObj) => {
const { lat, lon, name, unit} = coordsObj;
locationObj.setLat(lat);
locationObj.setLon(lon);
locationObj.setName(name);
if (unit){
    locationObj.setUnit(unit);
}


};

export const  getHomeLocation = () => {
    return localStorage.getItem("defaultWeatherLocation");
}

export const cleanText = (text) => {
    const regex = / {2,}/g;
    const entryText = text.replaceAll(regex, " ").trim();
    return entryText;
  };