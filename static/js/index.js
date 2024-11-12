window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})

document.addEventListener('DOMContentLoaded', () => {
	// Initialize Bulma Carousel for the #noise-carousel
	const carousels = bulmaCarousel.attach('#noise-carousel', {
	  slidesToScroll: 1,
	  slidesToShow: 1,
	  infinite: true,
	  autoplay: false,
	  autoplaySpeed: 5000,
	});
  
	const carousel = carousels[0];
  
	// Handle navigation arrows
	const prevButton = document.querySelector('.carousel-arrow-prev');
	const nextButton = document.querySelector('.carousel-arrow-next');
  
	if (prevButton && nextButton) {
	  prevButton.addEventListener('click', () => {
		carousel.prev();
	  });
  
	  nextButton.addEventListener('click', () => {
		carousel.next();
	  });
	}
  
	// Handle indicators
	const indicators = document.querySelectorAll('.carousel-indicators .indicator');
  
	indicators.forEach((indicator, index) => {
	  indicator.addEventListener('click', () => {
		carousel.goTo(index);
		setActiveIndicator(index);
	  });
	});
  
	// Update active indicator on slide change
	carousel.on('before:show', (state) => {
	  setActiveIndicator(state.currentSlide);
	});
  
	// Function to update active indicator
	function setActiveIndicator(activeIndex) {
	  indicators.forEach((indicator, index) => {
		if (index === activeIndex) {
		  indicator.classList.add('active');
		} else {
		  indicator.classList.remove('active');
		}
	  });
	}
  });
  
