const getWeather = async function() {
    const api = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Detroit&APPID=c6d16474a22ccd0db575b5b424788ef9', {mode: 'cors'})
    console.log(api);
    await weatherInfo(api);
}
getWeather();

const weatherInfo = async function(api) {
    const string = api.json();
    console.log(string);
    const weather = document.querySelector('.weather');
    weather.textContent = string.data
}

