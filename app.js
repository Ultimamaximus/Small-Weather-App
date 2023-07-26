window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDegree = document.querySelector('.temperature-degree');
  let specificLocation = document.querySelector('.location-name');
  let temperatureDescription = document.querySelector('.temperature-description');
 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=insert your key here&units=imperial `
   
      fetch(api)
      .then(response => {
        return response.json();
      })
   
      .then(data => {
        // Set DOM elements from the API
        console.log(data)
        temperatureDegree.textContent = data.main.temp;
        specificLocation.textContent = data.name;
        temperatureDescription.textContent = data.weather[0].description;
      })
    });
  } 
});

