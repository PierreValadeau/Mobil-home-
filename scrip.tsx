document.addEventListener('DOMContentLoaded', () => {
  // Vérifie si un élément est visible dans le viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Gère l'animation en ajoutant ou retirant la classe `visible`
  function handleScroll() {
    const sections = document.querySelectorAll('.row'); // Cible chaque ligne
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add('visible'); // Ajoute la classe quand visible
      } else {
        section.classList.remove('visible'); // Retire la classe quand invisible
      }
    });
  }

  // Ajoute un listener pour le scroll
  window.addEventListener('scroll', handleScroll);

  // Vérifie les éléments visibles au chargement initial
  handleScroll();
});
