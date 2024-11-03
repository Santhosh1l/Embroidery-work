document.addEventListener('DOMContentLoaded', function() {
    const collapsibleHeader = document.querySelector('.collapsible');
    const content = document.querySelector('.content');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    // Toggle content visibility for collapsible sections
    collapsibleHeader.addEventListener('click', function() {
        content.classList.toggle('active');
        content.style.display = content.classList.contains('active') ? 'block' : 'none';
    });

    // Smooth scrolling to the top
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show "scroll to top" button when scrolling down
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
});
