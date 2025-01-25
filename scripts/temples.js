// Get current year
const currentYearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Get last modified date
const lastModified = document.lastModified;
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;


const menu = document.getElementById('menu');
const head = document.getElementById('navigation')

menu.addEventListener( 'click', ()=> {
    head.classList.toggle('show');
    menu.classList.toggle('show');
})
