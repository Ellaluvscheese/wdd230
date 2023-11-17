const LAT = "43";
const LON = "-111";
const APIKEY = "5076daa46c48d89cb2affd9c767ec196";
// const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=43&lon=-111&appid=5076daa46c48d89cb2affd9c767ec196&units=imperial`



function displyData(weatherData){
    const icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    const description = weatherData.weather[0].description;
    const windSpeed = weatherData.wind.speed.toFixed(0);
    const temperature = weatherData.main.temp.toFixed(0);
    
    let weatherIcon = document.getElementById('icon');
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', description);

    let descriptionWeather = document.getElementById("description");
    descriptionWeather.innerHTML = `${description}`;

    let temp = document.getElementById('temp');
    temp.innerHTML = `${temperature}&deg;F | ${windSpeed} mph wind`;
}

async function getTheWeather() {
    try{
        const response = await fetch(apiURL);
        if (response.ok){
            const data = await response.json();
            displyData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}

getTheWeather();