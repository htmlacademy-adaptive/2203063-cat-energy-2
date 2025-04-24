const nav = document.querySelector('.nav');
const button = document.querySelector('.nav__toggle');

nav.classList.add('nav--closed');

button.addEventListener('click', () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
})
