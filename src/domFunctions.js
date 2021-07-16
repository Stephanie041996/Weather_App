export const displayError =  (headerMsg, srMsg) => {
     updateWeatherLocationHeader(headerMsg);
     updateScreenReaderConfirmation(srMsg);
};

export const displayApiError = (statusCode) => {
    const properMsg = toProperCase(statusCode.message);
    updateWeatherLocationHeader(properMsg);
    updateScreenReaderConfirmation(`${properMsg}. Please try again.`);
  };
  
  const toProperCase = (text) => {
    const words = text.split(" ");
    const properWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return properWords.join(" ");
  };
const updateWeatherLocationHeader = (message) => {
    const h1 = document.getElementById("currentForecast_location");
    h1.textContent = message;

};

export const updateScreenReaderConfirmation = (message) => {
    document.getElementById("confirmation").textContent = message;
    

};
