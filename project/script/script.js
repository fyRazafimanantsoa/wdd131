// Get current year
const currentYearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Get last modified date
const lastModified = document.lastModified;
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const nav = document.querySelector('.menu');

    menu.addEventListener('click', function() {
        nav.classList.toggle('show');
        menu.textContent = nav.classList.contains('show') ? '✖' : '☰';
    });
});