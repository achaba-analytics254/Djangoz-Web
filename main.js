const openModal = document.getElementById('openModal')
const closeForm = document.getElementById('close-form')
const contactForm = document.getElementById('contact-form')
const h1 = document.querySelector('h1')

openModal.addEventListener('click', () => {
    contactForm.classList.add('show');
});

closeForm.addEventListener('click', () => {
    contactForm.classList.remove('show');
});