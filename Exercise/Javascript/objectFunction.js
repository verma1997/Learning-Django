//Declaration
var object = {
	name:"Priyanshu",
	func: function(){
		console.log("Hey! The Function Is Called");
	}
}

//Calling the function object:

object.func();

//Using this keyword:

var object = {
	name:"Priyanshu",
	func: function(){
		console.log("Hey " + this.name + " welcome to Django Bootcamp.");
	}
}
/*Output*/
 //Hey Priyanshu welcome to Django Bootcamp