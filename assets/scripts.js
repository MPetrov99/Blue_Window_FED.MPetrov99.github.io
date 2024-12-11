
// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerImg = document.querySelector('.hamburger img');
    const itemsContainer = document.querySelector('.hamburger .items');

    // Toggle menu on clicking the hamburger icon
    hamburgerImg.addEventListener('click', (event) => {
        event.stopPropagation();
        itemsContainer.classList.toggle('active');
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!itemsContainer.contains(event.target) && !hamburgerImg.contains(event.target)) {
            itemsContainer.classList.remove('active');
        }
    });
});



// Widget rating stars functionality
document.addEventListener('DOMContentLoaded', () => {
    const starsContainers = document.querySelectorAll('.stars');

    starsContainers.forEach(stars => {
        const starElements = stars.querySelectorAll('.image');

        starElements.forEach((star, index) => {
            star.addEventListener('click', () => {
                starElements.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.add('filled');
                    } else {
                        s.classList.remove('filled');
                    }
                });
            });
        });
    });
});
