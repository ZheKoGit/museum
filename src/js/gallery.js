// отобразить картинки в случанойм порядке
function displayImagesRandomOrder() {
	const numberImages = 15;
	const galleryInner = document.querySelector('.gallery__inner');
	// создай массив картинок
	function createArrayImages() {
		let ArrayImages = [];
		for (let i = 1; i <= numberImages; i++) {
			const image = document.createElement('img');
			image.width = '464';
			image.classList.add('gallery__image');
			image.src = `src/img/gallery/galery${i}.jpg`;
			image.alt = `image`;
			ArrayImages.push(image);
		}
		ArrayImages = shuffleArray(ArrayImages);
		displayPictures(ArrayImages);
		console.log(ArrayImages);
	}
	createArrayImages();

	// перемешай массив
	function shuffleArray(arr) {
		const arrRandom = [];
		let number = findRandomNumber(arr.length - 1);
		for (let i = 0; arrRandom.length - 1 < arr.length - 1; i++) {
			if (arrRandom.includes(arr[number])) {
				number = findRandomNumber(arr.length - 1);
			} else {
				arrRandom.push(arr[number]);
				number = findRandomNumber(arr.length - 1);
			}
		}
		// найди случайное число
		function findRandomNumber(n) {
			return Math.floor(Math.random() * (n - 0 + 1)) + 0;
		}
		return arrRandom;
	}

	// отобрази картинки
	function displayPictures(arr) {
		//const arrNew = arr.map(function (image) { galleryInner.append(image) });
		arr.forEach(image => {
			galleryInner.append(image);
		})
	}
}
displayImagesRandomOrder();