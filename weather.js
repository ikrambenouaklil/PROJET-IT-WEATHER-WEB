const ApiKey = "30c596cb9520d133e559d675d0c84d7b";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".boxsearch input");
const searchBtn=document.querySelector(".boxsearch button");

async function checkWeather(city){
   const response= await fetch(ApiUrl + city +  `&appid=${ApiKey}`);
   var data = await response.json();
   console.log(data);
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
document.querySelector(".desc").innerHTML=data.weather[0].description;

}


  searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);
    });



