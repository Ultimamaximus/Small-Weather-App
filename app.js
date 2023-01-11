window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDegree = document.querySelector('temperature-degree');
  let locationTimezone = document.querySelector('location-timezone');
  let temperatureDescription = document.querySelector('temperature-description');
 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=077ae6225085fea7dfd3932f99d48fbc&units=imperial `
   
      fetch(api)
      .then(response => {
        return response.json();
      })
   
      .then(data => {
        console.log(data)
        
        // Set DOM elements from the API
        temperatureDegree.textContent = data.main.temp;
      })
    });
  } 
});

