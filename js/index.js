const navHamburger = document.querySelector('.nav-hamburger');
const navClose = document.querySelector('.nav-close');
const navContainer = document.querySelector('.nav-container');
const ignoreOpacity = document.querySelector('.ignore');

const featuresToggle = document.querySelector('#features-toggle');
const companyToggle = document.querySelector('#company-toggle');
const features = document.querySelector('#features-dropdown');
const company = document.querySelector('#company-dropdown');

navHamburger.addEventListener('click', () => {
    navContainer.classList.toggle('close');
    ignoreOpacity.classList.toggle('close');
});

navClose.addEventListener('click', () => {
    navContainer.classList.toggle('close');
    ignoreOpacity.classList.toggle('close');
});

ignoreOpacity.addEventListener('click', () => {
    navContainer.classList.toggle('close');
    ignoreOpacity.classList.toggle('close');
});

featuresToggle.addEventListener('click', () => {
    features.classList.toggle('close');
    if (features.classList.contains('close')) {
        document.querySelector('#features-toggle .dropdown-toggle').src = 'images/icon-arrow-down.svg';
    } else {
        document.querySelector('#features-toggle .dropdown-toggle').src = 'images/icon-arrow-up.svg';
    }
});

companyToggle.addEventListener('click', () => {
    company.classList.toggle('close');

    if (company.classList.contains('close')) {
        document.querySelector('#company-toggle .dropdown-toggle').src = 'images/icon-arrow-down.svg';
    } else {
        document.querySelector('#company-toggle .dropdown-toggle').src = 'images/icon-arrow-up.svg';
    }
});