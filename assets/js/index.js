(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    new Glider(document.querySelector('.glider'), {
      slidesToScroll: 1,
      slidesToShow: 1.7,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
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
