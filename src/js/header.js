function showMenu() {
	const headerWrapper = document.querySelector('.header-wrapper');
	const headerNavigation = headerWrapper.querySelector('.header__navigation');
	const navigationButton = headerWrapper.querySelector('.navigation-button');
	const navigationButtonStrip = navigationButton.querySelector('.navigation-button__strip');
	const welcomeContent = document.querySelector('.welcome__content');
	const sliderImage = document.querySelector('.slider__image');
	const navigationSmallDisplay = document.querySelector('.navigation__small-display');
	const welcomeWrapper = document.querySelector('.welcome-wrapper');
	navigationButton.addEventListener('click', () => {
		navigationButtonStrip.classList.toggle('navigation-button__strip_disabled');
		navigationButton.classList.toggle('navigation-button_theme_closed');
		headerNavigation.classList.toggle('header__navigation_open');
		welcomeContent.classList.toggle('welcome__content_hidden');
		sliderImage.classList.toggle('slider__image_hidden');
		navigationSmallDisplay.classList.toggle('navigation__small-display_show');
		welcomeWrapper.classList.toggle('navigation__container');
	})
	const mainElement = document.documentElement; // обращаемся к тегу HTML
	const mainElementWidth = mainElement.clientWidth;

	console.log(mainElementWidth);
}

export default showMenu;