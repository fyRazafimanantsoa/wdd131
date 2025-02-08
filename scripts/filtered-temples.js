document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.getElementById('menu');
const navigation = document.getElementById('navigation');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('show');
  menuButton.textContent = navigation.classList.contains('show') ? '✕' : '☰';
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Paris France",
      location: "Paris, France",
      dedicated: "2017, May, 21",
      area: 8500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/800x500/paris-france-temple-exterior-1905503.jpg"
    },
    {
      templeName: "Sydney Australia",
      location: "Sydney, Australia",
      dedicated: "1984, September, 20",
      area: 95000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/800x500/sydney-australia-temple-sunset-1116152-wallpaper.jpg"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 12000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/800x1280/tokyo_japan_temple-main.jpeg"
    },
    {
      templeName: "The Hague Netherlands",
      location: "Hague, Netherlands",
      dedicated: "2002, September, 8",
      area: 14477,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-hague-netherlands/2019/800x500/1-hague-netherlands-temple-2196995.jpg"
    },
  ];


function renderTemples(templesArray) {
  const container = document.getElementById('templeCards');
  container.innerHTML = '';
  
  templesArray.forEach(temple => {
    const figure = document.createElement('figure');
    figure.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;
    container.appendChild(figure);
  });
}


function applyFilter(filterType) {
  let filtered = [];
  
  switch(filterType) {
    case 'Old':
      filtered = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
      break;
    case 'New':
      filtered = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
      break;
    case 'Large':
      filtered = temples.filter(temple => temple.area > 90000);
      break;
    case 'Small':
      filtered = temples.filter(temple => temple.area < 10000);
      break;
    default:
      filtered = temples;
  }
  
  renderTemples(filtered);
}


document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const filterType = link.getAttribute('href').substring(1);
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
    applyFilter(filterType);
  });
});

applyFilter('Home');