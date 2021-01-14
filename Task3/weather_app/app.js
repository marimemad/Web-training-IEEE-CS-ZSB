
let api={
  'key':'af8211cf9aa2e48be5f7e65f1d65ae33',
  'baseUrl':'http://api.openweathermap.org/data/2.5/'
};

var btnsearch=document.getElementsByClassName('find');
btnsearch[0].addEventListener('click', findWeather,false);

function findWeather(){
  let contry=document.getElementsByClassName('contryname')[0].value;
  url=`${api.baseUrl}weather?q=${contry}&units=metric&appid=${api.key}`;
  document.getElementsByClassName('contryname')[0].value='';

  fetch(url)
 .then((response) => response.json())
 .then((data) =>(displayWeather(data)))
 .catch(() => {
    msg=document.getElementsByClassName('msg')[0];
    msg.textContent = "Please search for a valid city "});
 }

function displayWeather(data){
  document.getElementsByClassName('msg')[0].textContent='';
   let city=data.name;
   let {temp}=data.main;
   let {description}=data.weather[0];
   let {speed}=data.wind;

   document.getElementsByClassName('city')[0].innerText=`Contry /City: ${city}`;
   document.getElementsByClassName('temperature')[0].innerText=`Temperature: ${temp}`;
   document.getElementsByClassName('description')[0].innerText=`Description: ${description}`;
   document.getElementsByClassName('wind')[0].innerText=`Wind Speed: ${speed}` ;

}
