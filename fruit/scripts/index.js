const api = "https://api.openweathermap.org/data/2.5/forecast?lat=33.12&lon=-117.37&appid=5076daa46c48d89cb2affd9c767ec196&units=imperial";

let today = new Date();

const forecastCard = document.querySelector("#weatherSection #weatherDiv");
const todayCard = document.querySelector("#weatherSection #todayWeatherDiv");

const future1 = document.getElementById("nextWeather");
const future2 = document.getElementById("next2Weather");
const future3 = document.getElementById("next3weather");

const ONE_DAY = 24 * 60 * 60 * 1000
const NINE_AM = 9 * 60 * 60 * 1000;
const currDateP = document.querySelector("#todayDate");

function weatherDisplay(data){
    let iconPic = `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`
    let description = data.list[3].weather[0].description;
    let temperature = data.list[3].main.temp
    let humidity = data.list[3].main.humidity;
    
    //today
    let todayIcon = document.getElementById("todayICON");
    todayIcon.setAttribute('src', iconPic);
    todayIcon.setAttribute('alt', description);

    let todayDesc = document.getElementById("todayDESC");
    todayDesc.innerHTML = description;

    let temp = document.getElementById("TEMP");
    temp.innerHTML = `temperature: ${Math.floor(temperature)}°F`

    let hum = document.getElementById('HUMID');
    hum.innerHTML = `humidity: ${humidity}%`;

    // forecast1
    let iconPicNext = `https://openweathermap.org/img/wn/${data.list[11].weather[0].icon}@2x.png`
    let descriptionNext = data.list[11].weather[0].description;

    let nextIcon = document.getElementById("nextWeatherIcon");
    nextIcon.setAttribute('src', iconPicNext);
    nextIcon.setAttribute('alt', descriptionNext);

    let nextDesc = document.getElementById("nextWeather");
    today.setDate(today.getDate() + 1);
    nextDesc.innerHTML = `${today.toLocaleDateString()}: ` + `${descriptionNext}`;

    // forecast 2
    let iconPicNext1 = `https://openweathermap.org/img/wn/${data.list[19].weather[0].icon}@2x.png`
    let descriptionNext1 = data.list[19].weather[0].description;
    

    let nextIcon1 = document.getElementById("next2Icon");
    nextIcon1.setAttribute('src', iconPicNext1);
    nextIcon1.setAttribute('alt', descriptionNext1);

    let nextDesc1 = document.getElementById("next2Weather");
    today.setDate(today.getDate() + 1);
    nextDesc1.innerHTML = `${today.toLocaleDateString()}: ` + `${descriptionNext1}`;

    //forecast 3
    let iconPicNext2 = `https://openweathermap.org/img/wn/${data.list[27].weather[0].icon}@2x.png`
    let descriptionNext2 = data.list[27].weather[0].description;
    

    let nextIcon2 = document.getElementById("next3Icon");
    nextIcon2.setAttribute('src', iconPicNext2);
    nextIcon2.setAttribute('alt', descriptionNext2);

    let nextDesc2 = document.getElementById("next3Weather");
    today.setDate(today.getDate() + 1);
    nextDesc2.innerHTML = `${today.toLocaleDateString()}: ` + `${descriptionNext2}`;

}

async function getWeatherData(){
    try{
        const response = await fetch(api);
        if (response.ok){
            const data = await response.json();
            weatherDisplay(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

getWeatherData();