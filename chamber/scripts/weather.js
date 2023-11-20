// const LAT = '39';
// const LON = '-94';
// const APIKEY = "5076daa46c48d89cb2affd9c767ec196";

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=39&lon=-94&appid=5076daa46c48d89cb2affd9c767ec196&units=imperial`


function displayWeatherData(wData){
    const icon = `https://openweathermap.org/img/wn/${wData.list[0].weather[0].icon}@2x.png`
    const description = wData.list[0].weather[0].description;
    const tempCurr = wData.list[0].main.temp.toFixed();
    const tempNext = wData.list[1].main.temp.toFixed();
    const tempNext2 = wData.list[2].main.temp.toFixed();
    const tempNext3 = wData.list[4].main.temp.toFixed();

    let weatherIcon = document.getElementById("weatherIcon");
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', description);

    let descriptionWeather = document.getElementById("description");
    descriptionWeather.innerHTML = `${description}`;

    let currTemp = document.getElementById('temp');
    currTemp.innerHTML = `${tempCurr}&deg;F`;

    let nextTemp = document.getElementById("nextTemp");
    nextTemp.innerHTML = `${tempNext}&deg;F`;

    let nextTemp2 = document.getElementById("nextTemp2");
    nextTemp2.innerHTML = `${tempNext2}&deg;F`;

    let nextTemp3 = document.getElementById("nextTemp3");
    nextTemp3.innerHTML = `${tempNext3}&deg;F`;
}

async function getWeather(){
    try{
        const response = await fetch(apiURL);
        if(response.ok){
            const data = await response.json();
            displayWeatherData(data);
        }else{
            throw Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
}

getWeather();


// function showWindChill(temp, speed){
//     const windchillSpan = document.getElementById("windChill");

//     let message = "N/A";

//     if (temp <= 50 && speed > 3){
//         let chillFactor = Math.pow(speed, 0.16);
//         let chill = 35.74 + (0.6215 * temp) - (35.75 * chillFactor) + (0.4275 * temp * chillFactor)
//         message = `${chill}`;
//     }


//     windchillSpan.textContent = message;
// }

// const temperatureSpan = document.getElementById("temperature");
// const windSpeedSpan = document.getElementById("windSpeed");
// const temperature = parseInt(temperatureSpan.textContent);
// const windSpeed = parseInt(windSpeedSpan.textContent);

// showWindChill(temperature, windSpeed)