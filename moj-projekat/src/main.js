// import './style.css'
import '../src/scss/style.scss';

import { setupAllHoverAnimations } from './JS/HoverSVG/initAllAnimations'; 
import { initBarba } from '../src/JS/barba';
import { MenuAnimations } from './JS/menu';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; 
import Lenis from "@studio-freight/lenis"; 
import SplitType from 'split-type';
import { animationScrool } from './JS/galleryScrool';
import emailjs from 'emailjs-com';

// Registrujte ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


let lenis;

// Function to initialize Lenis for smooth scrolling
const initSmoothScrolling = () => {
	// Instantiate the Lenis object with specified properties
	lenis = new Lenis({
		lerp: 0.1, // Lower values create a smoother scroll effect
		smoothWheel: true // Enables smooth scrolling for mouse wheel events
	});

	// Update ScrollTrigger each time the user scrolls
	lenis.on('scroll', () => ScrollTrigger.update());

	// Define a function to run at each animation frame
	const scrollFn = (time) => {
		lenis.raf(time); // Run Lenis' requestAnimationFrame method
		requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
	};
	// Start the animation frame loop
	requestAnimationFrame(scrollFn);
};

MenuAnimations()
initSmoothScrolling()
// setupAllHoverAnimations()

const animateWords = el => {
    
  // from: https://www.npmjs.com/package/split-type#splitting-text 
  // Important: The following style should be applied to all target elements. This prevents the characters from shifting slightly when text is split/reverted.
  gsap.set(el, {'font-kerning': 'none'});

  // Apply SplitType
  const st = new SplitType(el, { types: 'lines, words' });
  const lines = st.lines;

  const tl = gsap.timeline({
      scrollTrigger: {
          trigger: el,
          start: 'center center',
          end: '+=300%',
          scrub: true,
          pin: el
      }
  })
  .set(el, {perspective: 1000});

  for (const [linepos,line] of lines.entries()) {
      
      gsap.set(line, {transformStyle: 'preserve-3d'});

      const words = line.querySelectorAll('.word');
      
      tl
      .to(words, {
          ease: 'back.inOut',
          opacity: 0,
          rotationY: (pos,_,arr) => pos > arr.length/2 ? Math.abs(pos-arr.length/2)*-15 : Math.abs(pos-arr.length/2)*15,
          z: () => gsap.utils.random(-1000,-500),
          stagger: {
              each: 0.02,
              from: 'center'
          }
          
      }, linepos*.05);

  }
  
};

// GSAP Scroll Triggers
const scroll = () => {
  [...document.querySelectorAll('[data-split]')].forEach(el => {
      animateWords(el)
  });
};

scroll()

document.addEventListener('DOMContentLoaded', function () {
  const budgetButtons = document.querySelectorAll('.footer__price-button');
  let selectedBudget = ''; // Ovdje ćemo sačuvati izabrani budžet

  // Dodavanje event listenera za dugmadi
  budgetButtons.forEach(button => {
      button.addEventListener('click', function () {
          // Uklanjanje aktivnog stila sa svih dugmadi
          budgetButtons.forEach(btn => btn.classList.remove('selected'));

          // Dodavanje aktivnog stila na kliknutu dugme
          button.classList.add('selected');
          selectedBudget = button.getAttribute('data-price'); // Preuzimamo podatke o budžetu
         
          
      });
  });

// Funkcija za zatvaranje poruke
function closeSuccessMessage() {
  document.getElementById('successMessage').style.display = 'none';
}

  // Kada se submituje forma
  document.querySelector('#footerForm').addEventListener('submit', function (event) {
      event.preventDefault();  // Sprečavamo da stranica bude osvežena

      const form = this; // 'this' predstavlja formu

      // Dodajemo odabrani budžet u formu pre slanja
      const budgetInput = document.createElement('input');
      budgetInput.type = 'hidden';
      budgetInput.name = 'budget';
      budgetInput.value = selectedBudget;
      form.appendChild(budgetInput);

      // Slanje podataka putem EmailJS
      emailjs.sendForm('service_t9nfmkq', 'template_j21502l', form, 'hhCGMxWdpzOwXjwEv')
          .then(function (response) {
              console.log('Success:', response);
             

              document.getElementById('successMessage').style.display = 'block';
            form.reset();

            // Poništavamo selektovani budžet
            selectedBudget = '';
          }, function (error) {
              console.log('Error:', error);
             
          });
  });
//   // Dodavanje event listenera za dugme "Zatvori"
document.getElementById('closeButton').addEventListener('click', closeSuccessMessage);
});



const buttonss = document.querySelector('.footer__submit-button');


  const filler = document.querySelector('.footer__button-filler');
  const textInner = document.querySelector('.footer__button-text-inner');

  buttonss.addEventListener('mouseenter', () => {
    // Filler animation
    
    buttonss.classList.add('button--hover');
    // Dodavanje klase active na body
    document.body.classList.add('active');
    


   const tl = gsap.timeline()
    tl.to(filler, {
      duration: 0.5,
      startAt: { y: '75%' }, // Početna pozicija na ulazu
      y: '0%',
      ease: 'Power3.easeOut'
    });

    // Text animation
    tl.to(textInner, {
      duration: 0.1,
      opacity: 0,
      startAt: { y: '30%', opacity: 1 },
      y: '-10%',
      ease: 'Power3.easeOut'
    }, 0);

    tl.to(textInner, {
      duration: 0.25,
      opacity: 1,
      y: '0%',
      ease: 'Power3.easeOut',
      delay: 0.1
    }, 0,1);
  });

  buttonss.addEventListener('mouseleave', () => {

    buttonss.classList.remove('button--hover');
    // Uklanjanje klase active sa body
    document.body.classList.remove('active');
    const tl = gsap.timeline()
    // Filler animation reverse
    tl.to(filler, {
      duration: 0.4,
      y: '-75%',
      ease: 'Power3.easeOut'
    });

    // Text animation reverse
    tl.to(textInner, {
      duration: 0.1,
      opacity: 0,
      y: '10%',
      ease: 'Power3.easeOut'
    }, 0);

    tl.to(textInner, {
      duration: 0.25,
      opacity: 1,
      startAt: { y: '-30%', opacity: 1 }, 
      y: '0%',
      ease: 'Power3.easeOut',
      delay: 0.1
    }, 0.1);
  });





document.addEventListener('DOMContentLoaded', () => { 
 
  initBarba() 
  animationScrool()
} )

