class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-fells-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.icon.setAttribute('src', 'https://openweathermap.org/img/wn/10d@2x.png');
    this.string.textContent = `${weather.main.temp} \u00B0C`;
    this.humidity.textContent = `Relative Hunidity: ${weather.main.humidity} %`;
    this.dewpoint.textContent = `Pressure: ${weather.main.pressure} / inHg`;
    //this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} / mph`;
  }
}