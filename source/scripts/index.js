const nav = document.querySelector('.nav');
const button = document.querySelector('.nav__toggle');
const slider = document.querySelector('.slider');
const sliderToggle = document.querySelector('.slider__toggle');

nav.classList.add('nav--closed');

button.addEventListener('click', () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
});

if (slider) {
    let flag = false;
    sliderToggle.addEventListener('click', () => {
        if (flag) {
            slider.classList.toggle('slider--after');
            slider.classList.toggle('slider--before');
        } else {
            flag = true;
            slider.classList.add('slider--after');
        }
    })
}

