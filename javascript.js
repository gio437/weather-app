const getWeather = async function() {
    const api = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Detroit&APPID=c6d16474a22ccd0db575b5b424788ef9', {mode: 'cors'})
    console.log(api);
    const string = await api.json();
    console.log(string);
    const weather = document.querySelector('.weather');
    const area = document.createElement('div');
    const temp = document.createElement('div');
    const conditions = document.createElement('div');
    const high = document.createElement('div');
    area.id = 'area';
    temp.id = 'temp';
    conditions.id = 'conditions';
    high.id = 'range';
    const place = JSON.stringify(string.name);
    const type = JSON.stringify(string.weather[0].description);
    area.textContent = place.replace(/['"]+/g, '');
    temp.textContent = JSON.stringify(string.main.temp) + '°';
    conditions.textContent = type.replace(/['"]+/g, '');
    high.textContent = 'H:' + JSON.stringify(string.main.temp_max) + ' L:' + JSON.stringify(string.main.temp_min);;
    weather.appendChild(area);
    weather.appendChild(temp);
    weather.appendChild(conditions);
    weather.appendChild(high);
}
getWeather();

const newWeather = async function() {
    const connect = document.querySelector('.submit');
    connect.addEventListener('click', async () => {
        const areaEl = document.getElementById('area');
        const tempEl = document.getElementById('temp');
        const conditionsEl = document.getElementById('conditions');
        const highEl = document.getElementById('range');
        areaEl.remove();
        tempEl.remove();
        conditionsEl.remove();
        highEl.remove();

        const text = document.querySelector('.text');
        let key = text.value;
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${key}&APPID=c6d16474a22ccd0db575b5b424788ef9`, {mode: 'cors'})
        console.log(api);
        const string = await api.json();
        console.log(string);
        const weather = document.querySelector('.weather');
        const area = document.createElement('div');
        const temp = document.createElement('div');
        const conditions = document.createElement('div');
        const high = document.createElement('div');
        area.id = 'area';
        temp.id = 'temp';
        conditions.id = 'conditions';
        high.id = 'range';
        const place = JSON.stringify(string.name);
        const type = JSON.stringify(string.weather[0].description);
        area.textContent = place.replace(/['"]+/g, '');
        temp.textContent = JSON.stringify(string.main.temp) + '°';
        conditions.textContent = type.replace(/['"]+/g, '');
        high.textContent = 'H:' + JSON.stringify(string.main.temp_max) + ' L:' + JSON.stringify(string.main.temp_min);;
        weather.appendChild(area);
        weather.appendChild(temp);
        weather.appendChild(conditions);
        weather.appendChild(high);
    })
}
newWeather();

