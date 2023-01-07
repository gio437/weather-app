const getWeather = async function() {
    const api = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Detroit&APPID=c6d16474a22ccd0db575b5b424788ef9', {mode: 'cors'})
    console.log(api);
    const string = await api.json();
    console.log(string);
    const weather = document.querySelector('.weather');
    weather.textContent = JSON.stringify(string);
}
getWeather();

const newWeather = async function() {
    const connect = document.querySelector('.submit');
    connect.addEventListener('click', async () => {
        const text = document.querySelector('.text');
        let key = text.value;
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${key}&APPID=c6d16474a22ccd0db575b5b424788ef9`, {mode: 'cors'})
        console.log(api);
        const string = await api.json();
        console.log(string);
        const weather = document.querySelector('.weather');
        weather.textContent = JSON.stringify(string);
    })
}
newWeather();

