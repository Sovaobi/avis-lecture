const books = [
  { title: "Spark of the Everflame", author: "Penn Cole", cover: "Images/sparkoftheeverflame.png", excerpt: "Une flamme ancienne renaît dans le cœur d'une héroïne inattendue…", full: "Un voyage initiatique haletant mêlant magie du feu et intrigues de cour." },
  { title: "Glow of the Everflame", author: "Penn Cole", cover: "Images/glowoftheeverflame.jpg", excerpt: "Les braises se ravivent…", full: "Suite plus intense, explorant conséquences du pouvoir et loyautés changeantes." },
  { title: "Anatomy: A Love Story", author: "Dana Schwartz", cover: "Images/anatomy.jpg", excerpt: "Entre scalpel et secrets…", full: "Gothique romantique mêlant médecine et mystère en Écosse." },
  { title: "La tour des immortels", author: "?", cover: "Images/latour.jpg", excerpt: "Un escalier sans fin vers le pouvoir…", full: "Fresque sombre à la frontière de la légende." },
  { title: "Une braise sous la cendre", author: "Sabaa Tahir", cover: "Images/unebraise.jpg", excerpt: "La rébellion brûle sous la cendre…", full: "Dystopie épique et poignante." },
  { title: "Le pont des tempêtes", author: "?", cover: "Images/lepont1.jpg", excerpt: "Traverse ou tombe…", full: "Fantasy haletante dans un monde balayé par la magie." },
  { title: "Peau d'âme", author: "?", cover: "Images/plume.webp", excerpt: "Et si ton corps n'était qu'une enveloppe ?", full: "Roman introspectif sur identité et transformation." },
  { title: "Le roi maléfique", author: "Holly Black", cover: "Images/roimaléfique.jpg", excerpt: "Le pouvoir corrompt…", full: "Suite ténébreuse à 'Le prince cruel'." },
  { title: "La Reine Traîtresse", author: "?", cover: "Images/lareinetraitresse.jpg", excerpt: "Quand le trône devient un piège…", full: "Trahison, vengeance et magie de cour." },
  { title: "Gild", author: "Raven Kennedy", cover: "Images/gild.jpg", excerpt: "Un palais doré peut devenir une cage.", full: "Revisite sombre du mythe de Midas." },
  { title: "Defy Me", author: "Tahereh Mafi", cover: "Images/defyme.jpg", excerpt: "Les vérités éclatent…", full: "Tome intense de Shatter Me." },
  { title: "Ignite Me", author: "Tahereh Mafi", cover: "Images/igniteme.jpg", excerpt: "La rage comme feu…", full: "Juliette embrasse sa puissance." },
  { title: "Imagine Me", author: "Tahereh Mafi", cover: "Images/imagineme.jpg", excerpt: "Rêver ou régner…", full: "Dernier tome électrique et déchirant." },
  { title: "Restore Me", author: "Tahereh Mafi", cover: "Images/restoreme.jpg", excerpt: "Rebâtir un monde…", full: "Virage politique de la saga." },
  { title: "Shatter Me", author: "Tahereh Mafi", cover: "Images/shatterme.jpg", excerpt: "Son toucher est mortel.", full: "Poétique, déchirant, addictif." },
  { title: "Unravel Me", author: "Tahereh Mafi", cover: "Images/unravelme.webp", excerpt: "L’effondrement, la vérité…", full: "Tome 2 intense et sentimental." },
  { title: "Watch Me", author: "?", cover: "Images/watchme.jpg", excerpt: "Ils la regardent. Elle agit.", full: "Thriller psychologique haletant." },
];

// Normalisation pour éviter doublons
function normalize(str) {
  return str.toLowerCase().trim();
}

function bookPageUrl(title) {
  return title.toLowerCase().replace(/[\s’']/g, "-") + ".html";
}

// Fonction pour afficher une notification temporaire
function showNotification(msg, duration = 2000) {
  const notif = document.createElement('div');
  notif.textContent = msg;
  notif.style.position = 'fixed';
  notif.style.bottom = '1rem';
  notif.style.left = '50%';
  notif.style.transform = 'translateX(-50%)';
  notif.style.background = '#d7ccb5';
  notif.style.color = '#12121e';
  notif.style.padding = '0.8rem 1.5rem';
  notif.style.borderRadius = '6px';
  notif.style.fontWeight = 'bold';
  notif.style.zIndex = '1000';
  notif.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
  document.body.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, duration);
}

function addToFavorites() {
  const coverImg = document.getElementById('mainCover');
  const titleElem = document.querySelector('.review-text h1');
  const authorElem = document.querySelector('.author');

  if (!coverImg || !titleElem || !authorElem) {
    showNotification("Données du livre incomplètes.");
    return;
  }

  const book = {
    title: titleElem.textContent.trim(),
    author: authorElem.textContent.trim(),
    cover: coverImg.src,
    url: window.location.pathname
  };

  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const isDuplicate = favorites.some(fav => normalize(fav.title) === normalize(book.title));

  if (isDuplicate) {
    showNotification("Ce livre est déjà dans vos favoris.");
    return;
  }

  favorites.push(book);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  showNotification("Livre ajouté aux favoris !");
}

window.addEventListener('DOMContentLoaded', () => {
  // Construction carrousel (hors Spark of the Everflame)
  const carousel = document.getElementById("carousel");
  if (carousel) {
    books
      .filter(book => book.title !== "Spark of the Everflame")
      .forEach(book => {
        const div = document.createElement("div");
        div.className = "thumb";
        const url = bookPageUrl(book.title);
        div.innerHTML = `<a href="${url}"><img src="${book.cover}" alt="${book.title}" title="${book.title}"></a>`;
        carousel.appendChild(div);
      });
  }

  // Bouton ajouter aux favoris
  const btnAdd = document.getElementById('btnAddFavoris');
  if (btnAdd) {
    btnAdd.addEventListener('click', addToFavorites);
  }

  // Bouton favoris sidebar
  const btnFavorisSidebar = document.getElementById('btnFavoris');
  if (btnFavorisSidebar) {
    btnFavorisSidebar.addEventListener('click', () => {
      window.location.href = 'favoris.html';
    });
  }

  // Modal contact
  const contactBtn = document.querySelector('.contact-btn');
  const contactModal = document.querySelector('.contact-modal');
  const closeBtn = contactModal?.querySelector('.close-btn');

  if (contactBtn && contactModal && closeBtn) {
    contactBtn.addEventListener('click', () => {
      contactModal.classList.add('show');
      contactModal.setAttribute('aria-hidden', 'false');
    });

    closeBtn.addEventListener('click', () => {
      contactModal.classList.remove('show');
      contactModal.setAttribute('aria-hidden', 'true');
    });

    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove('show');
        contactModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Bouton retour
  const backButton = document.querySelector(".back-btn");
  if (backButton) {
    backButton.addEventListener("click", () => {
      window.history.back();
    });
  }
});

document.querySelector('.contact-btn')?.addEventListener('click', () => {
  document.querySelector('.contact-modal')?.classList.add('open');
});
document.querySelector('.contact-modal .close-btn')?.addEventListener('click', () => {
  document.querySelector('.contact-modal')?.classList.remove('open');
});


// Données fictives des avis récents
const fakeReviews = [
  {
    title: "Un voyage incroyable",
    author: "Alice Dupont",
    content: "Ce livre m’a transportée du début à la fin. Une intrigue bien ficelée et des personnages attachants."
  },
  {
    title: "À lire absolument",
    author: "Marc Lefèvre",
    content: "Une histoire passionnante qui mêle mystère et émotions. Je recommande chaudement !"
  }
];

// Fonction pour créer un élément avis HTML
function createReviewElement(review) {
  const div = document.createElement('div');
  div.classList.add('review-item');
  div.innerHTML = `
    <h3>${review.title}</h3>
    <p><em>par ${review.author}</em></p>
    <p>${review.content}</p>
  `;
  return div;
}

const btnToggleReviews = document.getElementById('btnShowMore');
let reviewsVisible = false;

btnToggleReviews.addEventListener('click', function () {
  const container = document.getElementById('reviews-list');

  if (!reviewsVisible) {
    // Ajouter les avis
    fakeReviews.forEach(review => {
      const reviewEl = createReviewElement(review);
      reviewEl.classList.add('fake-review'); // pour pouvoir les supprimer ensuite
      container.appendChild(reviewEl);
    });
    this.textContent = 'Afficher moins';
    reviewsVisible = true;
  } else {
    // Supprimer les avis fictifs
    const addedReviews = container.querySelectorAll('.fake-review');
    addedReviews.forEach(el => el.remove());
    this.textContent = 'Afficher plus';
    reviewsVisible = false;
  }
});


const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

books
  .filter(book => book.title !== "Spark of the Everflame")
  .forEach((book, i) => {
    const div = document.createElement("div");
    div.className = "thumb";
    const url = bookPageUrl(book.title);
    div.innerHTML = `<a href="${url}"><img src="${book.cover}" alt="${book.title}" title="${book.title}"></a>`;
    carousel.appendChild(div);

    // Déclenche l'animation d'apparition avec un léger délai par item
    setTimeout(() => {
      div.classList.add("visible");
    }, 100 * i);
  });
