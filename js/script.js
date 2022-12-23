const nav = document.querySelector('.nav-mobile')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelectorAll('.nav-mobile__link')
const footerYear = document.querySelector('.footer__year')


const toggleNav = () => {
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
	footerYear.innerText = year
}


hamburger.addEventListener('click', toggleNav)
currentYear()
