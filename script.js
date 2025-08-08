 // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const navLinks = document.getElementById('nav-links');
            navLinks.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Initialize EmailJS
        (function() {
            emailjs.init("YOUR_EMAILJS_USER_ID");
        })();

        // Form submission handling with EmailJS
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const templateParams = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            emailjs.send('service_quaa69l', 'template_3kax405', templateParams,'eNnR-AwgBfGEORdPp')
                .then(function(response) {
                    alert('Thank you! Your message has been sent successfully.');
                    document.getElementById('contact-form').reset();
                }, function(error) {
                    alert('Failed to send message. Please try again later or email me directly.');
                });
        });

        // Animate skill bars on scroll into view
        const skillBars = document.querySelectorAll('.skill-bar');
        
        const animateSkills = () => {
            skillBars.forEach(bar => {
                const barPosition = bar.getBoundingClientRect().top;
                const screenPosition = window.innerHeight;
                
                if (barPosition < screenPosition) {
                    bar.style.width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
                }
            });
        };

        window.addEventListener('scroll', animateSkills);
        window.addEventListener('load', animateSkills);

        // Dark/light mode toggle (could be extended if needed)
        const toggleDarkMode = document.createElement('button');
        toggleDarkMode.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        `;
        toggleDarkMode.className = 'fixed bottom-6 right-6 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg z-50';
        document.body.appendChild(toggleDarkMode);

        toggleDarkMode.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });