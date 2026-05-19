/* ============================================
   Main JavaScript - Animations & Interactions
   ============================================ */

// Trigger progress bar animations on scroll
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.skill-progress');

    // Intersection Observer to trigger animations when element enters viewport
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the width value from inline style
                const width = entry.target.style.width;
                // Set custom property for animation
                entry.target.style.setProperty('--skill-width', width);
                // Add animate class to trigger animation
                entry.target.classList.add('animate');
                // Unobserve after animation triggers
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all progress bars
    progressBars.forEach(bar => observer.observe(bar));

    // Close mobile menu when clicking on nav links
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.checked = false;
        });
    });
});
