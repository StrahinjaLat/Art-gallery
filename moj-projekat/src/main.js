// import './style.css'
import '../src/scss/style.scss';
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'



import { initBarba } from '../src/JS/barba';
import { MenuAnimations } from './JS/menu'; // Uvezi MenuAnimations
import { initSlideshow } from '../src/JS/slideShowInit';

import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);
MenuAnimations()

document.addEventListener('DOMContentLoaded', () => { 
  initBarba() 
} )

// document.addEventListener('mousemove', (e) => { // Dodajte (e) kao parametar
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;

//   // Pozicija image-container-a: pozicioniraj kontjener tako da miš bude u centru
//   gsap.to(imageContainer, {
//     x: mouseX - imageContainer.offsetWidth / 2, // Centriraj miš u odnosu na kontejner
//     y: mouseY - imageContainer.offsetHeight / 2, // Centriraj miš u odnosu na kontejner
//     duration: 0.3,
//     ease: "power2.out"
//   });
// });


// const containerWidth = imageContainer.offsetWidth;
// const containerHeight = imageContainer.offsetHeight;

// document.addEventListener('mousemove', (e) => {
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;

//   // Računanje pozicije miša u odnosu na image-container
//   const containerRect = imageContainer.getBoundingClientRect();

//   const offsetX = mouseX - containerRect.left - containerWidth / 2;
//   const offsetY = mouseY - containerRect.top - containerHeight / 2;

//   // Pomeri image-container kako bi miš bio u centru
//   gsap.to(imageContainer, {
//     x: offsetX,
//     y: offsetY,
//     duration: 0.3,
//     ease: "power2.out"
//   });
// });










// projectItems.forEach((item, index) => {
//   item.addEventListener('mouseenter', () => {
//     // Pomeranje slika u kontejneru na odgovarajući index
//     gsap.to(imageContainer, {
//       opacity: 1, // Kontejner postaje vidljiv
//       duration: 0.3,
//       ease: "power2.out"
//     });
//     gsap.to(imageSlider, {
//       y: -index * 100 + "%", // Pomeri slike prema gore/dole
//       duration: 0.5,
//       ease: "power2.out"
//     });

//     // Aktiviranje odgovarajuće slike
//     imageSlides.forEach((slide, slideIndex) => {
//       const images = slide.querySelectorAll('img');
//       if (slideIndex === index) {
//         images.forEach(img => img.classList.add('active'));
//       } else {
//         images.forEach(img => img.classList.add('inactive'));
//       }
//     });
//   });

//   item.addEventListener('mouseleave', () => {
//     // Vratiti sve slike u početnu poziciju
//     gsap.to(imageSlider, {
//       y: 0, // Svi će se vratiti na početnu poziciju (prva slika u centru)
//       duration: 0.5,
//       ease: "power2.out"
//     });

//     // Resetovanje slika
//     imageSlides.forEach((slide) => {
//       const images = slide.querySelectorAll('img');
//       images.forEach(img => {
//         img.classList.remove('active', 'inactive');
//         img.classList.add('inactive');
//       });
//     });

//       // Sakrij kontejner sa slikama kada nema hovera
//       gsap.to(imageContainer, {
//         opacity: 0, // Kontejner postaje nevidljiv
//         duration: 0.3,
//         ease: "power2.out"
//       });
//   });
// });



// const imageContainer = document.querySelector('.image-container');
// const imageSlider = document.querySelector('.image-slider');
// const imageSlides = document.querySelectorAll('.image-slide');
// const projectItems = document.querySelectorAll('.project-item');
// const mobileProjects = document.querySelector('.mobile-projects');

// // Funkcija za prilagođavanje za mobilne uređaje
// function adjustForMobile() {
//   const isMobile = window.innerWidth <= 768; // Prebacite broj na odgovarajući za vašu ciljanu širinu ekrana

//   if (isMobile) {
//     // Na mobilnim uređajima isključujemo animacije
//     gsap.globalTimeline.clear();  // Očistiti sve animacije

//     // Sakrijemo elemente koji nisu potrebni na mobilnim uređajima
//     document.querySelector('.Projects').style.display = 'none';

//     if (imageContainer) {
//       imageContainer.style.display = 'none';  // Sakrijemo imageContainer
//     }

//     if (mobileProjects) {
//       mobileProjects.style.display = 'block'; // Prikazujemo mobilne projekte
//     }

//     // Uklanjanje event listenera na mobilnim uređajima (onemogućavamo hover)
//     projectItems.forEach(item => {
//       item.removeEventListener('mouseenter', handleMouseEnter);
//       item.removeEventListener('mouseleave', handleMouseLeave);
//     });

//   } else {
//     // Na desktop uređajima omogućavamo animacije i vraćamo normalni izgled
//     document.querySelector('.Projects').style.display = 'block';

//     if (mobileProjects) {
//       mobileProjects.style.display = 'none';  // Sakrijemo mobilne projekte
//     }

//     if (imageContainer) {
//       imageContainer.style.display = 'block';  // Prikazujemo imageContainer
//     }

//     // Ponovno dodajemo event listenere za desktop uređaje
//     projectItems.forEach(item => {
//       item.addEventListener('mouseenter', handleMouseEnter);
//       item.addEventListener('mouseleave', handleMouseLeave);
//     });
//   }
// }

// // Funkcija koja se poziva na hover (mouseenter)
// function handleMouseEnter(event) {
//   const index = [...projectItems].indexOf(event.currentTarget);
//   gsap.to(imageContainer, {
//     opacity: 1,
//     duration: 0.3,
//     ease: "power2.out"
//   });
//   gsap.to(imageSlider, {
//     y: -index * 100 + "%",
//     duration: 0.5,
//     ease: "power2.out"
//   });

//   // Aktiviranje odgovarajuće slike
//   imageSlides.forEach((slide, slideIndex) => {
//     const images = slide.querySelectorAll('img');
//     if (slideIndex === index) {
//       images.forEach(img => img.classList.add('active'));
//     } else {
//       images.forEach(img => img.classList.add('inactive'));
//     }
//   });
// }

// // Funkcija koja se poziva na izlaz sa hovera (mouseleave)
// function handleMouseLeave() {
//   gsap.to(imageSlider, {
//     y: 0,
//     duration: 0.5,
//     ease: "power2.out"
//   });

//   // Resetovanje slika
//   imageSlides.forEach((slide) => {
//     const images = slide.querySelectorAll('img');
//     images.forEach(img => {
//       img.classList.remove('active', 'inactive');
//       img.classList.add('inactive');
//     });
//   });

//   gsap.to(imageContainer, {
//     opacity: 0,
//     duration: 0.3,
//     ease: "power2.out"
//   });
// }

// // Pozivanje funkcije na učitavanju stranice i pri promeni veličine prozora
// document.addEventListener('DOMContentLoaded', () => {
//   adjustForMobile(); // Početna prilagodba
//   window.addEventListener('resize', adjustForMobile); // Pozivaj funkciju pri promeni veličine prozora
// });

// // Praćenje miša za animaciju kada nije mobilni uređaj
// document.addEventListener('mousemove', (e) => {
//   const isMobile = window.innerWidth <= 768;
  
//   if (!isMobile) {
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     const containerRect = imageContainer.getBoundingClientRect();
//     const offsetX = mouseX - containerRect.left - imageContainer.offsetWidth / 2;
//     const offsetY = mouseY - containerRect.top - imageContainer.offsetHeight / 2;

//     // Pomeri image-container tako da miš bude u centru
//     gsap.to(imageContainer, {
//       x: offsetX,
//       y: offsetY,
//       duration: 0.3,
//       ease: "power2.out"
//     });
//   }
// });

