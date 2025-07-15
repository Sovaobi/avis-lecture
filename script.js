const books = [
  { title: "Spark of the Everflame", author: "L. A. Buckley", cover: "images/sparkoftheeverflame.png", excerpt: "Une flamme ancienne renaît dans le cœur d'une héroïne inattendue…", full: "Un voyage initiatique haletant mêlant magie du feu et intrigues de cour." },
  { title: "Glow of the Everflame", author: "L. A. Buckley", cover: "images/glowoftheeverflame.jpg", excerpt: "Les braises se ravivent…", full: "Suite plus intense, explorant conséquences du pouvoir et loyautés changeantes." },
  { title: "Anatomy: A Love Story", author: "Dana Schwartz", cover: "images/anatomy.jpg", excerpt: "Entre scalpel et secrets…", full: "Gothique romantique mêlant médecine et mystère en Écosse." },
  { title: "La tour des immortels", author: "?", cover: "images/latour.jpg", excerpt: "Un escalier sans fin vers le pouvoir…", full: "Fresque sombre à la frontière de la légende." },
  { title: "Une braise sous la cendre", author: "Sabaa Tahir", cover: "images/unebraise.jpg", excerpt: "La rébellion brûle sous la cendre…", full: "Dystopie épique et poignante." },
  { title: "Le pont des tempêtes", author: "?", cover: "images/lepont1.jpg", excerpt: "Traverse ou tombe…", full: "Fantasy haletante dans un monde balayé par la magie." },
  { title: "Peau d'âme", author: "?", cover: "images/plume.webp", excerpt: "Et si ton corps n'était qu'une enveloppe ?", full: "Roman introspectif sur identité et transformation." },
  { title: "Le roi maléfique", author: "Holly Black", cover: "images/roimaléfique.jpg", excerpt: "Le pouvoir corrompt…", full: "Suite ténébreuse à 'Le prince cruel'." },
  { title: "La Reine Traîtresse", author: "?", cover: "images/lareinetraitresse.jpg", excerpt: "Quand le trône devient un piège…", full: "Trahison, vengeance et magie de cour." },
  { title: "Gild", author: "Raven Kennedy", cover: "images/gild.jpg", excerpt: "Un palais doré peut devenir une cage.", full: "Revisite sombre du mythe de Midas." },
  { title: "Defy Me", author: "Tahereh Mafi", cover: "images/defyme.jpg", excerpt: "Les vérités éclatent…", full: "Tome intense de Shatter Me." },
  { title: "Ignite Me", author: "Tahereh Mafi", cover: "images/igniteme.jpg", excerpt: "La rage comme feu…", full: "Juliette embrasse sa puissance." },
  { title: "Imagine Me", author: "Tahereh Mafi", cover: "images/imagineme.jpg", excerpt: "Rêver ou régner…", full: "Dernier tome électrique et déchirant." },
  { title: "Restore Me", author: "Tahereh Mafi", cover: "images/restoreme.jpg", excerpt: "Rebâtir un monde…", full: "Virage politique de la saga." },
  { title: "Shatter Me", author: "Tahereh Mafi", cover: "images/shatterme.jpg", excerpt: "Son toucher est mortel.", full: "Poétique, déchirant, addictif." },
  { title: "Unravel Me", author: "Tahereh Mafi", cover: "images/unravelme.webp", excerpt: "L’effondrement, la vérité…", full: "Tome 2 intense et sentimental." },
  { title: "Watch Me", author: "?", cover: "images/watchme.jpg", excerpt: "Ils la regardent. Elle agit.", full: "Thriller psychologique haletant." },
];

// Fonction pour créer des URLs “provisoires” basées sur le titre (tu peux ajuster)
function bookPageUrl(title) {
  return title.toLowerCase().replace(/[\s’']/g, "-") + ".html";
}

const carousel = document.getElementById("carousel");
const btnLireReview = document.querySelector(".btn-group .primary"); // Sélectionne ton bouton "Lire la review"

window.addEventListener('DOMContentLoaded', () => {
  // Construire carrousel en excluant "Spark of the Everflame"
  books
    .filter(book => book.title !== "Spark of the Everflame")
    .forEach(book => {
      const div = document.createElement("div");
      div.className = "thumb";
      const url = bookPageUrl(book.title); 
      div.innerHTML = `<a href="${url}"><img src="${book.cover}" alt="${book.title}" title="${book.title}"></a>`;
      carousel.appendChild(div);
    });

  // Clic sur bouton "Lire la review" = redirige vers reviewSOTE.html
  if (btnLireReview) {
    btnLireReview.addEventListener("click", () => {
      window.location.href = "reviewSOTE.html";
    });
  }
});

const backButton = document.getElementById("backButton");
if (backButton) {
  backButton.addEventListener("click", () => {
    window.history.back();
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.getElementById("backButton");
  if (backButton) {
    backButton.addEventListener("click", () => {
      window.history.back();
    });
  }
});

const contactBtn = document.querySelector('.contact-btn');
const contactModal = document.querySelector('.contact-modal');
const closeBtn = contactModal.querySelector('.close-btn');

// Ouvre le modal au clic sur le bouton
contactBtn.addEventListener('click', () => {
  contactModal.classList.add('show');
  contactModal.setAttribute('aria-hidden', 'false');
});

// Ferme le modal au clic sur la croix
closeBtn.addEventListener('click', () => {
  contactModal.classList.remove('show');
  contactModal.setAttribute('aria-hidden', 'true');
});

// Ferme le modal en cliquant en dehors du contenu
contactModal.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.classList.remove('show');
    contactModal.setAttribute('aria-hidden', 'true');
  }
});
