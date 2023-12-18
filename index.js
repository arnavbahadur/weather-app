const apikey = "ecc5c4f67e0d8820bfa5d885da41d833"

const weatherDataE1 = document.getElementById("Weather-Data")

const cityinputE1 = document.getElementById("enter-city")

const formE1= document.querySelector("form")
formE1.addEventListener("submit",(event)=>{
 event.preventDefault();        
     const cityValue= cityinputE1.value;
     getWeatgerData(cityValue);
});
async function getWeatgerData(cityValue){
    try {
        const response = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
        if(!response.ok){
            throw new Error("Network response is not ok")
        }
    const data = await response.json()

    const temperature = Math.round(data.main.temp)

    const description = data.weather[0].description

    const icon = data.weather[0].icon
    const details = [
        `Feels like: ${Math.round(data.main.feels_like)} °c`,
        `Humidity: ${data.main.humidity} %`,
        `Wind speed: ${data.wind.speed} m/s`,
    ]

    weatherDataE1.querySelector(".icon").innerHTML = `  <img src="https://openweathermap.org/img/wn/${icon}.png" alt="">`

    weatherDataE1.querySelector(".temperature" ).textContent =`${temperature}°c`; 
    weatherDataE1.querySelector(".description" ).textContent =`${description}`;

    weatherDataE1.querySelector(".details" ).innerHTML = details.map((detail)=>`  <div class="detailsss"> ${detail}</div>`).join("");
} catch (error) {
    weatherDataE1.querySelector(".icon").innerHTML = "";

    weatherDataE1.querySelector(".temperature" ).textContent =""; 
    weatherDataE1.querySelector(".description" ).textContent ="An Error Happend please try again later";

    weatherDataE1.querySelector(".details" ).innerHTML = "";
       
    }
}
