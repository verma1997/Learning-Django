//Declaration of Array:
var languages = ["Python","PHP","Javascript","Go","C++"];

//Iteration In Array :

for(var i=0;i<languages.length;i++)
{
	console.log(languages[i]);
}
//Iteration using for-of : 
for(varibalename of languages)
{
	console.log(variablename);
}


//Calling array using forEach : 

languages.forEach(alert);

//OR

function lang(name){
	console.log(name + "is AWESOME !");
}

languages.forEach(lang);
//OUTPUT:
/*Python is AWESOME !
PHP is AWESOME !
Javascript is AWESOME !
Go is AWESOME !
C++ is AWESOME !*/

//PUSH and POP operation on array:
 var lastitem = languages.pop(); //Pop the last item of the array.

 languages.push("item_name"); //Push the item in the array.