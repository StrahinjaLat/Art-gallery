import Swiper from 'swiper';
import 'swiper/css'; 


export const SwiperHome = () => {

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',   // Prikazuje više slajdova sa automatskom širinom
        spaceBetween: 10,         // Razmak između slajdova
        grabCursor: true,         // Omogućava drag & drop funkcionalnost
        
        autoplay: {
          delay: 2500,            // Odlaže između slajdova (ako je potrebno)
          disableOnInteraction: false,  // Ne zaustavlja autoplay kad korisnik interaguje
        },
        speed: 1000,              // Brzina tranzicije
        freeMode: true,           // Omogućava slobodno pomeranje
        freeModeMomentum: false,  // Isključuje momentum (ne vraća slajdove)
        freeModeSticky: false,    // Isključuje lepljenje slajdova
        touchRatio: 1,            // Omogućava lakše pomeranje slajdova sa manje otpora
        simulateTouch: true,      // Omogućava bolje praćenje draga/miša
        on: {
          slideChange: function () {
            // Ovo može biti korisno ako želiš da se nešto desi kada se slajd promeni
          },
          slideDrag: function () {
            // Pratimo drag i animiramo pozadinu
            const slides = document.querySelectorAll('.swiper-slide');
            slides.forEach((slide, index) => {
              const offset = swiper.translate * 0.2; // Paralaks efekat (možeš povećati ili smanjiti ovu vrednost)
              // Postavljamo pozadinsku poziciju slajda u zavisnosti od pomeranja
              slide.style.backgroundPosition = `${offset}px center`;
            });
          }
        }
      });
}