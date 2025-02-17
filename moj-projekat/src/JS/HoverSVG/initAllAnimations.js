// allHoverAnimations.js (Nova funkcija za sve hover animacije)
import { setupHoverAnimation, onMouseEnter, onMouseLeave } from './hover1';
import { setupHoverAnimation2, onMouseEnter2, onMouseLeave2 } from './hover2'; 
import { setupHoverAnimation3, onMouseEnter3, onMouseLeave3 } from './hover3';
import { setupHoverAnimation4, onMouseEnter4, onMouseLeave4 } from './hover4';

export const setupAllHoverAnimations = () => {
  const gridItem1 = document.getElementById('gridItem1');
  const textElement1 = document.getElementById('textElement1');

  const gridItem2 = document.getElementById('gridItem2');
  const textElement2 = document.getElementById('textElement2');
  const gridItem3 = document.getElementById('gridItem3');
  const textElement3 = document.getElementById('textElement3');
  const gridItem4 = document.getElementById('gridItem4');
  const textElement4 = document.getElementById('textElement4');
 

  // Funkcija koja uklanja event listenere
  const removeHoverListeners = () => {
    gridItem1.removeEventListener('mouseenter', onMouseEnter);
    gridItem1.removeEventListener('mouseleave', onMouseLeave);
    gridItem2.removeEventListener('mouseenter', onMouseEnter2);
    gridItem2.removeEventListener('mouseleave', onMouseLeave2);
    gridItem3.removeEventListener('mouseenter', onMouseEnter3);
    gridItem3.removeEventListener('mouseleave', onMouseLeave3);
    gridItem4.removeEventListener('mouseenter', onMouseEnter4);
    gridItem4.removeEventListener('mouseleave', onMouseLeave4);
  };

  // Funkcija koja proverava veličinu ekrana i omogućava/uklanja event listenere
  const handleResize = () => {
    const isSmallScreen = window.innerWidth < 500;

    if (isSmallScreen) {
      // Ako je ekran manji od 500px, uklanjamo event listenere za hover
      removeHoverListeners();
    //   console.log('Ekran je manji od 500px - Animacije su onemogućene');
    } else {
      // Ako je ekran veći od 500px, omogućavamo hover animacije
      setupHoverAnimation('goo-2', textElement1, gridItem1);
    //   console.log('Ekran je veći od 500px - Animacije su omogućene');
      setupHoverAnimation2('goo-3', textElement2, gridItem2);
      setupHoverAnimation3('goo-4', textElement3, gridItem3);
      setupHoverAnimation4('goo-5', textElement4, gridItem4);
    }
  };

  // Pozivamo funkciju odmah prilikom učitavanja stranice
  handleResize();

  // Dodajemo event listener za promene veličine ekrana
  window.addEventListener('resize', handleResize);
};