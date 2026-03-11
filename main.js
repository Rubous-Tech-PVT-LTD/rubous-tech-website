document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navIcon = mobileToggle.querySelector('i');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Toggle icon between list and X
        if (navLinks.classList.contains('active')) {
            navIcon.classList.remove('ph-list');
            navIcon.classList.add('ph-x');
        } else {
            navIcon.classList.remove('ph-x');
            navIcon.classList.add('ph-list');
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navIcon.classList.remove('ph-x');
            navIcon.classList.add('ph-list');
        });
    });

    // 2. Scroll Reveal Animations using Intersection Observer
    const observeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Stop observing once animated in
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observeElements.forEach(el => observer.observe(el));

    // 3. Navbar solid background on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(6, 11, 25, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(6, 11, 25, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 4. Form Submission with Web3Forms
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Collect actual button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Prepare Form Data
            const formData = new FormData(contactForm);
            
            try {
                // Send request to Web3Forms
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();

                if (data.success) {
                    formStatus.textContent = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                } else {
                    formStatus.textContent = data.message || 'Something went wrong. Please try again later.';
                    formStatus.className = 'form-status';
                    formStatus.style.display = 'block';
                    formStatus.style.color = '#ef4444';
                    formStatus.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                    formStatus.style.borderColor = 'rgba(239, 68, 68, 0.2)';
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                formStatus.textContent = 'A network error occurred. Please try again.';
                formStatus.className = 'form-status';
                formStatus.style.display = 'block';
                formStatus.style.color = '#ef4444';
                formStatus.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                formStatus.style.borderColor = 'rgba(239, 68, 68, 0.2)';
            } finally {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Hide status message after 5 seconds if successful
                if (formStatus.classList.contains('success')) {
                    setTimeout(() => {
                        formStatus.style.display = 'none';
                        formStatus.className = 'form-status';
                    }, 5000);
                }
            }
        });
    }
});
