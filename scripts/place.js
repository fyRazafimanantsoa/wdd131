// Current Year
const currentYearSpan = document.getElementById('currentyear');
currentYearSpan.textContent = new Date().getFullYear();

// Last Modified
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Wind Chill (Single-line function + conditions)
const calculateWindChill = (temp, speed) => 
    (temp <= 10 && speed > 4.8) 
        ? Math.round(13.12 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)) 
        : 'N/A';

// Display wind chill
document.getElementById('windChill').textContent = calculateWindChill(10, 5);