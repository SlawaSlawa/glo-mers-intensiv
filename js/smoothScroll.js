const linksHead = document.querySelectorAll('.menu-list__link');
const mainScroll = document.querySelector('.main__scroll');
const newArray = [...linksHead,mainScroll];

newArray.forEach(link => {
	link.addEventListener('click', (evt) => {
		evt.preventDefault();
		const target = evt.target;
		const ID = target.getAttribute('href').substr(1);
		document.getElementById(ID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
});