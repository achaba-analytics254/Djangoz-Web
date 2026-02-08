
const openModal = document.getElementById('openModal');
const closeForm = document.getElementById('close-form');
const contactForm = document.getElementById('contact-form');
const navBtn = document.getElementById('navBtn');
const navMenu = document.getElementById('navMenu');
const mobileMenuIcon = document.getElementById('navBtn');

navBtn.addEventListener('click', () => {
    if (navBtn && navMenu){
        navMenu.classList.toggle('active');
        navBtn.setAttribute('aria-expanded', !isExpanded);

        if (mobileMenuIcon){
            if (isExpanded){
                mobileMenuIcon.classList.remove('fa-times');
                mobileMenuIcon.classList.add('fa-bars');
            } else{
                mobileMenuIcon.classList.remove('fa-bars');
                mobileMenuIcon.classList.add('fa-times');
            }
        }
        document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
    }

});

window.addEventListener('resize', () => {
    if (window.innerWidth > 992){
        navMenu.classList.remove('active')
    }
})
openModal.addEventListener('click', () => {
    contactForm.classList.add('show');
});

closeForm.addEventListener('click', () => {
    contactForm.classList.remove('show');
});

const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "63f68dea-a60c-43a8-9d29-cd5347d227e6");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
window.onload = function () {
    // Reset the form fields when the page loads
    document.getElementById('form').reset();
};