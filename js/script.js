
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const overlay = document.getElementById('overlay');
const menuLeft = document.getElementById('menu-left');
const menuRight = document.getElementById('menu-right');
const header = document.getElementById('header');

// Changer la couleur du fond du header lors du scroll
// Fonction pour rétrécir le logo lors du scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = "#272829";
        header.classList.add('scrolled');
    } else {
        header.style.backgroundColor = "transparent";
        header.classList.remove('scrolled');
    }
});



// Ouvrir le menu mobile
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    overlay.classList.add('active');
});

// Fermer le menu mobile
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('active');
});

// Si on clique sur l'overlay => fermer aussi
overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('active');
});

const sideTab = document.getElementById('side-tab');

// Ouvrir/Fermer en cliquant sur le bandeau
sideTab.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêche de déclencher la fermeture
    sideTab.classList.toggle('open');
});

// Fermer si on clique ailleurs
document.addEventListener('click', (e) => {
    if (!sideTab.contains(e.target)) {
        sideTab.classList.remove('open');
    }
});

// Blocage du click droit et des copier cpoller
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
    }
  });
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 's' || e.key === 'u')) {
        e.preventDefault();
    }
});