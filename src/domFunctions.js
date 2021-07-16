export const displayError =  (headerMsg, srMsg) => {
     updateWeatherLocationHeader(headerMsg);
     updateScreenReaderConfirmation(srMsg);
};

const updateWeatherLocationHeader = (message) => {
    const h1 = document.getElementById("currentForecast_location");
    h1.textContent = message;

};

export const updateScreenReaderConfirmation = (message) => {
    document.getElementById("confirmation").textContent = message;
    

};
