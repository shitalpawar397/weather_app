// alert("Hiii");

async function fetchWeatherData(cityName){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3e2bbbcf43efebec18f7574b7df2a471`;
	let response = await fetch(url);
	const data = await response.json();
	console.log(data);
}
// fetchWeatherData();


function fetchCity() {
	let cityName = document.getElementById("city_name");
	if(cityName.value == "")
	{
		alert("Enter a City Name");
	}
	else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}

	
}
