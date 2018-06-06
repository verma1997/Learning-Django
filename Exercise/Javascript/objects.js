//Declaring Objects:

var desktop = {company="DELL", year:1990, model="alienware"}

/*Calling objects with their key:*/
desktop["company"]
desktop["year"]
desktop["model"]

//Nested Objects:

var newObject = {a:"Hello", b:[1,2,3], c:{inside:['a','b']};
/*Calling objects in nesting:*/
newObject['a'];
newObject['b'][1]; // Element at index 1.
newObject['c']['inside'][1]; //Element 1 of nested object of object c. 


//Want to see the elements of the Object on the console:

console.dir(desktop);

// Using for-in:

for(key in desktop)
{
	console.log(key);
} 
/*Output:
company
year
model*/

for(key in desktop)
{
	console.log(desktop[key]);
}
/*Output
DELL
1990
alienware*/
