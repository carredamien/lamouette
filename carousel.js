document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let currentSlide = 0;

    // Fonction pour afficher une slide spécifique
    function showSlide(index) {
        // Cacher toutes les slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Afficher la slide demandée
        slides[index].classList.add('active');
    }

    // Gérer le clic sur le bouton "Suivant"
    nextBtn.addEventListener('click', function () {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0; // Revenir à la première slide
        }
        showSlide(currentSlide);
    });

    // Gérer le clic sur le bouton "Précédent"
    prevBtn.addEventListener('click', function () {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1; // Aller à la dernière slide
        }
        showSlide(currentSlide);
    });

    // Afficher la première slide au chargement de la page
    showSlide(currentSlide);
});