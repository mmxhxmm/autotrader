import "./styles.css";

import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();

import AOS from "aos";
import "aos/dist/aos.css";

import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

// AOS (scroll animations)
AOS.init({ once: true, duration: 700, offset: 80 });

// Swiper modules
Swiper.use([Autoplay, Pagination]);

// Hero slider
new Swiper(".heroSwiper", {
  loop: true,
  autoplay: { delay: 3500, disableOnInteraction: false },
  pagination: { el: ".hero-pagination", clickable: true }
});

// Testimonials slider
new Swiper(".testimonialsSwiper", {
  loop: true,
  spaceBetween: 16,
  autoplay: { delay: 3500, disableOnInteraction: false },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 }
  }
});


new Swiper(".brandsSwiper", {
  loop: true,
  speed: 4500,
  autoplay: { delay: 0, disableOnInteraction: false },
  spaceBetween: 14,
  slidesPerView: 2.2,
  breakpoints: {
    640: { slidesPerView: 3.2, spaceBetween: 16 },
    1024: { slidesPerView: 5.2, spaceBetween: 18 }
  }
});

// Lightbox
GLightbox({ selector: ".glightbox" });

// Leaflet map (replace coords with real ones)
const mapEl = document.getElementById("map");
if (mapEl) {
  const lat = 45.6700; // TODO: set real latitude
  const lng = 9.9400;  // TODO: set real longitude

  const map = L.map("map").setView([lat, lng], 14);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  L.marker([lat, lng]).addTo(map).bindPopup("Autotrader Bergámo");
}


