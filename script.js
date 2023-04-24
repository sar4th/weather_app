const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
    cityName.innerHTML=city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
       
        temperature.innerHTML = response.temp+"°C";
        humidity.innerHTML = response.humidity + "%";
        
        wind.innerHTML = response.wind_speed;
        const temperatureValue = response.temp;

        if (temperatureValue > 25) {
          document.getElementById('wether-icon').src = 'images/clear.png';
        } else {
          document.getElementById('wether-icon').src = 'images/rain.png';
        }
        
    })
	.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Kerala")
