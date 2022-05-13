function comparing() {
	const exploreComparing = document.querySelector('.explore__comparing');
	const img = exploreComparing.querySelector('.comparing__images_before');
	const imgAfter = exploreComparing.querySelector('.comparing__images_after');
	const img1 = exploreComparing.querySelector('.comparing__images_before img');
	let clicked, w, h, wA;
	// получаем ширину и высоту картинки
	wA = imgAfter.offsetWidth;
	img1.style.width = `${wA}px`;
	w = img.offsetWidth;
	h = img.offsetHeight;
	console.log(img1.offsetWidth, wA)

	// задаем начальную ширину картинке
	img.style.width = (w / 1.6) + 'px';
	//console.log(w, h);

	// начальное расположение ползунка
	const slider = exploreComparing.querySelector('.comparing__images-control');
	slider.style.left = (w / 1.6) - 19.5 + 'px';

	slider.addEventListener('mousedown', slideReady);
	slider.addEventListener('touchstart', slideReady);
	window.addEventListener('mouseup', slideFinish);
	window.addEventListener('touchstop', slideFinish);

	function slideReady(e) {
		//console.log(e.changedTouches)
		e.preventDefault();
		clicked = 1;
		window.addEventListener('mousemove', slideMove);
		window.addEventListener('touchmove', slideMove);
		//console.log(e.pageX - img.getBoundingClientRect().left);
	}

	function slideFinish() {
		clicked = 0;
		console.log(clicked);
	}

	function slideMove(e) {
		let pos;
		if (clicked === 0) return false;
		pos = getCursorPos(e);
		if (pos < 0) pos = 0;
		if (pos > w) pos = w;
		slide(pos);
	}

	function getCursorPos(e) {
		let a, x = 0;
		a = img.getBoundingClientRect(); // позиция изображения
		x = e.pageX - a.left; // координата относительно левого края изображения
		x = x - window.pageXOffset; // вычитаем прокручивание страниц по X, т.е. координата мыши определяется у четом скролла страницы
		//console.log(e.pageX, a.left);
		return x;
	}

	function slide(x) {
		img.style.width = `${x}px`;
		slider.style.left = `${img.offsetWidth - (slider.offsetWidth / 2)}px`; // изменение координаты ползунка в зависимости от ширины картинки и ползунка
		//console.log(img.offsetWidth, (slider.offsetWidth / 2));
	}

	// получи координаты мыши
	function getMouseCoordinates() {
		let w;
		exploreComparing.addEventListener('mousedown', (e) => {
			//console.dir(e.target.offsetParent)
			//console.log(e.target.offsetLeft);
			w = e.layerX + 'px';
			//console.log(e);
			//console.log(window.event);
			movingSlider(w);
		})
	}
	//getMouseCoordinates();

	// задай координаты ползунку
	function movingSlider(w) {
		const comparingImagesControl = exploreComparing.querySelector('.comparing__images-control');
		comparingImagesControl.style.left = w;

	}
}
export default comparing;