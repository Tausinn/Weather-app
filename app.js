const tempShow = document.querySelector("#temp-show");
const place = document.querySelector("#location");
const showBtn = document.querySelector("#show-btn");
const msg = document.querySelector(".msg");

const fetchWeather = async () =>{
    const apiKey = "bc11419904dc04e913c4f4181cb37891";
    const city = place.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    

    try{
        const response = await fetch(url);
        if(!response.ok) throw new Error("City not found");
        const data = await response.json();

        tempShow.innerHTML = data.main.temp
    }catch(error){
        msg.innerHTML = error.message
    }
}

showBtn.addEventListener("click", fetchWeather);