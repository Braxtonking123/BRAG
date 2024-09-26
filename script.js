document.querySelectorAll('.hero-buttons').forEach(button => {
    button.addEventListener('click', function() {
        // Get the section to show based on the data-section attribute
        const sectionToShow = this.getAttribute('data-section');

        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none'; // This hides all sections
        });

        // Show the selected section if it has a valid ID
        if (sectionToShow) {
            const sectionElement = document.getElementById(sectionToShow);
            if (sectionElement) {
                sectionElement.style.display = 'flex'; // Change to 'flex' for proper layout
                
                // Scroll to the section with an offset for the navbar
                const navbarHeight = 150; // Fixed height of the navbar
                const sectionPosition = sectionElement.getBoundingClientRect().top + window.scrollY; // Get the section's position
                window.scrollTo({ top: sectionPosition - navbarHeight, behavior: 'smooth' }); // Scroll to the adjusted position
            }
        }
    });
});



