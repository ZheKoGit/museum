function showMenu() {
	const headerWrapper = document.querySelector('.header-wrapper');
	const headerNavigation = headerWrapper.querySelector('.header__navigation');
	const navigationButton = headerWrapper.querySelector('.navigation-button');
	const navigationButtonStrip = navigationButton.querySelector('.navigation-button__strip');
	const welcomeContent = document.querySelector('.welcome__content');
	navigationButton.addEventListener('click', () => {
		navigationButtonStrip.classList.toggle('navigation-button__strip_disabled');
		navigationButton.classList.toggle('navigation-button_theme_closed');
		headerNavigation.classList.toggle('header__navigation_open');
		welcomeContent.classList.toggle('welcome__content_hidden');
	})
}

export default showMenu;