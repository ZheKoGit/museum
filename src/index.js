window.onload = () => {
	//console.dir(document.querySelector('.amount__number'));
	//changeNumberTickets();
	//let amountNumber = document.querySelector('.amount__number');
	//console.log(document.querySelector('.play-range'));
	changeStylePlayerRange();
}

/*const changeNumberTickets = document.querySelector('.amount__up').addEventListener('click', function () {
	//console.log();
	let input = document.querySelector('.amount__number');
	input.stepUp();
})*/

function changeStylePlayerRange() {
	const playerControl = document.querySelector('.player__control');
	playerControl.addEventListener('input', (e) => {
		if (e.target.classList.contains('player__control-range')) {
			console.log(e.target.value);
			e.target.style.background = `linear-gradient(to right, #710707 ${e.target.value}%, #C4C4C4 ${e.target.value}%)`;
		}
	})
	//console.dir(playerControl);
}