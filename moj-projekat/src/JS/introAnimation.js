// animation.js
import gsap from "gsap";  // Uveri se da imaš GSAP instaliran (npm install gsap)
import imagesLoaded from 'imagesloaded';

import { letterAnimations } from '../JS/letterScrollAnimation'; 
import { initSlideshow } from '../JS/slideShowInit';
import { animationScrool } from '../JS/galleryScrool';
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

// Kreiraj CustomEase
try {
  // Umesto cubic-bezier() koristi jednostavniji format sa tačkama
  CustomEase.create("customEase1", ".77, 0, .175, 1"); 
  CustomEase.create("customEase1", ".39, .575, .565, 1"); 
 
  






  console.log("Custom easing kreiran!");
} catch (error) {
  console.error("Greška pri kreiranju CustomEase:", error);
}


export const introAnimatioScreen = () => {
  const counter = document.querySelector('.loading-counter');
  const loadingScreen = document.querySelector('.loading-screen')
  let loadedImages = 0;
  let totalImages = 0;
  // Dodajemo slike iz različitih delova stranice
  const imagesToLoad = [
    ...document.querySelectorAll('.grid img'), 
    // ...document.querySelectorAll('.slides img'),  
    // ...document.querySelectorAll('.img-container img') 
  ];

  // totalImages = imagesToLoad.length;
  
  // const onImageLoad = () => {
  //   loadedImages += 1;
  //   const percentage = Math.floor((loadedImages / totalImages) * 100);
  //   counter.innerText = `${percentage}%`; // Ažuriraj brojčanik

  //   console.log(`Slika ${loadedImages} od ${totalImages} učitana.`);

  //   if (loadedImages === totalImages) {
  //     // Animacija nestajanja brojača
  //     gsap.to(counter, {
  //       opacity: 0,
  //       duration: 1,
  //       onComplete: () => {
  //         counter.style.display = 'none'; // Sakrij brojač
  //         runAnimations(); // Pokreni glavnu animaciju
  //       },
  //     });
  //   }
  // };
// Funkcija za učitavanje slika
const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
    // Koristimo imagesLoaded za specifične slike
    imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
  });
};

// Preload images and initialize animations after the images have loaded
preloadImages('.grid img').then(() => {
   disableScroll()
  runAnimations()
   
  scrollToTop()
  window.scrollTo(0, 0); 
});


  // Zatvori scroll dok traje animacija
  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  };

  // Omogući scroll kad animacija završi
  const enableScroll = () => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  };

  // Vrati se na vrh stranice
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

 

  // Postavi početne vrednosti za animacije
  
    const s = document.querySelector('.treci');
    const center = document.querySelectorAll('.c');
    const firstCol = document.querySelectorAll('.one');
    const secondCol = document.querySelectorAll('.two');
    const thirdCol = document.querySelectorAll('.t');
    const fourCol = document.querySelectorAll('.five');
    const ssImage = document.querySelector('.img-container.ss img');

    gsap.set(center, { y: '400%' });
    gsap.set(firstCol, { y: '470%' });
    gsap.set(secondCol, { y: '-470%' });
    gsap.set(thirdCol, { y: '-470%' });
    gsap.set(fourCol, { y: '470%' });
    gsap.set(s, { y: '50' });
    gsap.set(ssImage, { scale: 3 });
  

  // Animacija svih elemenata
  const animateAll = () => {
    const s = document.querySelector('.treci');
    const center = document.querySelectorAll('.c');
    const firstCol = document.querySelectorAll('.one');
    const secondCol = document.querySelectorAll('.two');
    const thirdCol = document.querySelectorAll('.t');
    const fourCol = document.querySelectorAll('.five');

    const tl = gsap.timeline();

    // Prva animacija: pomeri element `s`
    tl.to(s, { y: '-1', x: '0', duration: 1 });

    // Druga animacija: pomeri sve ostale elemente
    tl.to(center, {
      y: '-57.7%',
      duration: 1,
      stagger: 0.3,
      ease: "customEase1"
    })
      .to(firstCol, { y: '-58.5%', duration: 1, stagger: 0.2, ease: "customEase1" }, '<')
      .to(secondCol, { y: 0, duration: 1, stagger: 0.2, ease: "customEase1" }, '<')
      .to(thirdCol, { y: 0, duration: 1, stagger: 0.2, ease: "customEase1" }, '<')
      .to(fourCol, { y: '-58.5%', duration: 1, stagger: 0.2,  ease: "customEase1" }, '<');

    return tl;
  };

  // Animacija skaliranja
  const animateScaling = () => {
    const screen = document.querySelector('.grid');
    

    const ssImage = document.querySelector('.img-container.ss img');
    const ssContainer = document.querySelector('.img-container.ss');
    // const backgroundImage = ssContainer.querySelector('img');
    const backgroundImgElement = document.querySelector('.beckGroundImage')
    
    if (!backgroundImgElement) {
      console.error('Pozadinska slika nije pronađena!');
      return;
    }

    ssContainer.style.height = '100vh';
    const positionInfo = ssContainer.getBoundingClientRect();
    const containerAspectRatio = positionInfo.width / positionInfo.height;
    const windowAspectRatio = window.innerWidth / window.innerHeight;

    let scalingFactor;
    if (windowAspectRatio > containerAspectRatio) {
      scalingFactor = window.innerHeight / positionInfo.height;
    } else {
      scalingFactor = window.innerWidth / positionInfo.width;
    }

    ssContainer.style.width = `${window.innerWidth / scalingFactor}px`;

    // Definišite custom easing koristeći cubic-bezier vrednosti


    const tl = gsap.timeline();

    tl.to(screen, {
      scale: scalingFactor,
      duration: 5,
       ease: "customEase2"

    })
      .to([ssImage, backgroundImgElement], {
        scale: 1,
        duration: 5,
        ease: "customEase2",
        onComplete: () => {
          gsap.to(ssContainer, {
            onComplete: () => {
                loadingScreen.style.display = 'none' 
              enableScroll(); // Omogući scroll
            },
          });
        },
      },'-=5' );

    return tl;
  };

  // Pokreni sve animacije
  const runAnimations = () => {
    const masterTimeline = gsap.timeline();
    masterTimeline.add(animateAll());
    masterTimeline.add(animateScaling(), '-=2');

     
  masterTimeline.add(() => {
    // Ovdje se pozivaju tvoje tri animacije tačno kad su prethodne završile
    console.log("Sve animacije su završene! Pokrećemo dodatne animacije...");
    
    letterAnimations();  // Animacija za slova
    initSlideshow();     // Animacija za slideshow
    animationScrool();   // Animacija za galeriju
  });
  };

};

