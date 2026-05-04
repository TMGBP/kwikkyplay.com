import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs"

import "./menu.js"
import "./accordion.js"

if (window.innerWidth < 768) {
   new Swiper(".swiper.offers-mobile", {
      loop: true,
      grabCursor: true,

      autoplay: {
         delay: 4000,
         disableOnInteraction: false,
      },

      slidesPerView: 1.1,
      slidesPerGroup: 1,
      spaceBetween: 16,

      speed: 355,
   })
}

new Swiper(".swiper.slot", {
   loop: true,
   grabCursor: true,

   navigation: {
      nextEl: ".slot-arrow.next",
      prevEl: ".slot-arrow.prev",
   },
   autoplay: {
      delay: 4000,
      disableOnInteraction: true,
   },

   slidesPerView: 2.15,
   slidesPerGroup: 1,
   spaceBetween: 15,

   speed: 355,
   breakpoints: {
      768: { spaceBetween: 20, slidesPerView: 2 },
      992: { slidesPerView: 4, slidesPerGroup: 2, spaceBetween: 32 },
   },
})

new Swiper(".swiper.live-dealer", {
   loop: true,
   grabCursor: true,

   navigation: {
      nextEl: ".live-dealer-arrow.next",
      prevEl: ".live-dealer-arrow.prev",
   },
   autoplay: {
      delay: 4000,
      disableOnInteraction: true,
   },

   slidesPerView: 2.15,
   slidesPerGroup: 1,
   spaceBetween: 15,

   speed: 355,
   breakpoints: {
      768: { spaceBetween: 20, slidesPerView: 2 },
      992: { slidesPerView: 4, slidesPerGroup: 2, spaceBetween: 32 },
   },
})

new Swiper(".swiper.providers", {
   loop: true,
   grabCursor: true,

   navigation: {
      nextEl: ".providers-arrow.next",
      prevEl: ".providers-arrow.prev",
   },
   autoplay: {
      delay: 4000,
      disableOnInteraction: true,
   },

   slidesPerView: 2.15,
   slidesPerGroup: 1,
   spaceBetween: 15,

   speed: 355,
   breakpoints: {
      768: { spaceBetween: 20, slidesPerView: 2 },
      992: { slidesPerView: 4, slidesPerGroup: 2, spaceBetween: 32 },
   },
})
