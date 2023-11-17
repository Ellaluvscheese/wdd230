const LAT = '39';
const LON = '-94';
const APIKEY = "5076daa46c48d89cb2affd9c767ec196";

const APIURL2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=&${LON}&appid=${APIKEY}`


function showWindChill(temp, speed){
    const windchillSpan = document.getElementById("windChill");

    let message = "N/A";

    if (temp <= 50 && speed > 3){
        let chillFactor = Math.pow(speed, 0.16);
        let chill = 35.74 + (0.6215 * temp) - (35.75*chillFactor) + (0.4275 * temp * chillFactor)
        message = `${chill}`;
    }


    windchillSpan.textContent = message;
}

const temperatureSpan = document.getElementById("temperature");
const windSpeedSpan = document.getElementById("windSpeed");
const temperature = parseInt(temperatureSpan.textContent);
const windSpeed = parseInt(windSpeedSpan.textContent);

showWindChill(temperature, windSpeed)