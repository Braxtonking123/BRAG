document.querySelectorAll('.hero-buttons').forEach(button => {
    button.addEventListener('click', function() {
        // Previous functionality for the buttons
        const sectionToShow = this.getAttribute('data-section');
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        if (sectionToShow) {
            const sectionElement = document.getElementById(sectionToShow);
            if (sectionElement) {
                sectionElement.style.display = 'flex';
                const navbarHeight = 150;
                const sectionPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: sectionPosition - navbarHeight, behavior: 'smooth' });
            }
        }
    });
});

document.getElementById('service-page-button').addEventListener('click', () => {
    // New functionality for the service page button
    window.location.href = 'services.html'; // Navigate to a dedicated services page
});

console.log(`Button clicked: ${this.id}, Showing section: ${sectionToShow}`);



