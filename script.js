// Select DOM elements
const inputField = document.querySelector('input');
const searchButton = document.querySelector('button');
const temperatureElement = document.querySelector('.temprature');
const descriptionElement = document.querySelector('.description');
const humidityElement = document.querySelector('.humidity .wind-para');
const windElement = document.querySelector('.wind .wind-para');
const weatherImage = document.querySelector('.wh-img');

 async function checkWheather(city){
    if(!city) {
     alert("please enter city name")
     return
    }
    try {
    const apikey='b9a477008cd18204cbe435916d70aa98';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    const weatherdata= await fetch(`${url}`).then(response=>response.json())
    temperatureElement.innerHTML=`${ Math.round(weatherdata.main.temp-273.15)}°C`;
    descriptionElement.innerHTML=`${weatherdata.weather[0].description}`
    humidityElement .innerHTML=`${weatherdata.main.humidity} % <br>Humidity `
    windElement.innerHTML=`${weatherdata.wind.speed}KM/H <br> Wind Speed`
    console.log(weatherdata.weather[0].main);
    
    switch(weatherdata.weather[0].main)
    {
        case 'Clouds' :
            weatherImage.src="./assets/cloud.png";
            break;
            case 'Clear':
            weatherImage.src="./assets/clear.png";
            break;
            case 'Haze' :
             break;
            case 'Snow' :
            weatherImage.src="./assets/snwo2-removebg-preview.png";
            break;
            case 'Thunderstorm' :
                weatherImage.src="./assets/snow.png";
                break;
                case 'Wind' :
                weatherImage.src="./assets/wind.png";
                break;
    }
} catch(err) {
    alert("please enter valid city name")
}
}
 
searchButton.addEventListener('click',()=>{
   checkWheather(inputField.value)
})

inputField.addEventListener("keydown", function(event) {
    if(event.keyCode == 13) {
    checkWheather(inputField.value)
}
})