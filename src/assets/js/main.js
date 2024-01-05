"use strict";

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Grid } from 'swiper/modules';
Swiper.use([Pagination, Navigation, Autoplay, Grid]);

window.addEventListener('DOMContentLoaded', () => {

  const offersSwiper = new Swiper('.offers__slider', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.offers__pagination',
      clickable: true
    }
  });

  function overfillTabs() {
    let tabsContainer = document.querySelector('.tabs__container'),
        tabs = tabsContainer.querySelector('.tabs');

    if (tabs.offsetWidth > tabsContainer.offsetWidth) {
      tabs.classList.add('overfilled');
    } else {
      tabs.classList.remove('overfilled');
    }
  }

  window.addEventListener('load', overfillTabs);
  window.addEventListener('resize', overfillTabs);

  let tabs = document.querySelector('.tabs'),
      menuSliders = document.querySelectorAll('.menu__slider-block');

  tabs.addEventListener('click', function(e) {
    if (e.target.classList.contains('tabs__item')) {
      this.querySelectorAll('.tabs__item').forEach(item => item.classList.remove('active'));
      e.target.classList.add('active');

      menuSliders.forEach(slider => slider.classList.remove('show'));
      let tabIndex = e.target.dataset.tab,
          thisSwiper = document.querySelector(tabIndex);
      thisSwiper.classList.add('show');
    }
  });

  const menuSwiper = new Swiper('.menu__slider', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 55,
    grid: {
      fill: 'column',
      rows: 2
    },
    speed: 600,
    pagination: {
      el: '.menu__pagination',
      clickable: true
    }
  });

});