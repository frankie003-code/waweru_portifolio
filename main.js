// JavaScript functionality for the portfolio website

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark/Light mode toggle
const toggleSwitch = document.querySelector('#toggle-mode');
toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load the preferred theme on page load
window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme');
    if (theme) {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        toggleSwitch.checked = theme === 'dark';
    }
});

// Form validation for the contact form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Here you can add code to send the form data to a server or API
    alert('Message sent successfully!');
    this.reset();
});