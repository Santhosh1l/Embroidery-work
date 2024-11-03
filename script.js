// script.js
document.addEventListener('DOMContentLoaded', function() {
    const collapsibleHeader = document.querySelector('.collapsible');
    const content = document.querySelector('.content');

    collapsibleHeader.addEventListener('click', function() {
        content.classList.toggle('active'); // Toggle the 'active' class
        if (content.classList.contains('active')) {
            content.style.display = 'block'; // Show the content
        } else {
            content.style.display = 'none'; // Hide the content
        }
    });
});
