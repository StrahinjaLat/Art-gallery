import { Slideshow } from './slideShow';  // Importuj Slideshow klasu

// Funkcija za inicijalizaciju slajdera
// export function initSlideshow() {
//   // Proveri da li je DOM element sa slajdovima zaista prisutan
//   const slidesElement = document.querySelector('.slides-gal');
 

//   // Kreiraj instancu Slideshow klase
//   const slideshow = new Slideshow(slidesElement);  

//   // Resetovanje slajdera na prvi slajd prilikom inicijalizacije
//   slideshow.current = 0;
//   slideshow.DOM.slides.forEach(slide => slide.classList.remove('slide--current'));
//   slideshow.DOM.slides[0].classList.add('slide--current');

//   // Poveži dugmadi za navigaciju
//   document.querySelector('.slides-nav__item--prev').addEventListener('click', () => slideshow.prev());
//   document.querySelector('.slides-nav__item--next').addEventListener('click', () => slideshow.next());
// }
export function initSlideshow() {

    const slides = document.querySelector('.slides');
    const slideshow = new Slideshow(slides);
    
    document.querySelector('.slides-nav__item--prev').addEventListener('click', () => slideshow.prev());
    document.querySelector('.slides-nav__item--next').addEventListener('click', () => slideshow.next());


}