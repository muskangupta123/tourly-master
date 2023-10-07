// script.js

document.addEventListener('DOMContentLoaded', function () {
  // Get the container where additional cards will be added
  const moreDestinationsContainer = document.getElementById('moreDestinationsContainer');

  // Function to create a new popular card
  function createPopularCard(imgSrc, country, title, text) {
      const card = document.createElement('div');
      card.className = 'popular-card';

      card.innerHTML = `
          <figure class="card-img">
              <img src="${imgSrc}" alt="${title}" loading="lazy">
          </figure>

          <div class="card-content">
              <div class="card-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
              </div>

              <p class="card-subtitle">
                  <a href="#">${country}</a>
              </p>

              <h3 class="h3 card-title">
                  <a href="#">${title}</a>
              </h3>

              <p class="card-text">
                  ${text}
              </p>
          </div>
      `;

      return card;
  }

  // Function to add a new popular card to the container
  function addPopularCard(container, cardData) {
      const { imgSrc, country, title, text } = cardData;
      const newCard = createPopularCard(imgSrc, country, title, text);
      container.appendChild(newCard);
  }

  // Dummy data for additional cards (replace with your data)
  const additionalCardsData = [
      {
          imgSrc: './assets/images/popular-4.jpg',
          country: 'Greece',
          title: 'Santorini',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      // Add more card data as needed
  ];

  // Add additional cards when the button is clicked
  const moreDestinationsButton = document.querySelector('.btn-primary');

  moreDestinationsButton.addEventListener('click', function () {
      additionalCardsData.forEach(cardData => {
          addPopularCard(moreDestinationsContainer, cardData);
      });

      // Optionally, you can hide or disable the button after clicking
      moreDestinationsButton.style.display = 'none';
  });
});
