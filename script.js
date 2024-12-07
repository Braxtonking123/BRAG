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


// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select all service buttons and corresponding content boxes
    const serviceButtons = document.querySelectorAll('.service-buttons');
    const serviceContents = document.querySelectorAll('.services-content-boxes');

    // Hide all content boxes initially, except the first one
    serviceContents.forEach((content, index) => {
        content.style.display = index === 0 ? 'flex' : 'none';
    });

    // Add event listeners to each button
    serviceButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Hide all service content boxes
            serviceContents.forEach(content => {
                content.style.display = 'none';
            });

            // Generate the ID dynamically based on your existing naming convention
            const selectedContentId = `services-${numberToWord(index + 1)}`;
            const selectedContent = document.getElementById(selectedContentId);
            if (selectedContent) {
                selectedContent.style.display = 'flex';
            }
        });
    });

    // Helper function to convert numbers to words (1 -> "one", 2 -> "two", etc.)
    function numberToWord(number) {
        const words = [
            "one", "two", "three", "four", "five", "six", 
            "seven", "eight", "nine", "ten", "eleven", "twelve"
        ];
        return words[number - 1] || "";
    }
});


