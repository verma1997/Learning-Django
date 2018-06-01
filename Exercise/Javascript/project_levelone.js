var firstname = prompt("Enter Your First Name : ");
var lastname = prompt("Enter The Last Name : ");
var age = prompt("Enter Your Age : ");
var height = prompt("Enter The Height(in centimeters) : ");
var petname = prompt("Enter Your Pet Name : ");

var lastword = petname.length;

if(firstname[0]==lastname[0] && age>20 && age<30 && height>=170 && petname[lastword-1]=='y')
{
	alert("You can see the secret message !");
}	
else
{
	alert("You cannot see the secret message!");
}