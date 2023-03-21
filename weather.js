class Weather {
  constructor(city, state) {
    this.apiKey = 'c15d0dd972ee1878a19706c5198947fa';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&${this.state}&appid=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;
  }


  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}

