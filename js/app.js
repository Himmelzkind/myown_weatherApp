function displayTemperature(response){
    console.log(response.data);
    debugger
    let h1 = document.querySelector("h1").innerHTML= response.data.name;
    let temperatureElement = document.querySelector("#currentTemp");
    let descriptionElement = document.querySelector("#w-description");
    let humidityElement = document.querySelector("#humidity-wind");
    
    let temperatureMax = Math.round(response.data.main.temp_max);
    let temperatureMin = Math.round(response.data.main.temp_min);
    let humidity = response.data.main.humidity;
    let windspeed = Math.round(response.data.wind.speed);

    temperatureElement.innerHTML = `<strong>${temperatureMax}°C</strong>|${temperatureMin}°C`;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = `humidity: ${humidity} % | windspeed: ${windspeed} km/h`;

}

let apiKey = "c0ceae1b9bc9cde459831675fe59f1d6";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(displayTemperature);