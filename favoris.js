document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('favoritesContainer');
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  function renderFavorites() {
    container.innerHTML = '';

    if (favorites.length === 0) {
      container.innerHTML = '<p style="text-align:center; color:#aaa; font-style: italic;">Aucun favori ajouté pour le moment.</p>';
      return;
    }

    favorites.forEach((fav, index) => {
      // Si tu as juste l'URL, fav est une string (image),
      // sinon fav pourrait être un objet {image, titre, auteur}
      const imageSrc = typeof fav === 'string' ? fav : fav.image || '';
      const titre = (typeof fav === 'object' && fav.titre) ? fav.titre : 'Favori';
      const auteur = (typeof fav === 'object' && fav.auteur) ? fav.auteur : '';

      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <img src="${imageSrc}" alt="Couverture de ${titre}" />
        <h2>${titre}</h2>
        ${auteur ? `<p>${auteur}</p>` : ''}
        <button class="remove-fav" aria-label="Supprimer ${titre}" data-index="${index}">Supprimer</button>
      `;

      container.appendChild(card);
    });
  }

  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-fav')) {
      const index = e.target.dataset.index;
      favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      renderFavorites();
    }
  });

  renderFavorites();
});
