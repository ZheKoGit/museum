export { openForm };

const tickets = document.querySelector('.tickets');
const booking = document.querySelector('.booking');
const bookingForm = booking.querySelector('.booking-form');

function openForm() {
	const ticketsButton = tickets.querySelector('.tickets__button');
	ticketsButton.addEventListener('click', () => {
		booking.classList.add('booking-active');
		bookingForm.classList.add('booking-form-active');
	})
	closeForm();
	createButtonRippleEffect();
}

function closeForm() {
	const formCloseButton = bookingForm.querySelector('.form__close');
	formCloseButton.addEventListener('click', () => {
		booking.classList.remove('booking-active');
		bookingForm.classList.remove('booking-form-active');
	})
	booking.addEventListener('click', (e) => {
		if (e.target.classList.contains('booking-form-active')) {
			booking.classList.remove('booking-active');
			bookingForm.classList.remove('booking-form-active');
		}
	})
}

function createButtonRippleEffect() {
	const buttonCard = bookingForm.querySelector('.button__card');
	buttonCard.addEventListener('click', (e) => {
		let y = e.layerY;
		let x = e.layerX;
		let oTop = buttonCard.offsetTop;
		let oLeft = buttonCard.offsetLeft;
		let left = x - oLeft;
		let top = y - oTop;

		let circleButton = document.createElement('span');
		circleButton.classList.add('circle__button');
		circleButton.style.top = y + 'px';
		circleButton.style.left = x + 'px';
		buttonCard.append(circleButton);
		setTimeout(() => circleButton.remove(), 1000)
		// console.log(`x: ${x}, y: ${y}, oTop: ${oTop}, oLeft: ${oLeft}`)
		// console.log(e)
	})
}

