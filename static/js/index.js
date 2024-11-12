window.HELP_IMPROVE_VIDEOJS = false;

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Bulma Carousel for the #Noises carousel
  const carousels = bulmaCarousel.attach('#Noises', {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
