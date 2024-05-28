let searchBar=document.querySelector(".search-icon");
let searchVal=document.querySelector(".search-value");
let city_name=document.querySelector('.city-name');
let degree=document.querySelector('.degreeIndicator');
let percentage=document.querySelector('.percentage');
let km=document.querySelector('.km');
let imag=document.querySelector('.images');
let apikey='cff3d338d41039def8d271c6d7cfdfc0';
// navigator.geolocation.getCurrentPosition();
// searchBar.addEventListener("click",function(){
//     console.log(searchVal.value);
//     x=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${7.23}&lon=${7.5}&appid=${apikey}`).then(res=>console.log(res));
//     // console.log(x.JSON);
// })
// searchBar.addEventListener("click",function(){
// let url='https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=cff3d338d41039def8d271c6d7cfdfc0&units=metric';



// let getWeather=async (city)=>{
//     let weatherAPI=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cff3d338d41039def8d271c6d7cfdfc0&units=metric`;
//     let weatherObj=await fetch(weatherAPI);
//     let response=weatherObj.json();
    
//     return response
// }


// async function callWeather(){
//     getWeather('Chennai').then((res)=>{
//         console.log(res);
//         let {lat,lon}=res.coord;
//         console.log(lat,"lon=",lon);
//     })
// }
// callWeather();
// });


searchBar.addEventListener('click',function(){
    city=searchVal.value;
    city_name.textContent=city;
    let getWeather=async (city)=>{
        let weatherAPI=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cff3d338d41039def8d271c6d7cfdfc0&units=metric`;
        let weatherObj=await fetch(weatherAPI);
        let response=weatherObj.json();
        
        return response
    }
    
    
    async function callWeather(){
        getWeather(city).then((res)=>{
            console.log(res);
            let {lat,lon}=res.coord;
            console.log(lat,"lon=",lon);
            console.log(res.main.temp)
            degree.innerHTML=`${res.main.temp}<span><sup>o</sup>c</span>`;
            percentage.textContent=res.main.humidity;
            km.textContent=res.wind.speed;
            if(res.main.temp>30){
                imag.setAttribute('src','./images/sun.png');
            }
            else if(res.main.temp<=30){
                imag.setAttribute('src','./images/cloudy.png');
            }
        }).catch((err)=>{
            alert('No Internet');
        })
    }
    callWeather();
});