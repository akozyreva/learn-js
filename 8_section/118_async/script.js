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

//getWeather(2487956);

//async function - new version of ES 17
async function getWeatherAW(woeid) {
	try {
		const result = await fetch(`https://api.codetabs.com/cors-proxy/www.metaweather.com/api/location/${woeid}/`);
		const data = await result.json();
		const today = data.consolidated_weather[0];
		console.log(data.title, today.max_temp, today.min_temp);
		//return resolve value of promise
		return data;
	} catch (error) {
		console.log(error);
		//alert(error)
	}

}

//how to store data. it's not east because 
// variables initialize before the answer!
let a;
a = getWeatherAW(2487956).then(data => {
	a = data;
	console.log(a);
});
//this not working!
console.log(a);

//this works!
setTimeout( () => {
	console.log(a);
}, 5000)