const apiKey = 'a9dd610c7d8aea685a6d2e45ba2f2e05';
const state = 'Uttarakhand'; // Specifying Uttarakhand as the state
const apiUrl = `https://api.openweathermap.org/data/3.0/weather?q=${state},IN&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle the weather data
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the request:', error);
  });
