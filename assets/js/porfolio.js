  // Initialize AOS
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Initialize main projects carousel
    const mainCarousel = new Swiper('.main-carousel', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.main-carousel .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.main-carousel .swiper-button-next',
        prevEl: '.main-carousel .swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    });

    // Initialize image carousels for each project
    const imageCarousels = document.querySelectorAll('.image-carousel');
    imageCarousels.forEach((carousel, index) => {
      new Swiper(carousel, {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: carousel.querySelector('.swiper-button-next'),
          prevEl: carousel.querySelector('.swiper-button-prev'),
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      });
    });

    // Scroll top functionality
    const scrollTop = document.querySelector('#scroll-top');
    
    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    }

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    if (scrollTop) {
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.navmenu');

    if (mobileNavToggle) {
      mobileNavToggle.addEventListener('click', function() {
        navMenu.classList.toggle('mobile-nav-active');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
      });
    }

    // Close mobile nav when clicking on a link
    document.querySelectorAll('.navmenu a').forEach(navLink => {
      navLink.addEventListener('click', () => {
        if (navMenu.classList.contains('mobile-nav-active')) {
          navMenu.classList.remove('mobile-nav-active');
          mobileNavToggle.classList.toggle('bi-list');
          mobileNavToggle.classList.toggle('bi-x');
        }
      });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Pause autoplay when hovering over carousel
    const mainCarouselElement = document.querySelector('.main-carousel');
    if (mainCarouselElement) {
      mainCarouselElement.addEventListener('mouseenter', () => {
        mainCarousel.autoplay.stop();
      });
      
      mainCarouselElement.addEventListener('mouseleave', () => {
        mainCarousel.autoplay.start();
      });
    }

    // Add loading animation
    window.addEventListener('load', function() {
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        preloader.remove();
      }
    });

    // Initialize GLightbox for project images
    const lightbox = GLightbox({
      selector: '.project-images img',
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
