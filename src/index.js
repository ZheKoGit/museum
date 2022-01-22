window.onload = () => {
	//console.dir(document.querySelector('.amount__number'));
	//changeNumberTickets();
	//let amountNumber = document.querySelector('.amount__number');
	//console.log(document.querySelector('.play-range'));
	changeStylePlayerRange();
	startPlayer();
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

function startPlayer() {
	const player = document.querySelector('.player-wrapper');
	const playerInner = player.querySelector('.player-inner');
	const playerLink = player.querySelector('.player-link');
	const playerPlaySizeBig = player.querySelector('.player__play_size_big');
	playerInner.addEventListener('click', () => {
		playerLink.classList.add('player-link_hidden');
		playerPlaySizeBig.classList.add('player__play_size_big_hidden');
		//const playerIframe = player.createElement('iframe');
		const playerIframe = '<iframe class="player__iframe" width="1440" src="https://www.youtube.com/embed/zp1BXPX8jcU?controls=0&autoplay=1&modestbranding=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
		playerInner.innerHTML = playerIframe;
		console.log(playerPlaySizeBig.style.display);
	})
}