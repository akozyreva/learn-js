const second = () => {
	setTimeout(() => {
		console.log('Async');
	}, 2000);
}

const first = () => {
	console.log('Hey there');
	//second will excecute after 2 seconds, so firstly will log The end
	second();
	console.log("The end");
}

first();