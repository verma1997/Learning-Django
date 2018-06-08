/*var game = document.querySelectorAll('td');

game.addEventListener("click",function(){
	game.textContent = "X";
	game.style.color = black;
})

game.addEventListener("dblclick",function(){
	game.textContent = "0";
	game.style.color = black;
})*/

var restart = document.querySelector("#btn");

var box = document.querySelectorAll('td');

function clearBoard(){
	for(var i=0;i<box.length;i++){
		box[i].textContent = '';
	}
} 

restart.addEventListener('click',clearBoard);

function changeMarker(){
	if(this.textContent === '')
	{
		this.textContent = 'X';
	}
	else if(this.textContent === 'X')
	{
		this.textContent = '0';
	}
	else
	{
		this.textContent = '';
	}
}

for(var i=0;i<box.length;i++)
{
	box[i].addEventListener('click',changeMarker)
}