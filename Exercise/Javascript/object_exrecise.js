var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function(){
  	console.log(this.name.length);
  }
}

//OR

var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function(){
  	var len = this.name.length;
  	console.log(len);
  }
}


var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  method : function(){
  	alert("Name is " + this.name + ", " + "Job is " + this.job + ", " + "Age is " + this.age);
  }
}


//Using 'split' function:
/*SYNTAX:
variable_name.split("from_where_you_want_split")[index_number];
*/
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName : function(){
  	console.log(this.name.split(" ")[1]);
}

