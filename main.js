
const openModal = document.getElementById('openModal')
const closeForm = document.getElementById('close-form')
const contactForm = document.getElementById('contact-form')

openModal.addEventListener('click', () => {
    contactForm.classList.add('show');
});

closeForm.addEventListener('click', () => {
    contactForm.classList.remove('show');
});