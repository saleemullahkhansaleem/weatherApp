const input = document.getElementById("city");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-button").click();
  }
});
const key = 'bc70339b0177231409767afa17feb974';
function getWeather(city) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date();
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
	fetch(url).then((res) => res.json()).then((data) => {
		// console.log(data);
		document.getElementById('result').innerHTML = `
		<div class="result">
        <div class="location">
          <h2 class="">
            <ion-icon name="location-outline"></ion-icon> ${data.name}, ${data.sys.country}
          </h2>
          <p>${days[date.getDay()]} Min ${data.main.temp_min}°C / Max ${data.main.temp_max}°C Wind degree:${data.wind.deg}</p>
        </div>
        <div class="weather-details">
          <div class="">
            <img
              src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"
              alt="Weather Icon"
              class="weather-icon"
            />
          </div>
          <div class="temp-box">
            <h3 class="temperature">${data.main.temp}°C</h3>
            <div class="description">${data.weather[0].description}</div>
          </div>
        </div>
      </div>
      <div class="weather-widgets">
        <div class="widgets-box" style="--color: #0af">
          <div class="widgets-icon">
            <ion-icon name="thermometer-outline"></ion-icon>
          </div>
          <p class="widgets-name">Feels like</p>
          <p class="widgets-details">${data.main.feels_like}<span>°C</span></p>
        </div>
        <div class="widgets-box" style="--color: #f0a">
          <div class="widgets-icon">
            <ion-icon name="water-outline"></ion-icon>
          </div>
          <div class="widgets-name">Humidity</div>
          <div class="widgets-details">${data.main.humidity}<span>%</span></div>
        </div>
        <div class="widgets-box" style="--color: #a0f">
          <div class="widgets-icon">
            <ion-icon name="chevron-collapse-outline"></ion-icon>
          </div>
          <div class="widgets-name">Air pressure</div>
          <div class="widgets-details">${data.main.pressure}<span>hPa</span></div>
        </div>
        <div class="widgets-box" style="--color: #fa0">
          <div class="widgets-icon">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <div class="widgets-name">Visibility</div>
          <div class="widgets-details">${data.visibility/1000}<span>mi</span></div>
        </div>
        <div class="widgets-box" style="--color: #af0">
          <div class="widgets-icon">
            <ion-icon name="repeat-outline"></ion-icon>
          </div>
          <div class="widgets-name">Wind speed</div>
          <div class="widgets-details">${data.wind.speed}<span>mi/h</span></div>
        </div>
      </div>`
	});
	
}
getWeatherByCity('islamabad')
getWeatherByCity('lahore')
getWeatherByCity('karachi')
getWeatherByCity('peshawar')
function getWeatherByCity(city) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
	fetch(url).then((res) => res.json()).then((data) => {
		console.log(data);
		document.getElementById(city).innerHTML = `
		<h2 class="city-name">
          <ion-icon name="location-outline"></ion-icon>  ${data.name}, ${data.sys.country}
        </h2>
        <div class="">
          <img
            src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"
            alt="Weather Icon"
            class="city-icon"
          />
        </div>
        <h2 class="city-temp">${data.main.temp}°C</h2>
        <p class="city-discription">${data.weather[0].description}</p>`
	});
}
// toggle mode 
function toggleMode(e) {
    const root = document.querySelector(':root');
    if (getComputedStyle(root).getPropertyValue('--bg') === '#333') {
        root.style.setProperty('--bg', '#fff');
        root.style.setProperty('--bg1', '#eee');
        root.style.setProperty('--clr', '#000');
        e.innerHTML = '<ion-icon name="moon-outline"></ion-icon>'
    }
    else{
        root.style.setProperty('--bg', '#333');
        root.style.setProperty('--bg1', '#222');
        root.style.setProperty('--clr', '#fff');
        e.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>'
    }
}