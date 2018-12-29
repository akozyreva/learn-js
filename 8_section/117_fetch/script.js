//https://www.metaweather.com/api/
//https://codetabs.com/cors-proxy/cors-proxy.html
// cors proxy for free
//fetch return promise!! we need only consume it
function getWeather(woeid) {
	fetch(`https://api.codetabs.com/cors-proxy/www.metaweather.com/api/location/${woeid}/`)
		.then(result => {
			console.log(result);
			//it's new promise
			return result.json();
		})
		.then(data => {
			//console.log(data);
			const today = data.consolidated_weather[0];
			console.log(data.title, today.max_temp, today.min_temp);
		})
		.catch(error => console.log(error));
}

getWeather(2487956);
//getWeather(44418);