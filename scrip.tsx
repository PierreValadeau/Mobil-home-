// Script js 

// Fonction pour vérifier si un élément est visible 

function isInViewport(element){
  const rect = element.getBoundingClientRect();
  return(
    rect.top >= 0 && 
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight ) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


// Fonction pour gérer les animations au scroll
function handleScroll() {
  const elements = document.querySelectorAll('.animate');
  elements.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add('visible'); // Ajoute la classe pour déclencher l'animation
    }
  });
}

// Ajouter un listener pour le scroll
window.addEventListener('scroll', handleScroll);

// Appeler handleScroll une première fois pour les éléments déjà visibles
handleScroll();