// import './style.css'
import '../src/scss/style.scss';
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


// import { setupHoverAnimation,  onMouseEnter, onMouseLeave } from './JS/HoverSVG/hover1';
// import { setupHoverAnimation2,  onMouseEnter2, onMouseLeave2 } from './JS/HoverSVG/hover2'; 
// import { setupHoverAnimation3, onMouseEnter3, onMouseLeave3 } from './JS/HoverSVG/hover3';
// import { setupHoverAnimation4,  onMouseEnter4, onMouseLeave4 } from './JS/HoverSVG/hover4'; 
import { setupAllHoverAnimations } from './JS/HoverSVG/initAllAnimations'; 
import { initBarba } from '../src/JS/barba';
import { MenuAnimations } from './JS/menu'; // Uvezi MenuAnimations
import { initSlideshow } from '../src/JS/slideShowInit';


import gsap from "gsap";


MenuAnimations()

setupAllHoverAnimations()

// const gridItem1 = document.getElementById('gridItem1');
// const textElement1 = document.getElementById('textElement1');
// const gridItem2 = document.getElementById('gridItem2');
// const textElement2 = document.getElementById('textElement2');
// const gridItem3 = document.getElementById('gridItem3');
// const textElement3 = document.getElementById('textElement3');
// const gridItem4 = document.getElementById('gridItem4');
// const textElement4 = document.getElementById('textElement4');


// // Funkcija koja uklanja event listenere
// const removeHoverListeners = () => {
//   gridItem1.removeEventListener('mouseenter', onMouseEnter);
//   gridItem1.removeEventListener('mouseleave', onMouseLeave);
//   gridItem2.removeEventListener('mouseenter', onMouseEnter2);
//   gridItem2.removeEventListener('mouseleave', onMouseLeave2);
//   gridItem3.removeEventListener('mouseenter', onMouseEnter3);
//   gridItem3.removeEventListener('mouseleave', onMouseLeave3);
//   gridItem4.removeEventListener('mouseenter', onMouseEnter4);
//   gridItem4.removeEventListener('mouseleave', onMouseLeave4);

// };

// // Funkcija koja proverava veličinu ekrana i omogućava/uklanja event listenere
// const handleResize = () => {
//   const isSmallScreen = window.innerWidth < 500;

//   if (isSmallScreen) {
//     // Ako je ekran manji od 500px, uklanjamo event listenere za hover
//     removeHoverListeners();
//     console.log('Ekran je manji od 500px - Animacije su onemogućene');
//   } else {
//     // Ako je ekran veći od 500px, omogućavamo hover animacije
//     setupHoverAnimation('goo-2', textElement1, gridItem1);
//     console.log('Ekran je veći od 500px - Animacije su omogućene');
//     setupHoverAnimation2('goo-3',textElement2, gridItem2)
//     setupHoverAnimation3('goo-4',textElement3, gridItem3)
//     setupHoverAnimation4('goo-5',textElement4, gridItem4)
//   }
// };

// // Pozivamo funkciju odmah prilikom učitavanja stranice
// handleResize();

// // Dodajemo event listener za promene veličine ekrana
// window.addEventListener('resize', handleResize);




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

