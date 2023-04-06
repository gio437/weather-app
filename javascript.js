const getWeather = async function(e) {
    try {
        const api = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Detroit&units=imperial&APPID=c6d16474a22ccd0db575b5b424788ef9', {mode: 'cors'})
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
        const type = JSON.stringify(string.weather[0].description).replace(/['"]+/g, '');
        const highStr = JSON.stringify(Math.round(string.main.temp_max)) + '°';
        const lowStr = JSON.stringify(Math.round(string.main.temp_min)) + '°'
        area.textContent = place.replace(/['"]+/g, '');
        temp.textContent = JSON.stringify(Math.round(string.main.temp)) + '°';
        conditions.textContent = type.replace(/['"]+/g, '');
        high.textContent = 'H:' + highStr.replace(/['"]+/g, '') + ' L:' + lowStr.replace(/['"]+/g, '');
        weather.appendChild(area);
        weather.appendChild(temp);
        weather.appendChild(conditions);
        weather.appendChild(high);
        showWeatherImg(type);
    }
    catch {
        const weather = document.querySelector('.weather');
        const error = document.createElement('div');
        error.id = 'error';
        error.textContent = 'Error, Check Connection And Refresh Page.';
        weather.appendChild(error);
    }
}
getWeather();

const newWeather = function() {
    const connect = document.querySelector('.submit');
    connect.addEventListener('click', async (e) => {
        try {
            const areaEl = document.getElementById('area');
            const tempEl = document.getElementById('temp');
            const conditionsEl = document.getElementById('conditions');
            const highEl = document.getElementById('range');
            areaEl.remove();
            tempEl.remove();
            conditionsEl.remove();
            highEl.remove();

            let text = document.querySelector('.text');
            let key = text.value;
            console.log(key);
            const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${key}&units=imperial&APPID=c6d16474a22ccd0db575b5b424788ef9`, {mode: 'cors'})
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
            const type = JSON.stringify(string.weather[0].description).replace(/['"]+/g, '');
            const highStr = JSON.stringify(Math.round(string.main.temp_max)) + '°';
            const lowStr = JSON.stringify(Math.round(string.main.temp_min)) + '°'
            area.textContent = place.replace(/['"]+/g, '');
            temp.textContent = JSON.stringify(Math.round(string.main.temp)) + '°';
            conditions.textContent = type.replace(/['"]+/g, '');
            high.textContent = 'H:' + highStr.replace(/['"]+/g, '') + ' L:' + lowStr.replace(/['"]+/g, '');
            weather.appendChild(area);
            weather.appendChild(temp);
            weather.appendChild(conditions);
            weather.appendChild(high);
            showWeatherImg(type);
        }
        catch {
            getWeather();
        }
    })
}
newWeather();

const showWeatherImg = (type) => {
    console.log('Type:', type);
    const imageElement = document.querySelector('.imageHolder');
    const trimmedType = type.trim();
    console.log(trimmedType);
    switch (trimmedType) {
        case 'clear sky':
            console.log('triggered: clear sky');
            imageElement.src = 'giphy.gif';
            imageElement.alt = 'clear.png';
            break;
        case 'mist':
            imageElement.src = 'mist.gif';
            break;
        case 'few clouds':
            imageElement.src = 'few-clouds.gif';
            break;
        case 'scattered clouds':
            imageElement.src = 'scattered.gif';
            break;
        case 'broken clouds':
            imageElement.src = 'broken.gif';
            break
        case 'shower rain':
            imageElement.src = 'heavy.gif';
            break;
        case 'rain':
        imageElement.src = 'slow-rain.gif';
            break
        case 'thunderstorm':
            imageElement.src = 'thunderstorm.gif';
            break
        case 'snow':
            imageElement.src = 'snow.gif';
            break
        default:
            console.log('triggered: default');
            imageElement.src = 'defaultGif.gif'
    }
}

