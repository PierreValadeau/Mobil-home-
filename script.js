document.addEventListener('DOMContentLoaded', () => {
  const reservationSection = document.querySelector('.reservation');
  const footer = document.querySelector('footer');

  if (!reservationSection || !footer) {
    console.error('Section réservation ou footer introuvable.');
    return;
  }

  // Fonction pour vérifier si un élément est visible dans le viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Gérer les animations des sections
  function animateSections() {
    const sections = document.querySelectorAll('.row'); // Cible chaque ligne
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add('visible'); // Ajoute la classe quand visible
      } else {
        section.classList.remove('visible'); // Retire la classe quand invisible
      }
    });
  }

  // Gérer la position de la section réservation
  function handleReservationPosition() {
    const footerRect = footer.getBoundingClientRect();

    if (footerRect.top <= window.innerHeight) {
      // Si le footer est visible, position absolue juste au-dessus
      reservationSection.style.position = 'absolute';
      reservationSection.style.bottom = `${window.innerHeight - footerRect.top}px`;
    } else {
      // Sinon, fixe en bas de l'écran
      reservationSection.style.position = 'fixed';
      reservationSection.style.bottom = '0';
    }
  }

  // Combiner les deux logiques dans un seul gestionnaire de scroll
  function handleScroll() {
    animateSections(); // Gère les animations
    handleReservationPosition(); // Gère la section réservation
  }

  // Ajouter un écouteur pour le scroll
  window.addEventListener('scroll', handleScroll);

  // Appeler les fonctions au chargement pour gérer l'état initial
  handleScroll();
});
