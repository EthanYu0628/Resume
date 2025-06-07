document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const sections = document.querySelectorAll('section');

    const fadeIn = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(fadeIn, {
        root: null,
        threshold: 0.1
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                formStatus.style.color = 'green';
                formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
                contactForm.reset();
            } else {
                formStatus.style.color = 'red';
                formStatus.textContent = 'Please fill out all fields.';
            }

            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        });
    }
});