const nav = document.querySelector('.nav-mobile')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelectorAll('.nav__link')
const footerYear = document.querySelector('.footer__year')
const headerTop = document.querySelector('.header__top')


const toggleNav = () => {
	document.body.classList.toggle('overflow')
	nav.classList.toggle('nav-mobile--active')
	hamburger.classList.toggle('is-active')
	navLinks.forEach(element => {
		element.addEventListener('click', () => {
			nav.classList.remove('nav-mobile--active')
			hamburger.classList.remove('is-active')
		})
	})
}

const currentYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = year
}


hamburger.addEventListener('click', toggleNav)
currentYear()
