const navHamburger = document.querySelector('.nav-hamburger');
const navClose = document.querySelector('.nav-close');
const navContainer = document.querySelector('.nav-container');

const featuresToggle = document.querySelector('#features-toggle');
const companyToggle = document.querySelector('#company-toggle');
const features = document.querySelector('#features-dropdown');
const company = document.querySelector('#company-dropdown');

navHamburger.addEventListener('click', () => {
    navContainer.classList.toggle('close');
});

navClose.addEventListener('click', () => {
    navContainer.classList.toggle('close');
});

featuresToggle.addEventListener('click', () => {
    features.classList.toggle('close');
});

companyToggle.addEventListener('click', () => {
    company.classList.toggle('close');
});