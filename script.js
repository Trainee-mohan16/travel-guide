document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const destinationList = document.getElementById('destination-list');
  
    // Hardcoded destination data
    const destinations = [
      {
        id: 1,
        name: 'Paris',
        country: 'France',
        description: 'The city of light, known for its art, fashion, and culture.',
        image: 'paris.jpeg',
        url: 'https://en.parisinfo.com/'
      },
      {
        id: 2,
        name: 'New York City',
        country: 'USA',
        description: 'A bustling metropolis known for its skyline, Broadway, and museums.',
        image: 'newyork.jpeg',
        url: 'https://www.nycgo.com/'
      },
      {
        id: 3,
        name: 'Tokyo',
        country: 'Japan',
        description: 'A vibrant city known for its technology, culture, and cuisine.',
        image: 'tokyo.jpeg',
        url: 'https://www.gotokyo.org/en/'
      },
      {
        id: 4,
        name: 'Sydney',
        country: 'Australia',
        description: 'Famous for its beautiful harbor, the Sydney Opera House, and beaches.',
        image: 'sydney.jpeg',
        url: 'https://www.sydney.com/'
      },
      // Add more destinations here
    ];
  
    searchButton.addEventListener('click', () => {
      const query = searchInput.value.trim().toLowerCase();
      if (query) {
        displayDestinations(destinations.filter(destination => 
          destination.name.toLowerCase().includes(query) ||
          destination.country.toLowerCase().includes(query)
        ));
      }
    });
  
    function displayDestinations(filteredDestinations) {
      destinationList.innerHTML = ''; // Clear previous results
      if (filteredDestinations.length === 0) {
        destinationList.innerHTML = '<p>No destinations found.</p>';
        return;
      }
      filteredDestinations.forEach(destination => {
        const destinationCard = document.createElement('div');
        destinationCard.className = 'destination-card';
        destinationCard.innerHTML = `
          <img src="${destination.image}" alt="${destination.name}">
          <h3>${destination.name}</h3>
          <p>${destination.description}</p>
          <a href="${destination.url}" target="_blank">Learn More</a>
        `;
        destinationList.appendChild(destinationCard);
      });
    }
  });
  