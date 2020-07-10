//Restart Game button
var restart = document.querySelector("#b");

//Grab all squares
var squares = document.querySelectorAll("td");

//Clear all squares

function clearBoard() {
	// body...
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].textContent = '';
	}
}

// apply restart
restart.addEventListener('click',clearBoard);

//check square marker
function changeMarker(){
	if (this.textContent==='') {
		this.textContent = 'X';
	}else if (this.textContent === 'X') {
		this.textContent = 'O';
	}else{
		this.textContent = '';
	}
}

// apply marker to each square
for (var i = squares.length - 1; i >= 0; i--) {
 squares[i].addEventListener('click',changeMarker);
}