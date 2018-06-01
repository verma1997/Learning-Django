//USING IF-ELSE_IF :

var temp = prompt("Enter The Temperature : ");

if(temp<10){
	console.log("It's too cold outside !");
}
else if(temp>=20 && temp<=40){
	console.log("It's moderate outside !");
}
else if(temp>40 && temp<=50){
	console.log("It's too hot outside !");
}
else{
	console.log("Fuckin Asshole !!");
}

console.log("The Temperature Is : " + temp);



//USING WHILE LOOP :
//Print even numbers between 1 to 10:

var x = 1;

while(x<10)
{
	if(x%2==0){
		console.log(x);
	}
	x=x+1;
}

//USING FOR LOOP:

for(var num=1;num<=20;num+=3)
{
	if(num%2==0)
	{
		console.log("EVEN");
	}
	else
	{
		consle.log("ODD");
	}
}