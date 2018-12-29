//scope chain цепь областей видимости!!!
 var a = "Hello!";
first();

function first(){
	var b = 'Hi';
	second();
	
	function second(){
		//know scope of parent - first function and global function
		var c = 'Hey!';
		console.log(a + b + c);
	}
}
