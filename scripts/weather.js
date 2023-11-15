const LAT = ""
const LON = ""

const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=43&lon=-111&appid=5076daa46c48d89cb2affd9c767ec196&units=imperial"




async function getTheWeather() {
    try{
        const response = await fetch(apiURL);
        if (response.ok){
            
        }
    }
}