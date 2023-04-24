const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1a3849d2cmsh4e6b3d8d179a40fp14172fjsnb19b9772bf94',
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