// Current Year
const currentYearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Last Modified
const lastModified = document.lastModified;
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;

// Wind Chill Calculation
const temperature = 10; 
const windSpeed = 5; 

function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        return Math.round(13.12 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
    }
    return 'N/A';
}

const windChillElement = document.getElementById('windChill');
windChillElement.textContent = calculateWindChill(temperature, windSpeed);