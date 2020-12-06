function formatDate(timestemp){
//calculate the weekday and local time
let date = new Date();
  let weekDays = [ 
  "Sunday",
  "Monday", 
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday"
  ];
  let day = weekDays[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();
  if (minutes.toString().length == 1) {
    minutes = "0" + minutes;
  }
  let time = `${hour}:${minutes}`;
  
  let formattedDate = `${day} ${time}`;
  return formattedDate;
}


function displayTemperature(response){
    //exctract temperature, humidity and windspeed from openweathermap.org api
    let h1 = document.querySelector("h1").innerHTML= response.data.name;
    let temperatureElement = document.querySelector("#currentTemp");
    let descriptionElement = document.querySelector("#w_description");
    let humidityElement = document.querySelector("#humidity_wind");
    let h2 = document.querySelector("h2");

    let temperatureMax = Math.round(response.data.main.temp_max);
    let temperatureMin = Math.round(response.data.main.temp_min);
    let humidity = response.data.main.humidity;
    let windspeed = Math.round(response.data.wind.speed);

    temperatureElement.innerHTML = `<strong>${temperatureMax}°C</strong>|${temperatureMin}°C`;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = `humidity: ${humidity} % | windspeed: ${windspeed} km/h`;
    h2.innerHTML = formatDate(response.data.dt * 1000);
    
    //change icon
    let iconElement = document.querySelector("#icon_main");
    iconElement.setAttribute(
    "src", 
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    iconElement.setAttribute(
        "alt",
        `${descriptionElement}`
    );

}

let apiKey = "c0ceae1b9bc9cde459831675fe59f1d6";
let city = "Sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

//set up axios for api
axios.get(apiUrl).then(displayTemperature);
