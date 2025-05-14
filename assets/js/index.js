(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // Initialize slider using Glider.js library
    if (typeof Glider !== 'undefined') {
      new Glider(document.querySelector('.glider'), {
        slidesToScroll: 1,
        draggable: true,
        dragVelocity: 2,
        scrollLock: true,
        duration: 1.0,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
      });
    }

    // Initialize accordion(s)
    const buttons = document.querySelectorAll('.accordion-button');
    const contents = document.querySelectorAll('.accordion-content');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        buttons.forEach((btn) => {
          btn.classList.remove('active');
          btn.setAttribute('aria-expanded', 'false');
        });
        contents.forEach((content) => content.classList.remove('active'));

        // Set clicked button and its corresponding content to active
        button.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
        const targetId = button.getAttribute('aria-controls');
        document.getElementById(targetId).classList.add('active');
      });
    });
  });

  // Calculate scrollbar width and update CSS variable
  function updateScrollbarWidth() {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty(
      '--scroll-bar-width',
      `${ scrollbarWidth }px`
    );
  }
  updateScrollbarWidth();
})()
