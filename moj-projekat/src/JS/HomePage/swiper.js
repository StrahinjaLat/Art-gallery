import Flickity from 'flickity';  
import 'flickity/dist/flickity.min.css';
  


 export const slider = () => {

    const carousel = document.querySelector('.carousel');
    const flkty = new Flickity(carousel, {
      imagesLoaded: true,
      percentPosition: false,
      prevNextButtons: false, // Onemogućava dugmadi za pomeranje
      pageDots: false,
    });
    
    // Selektuj slike unutar carousel-a
    const imgs = carousel.querySelectorAll('.carousel-cell img');
    
    // Proveri koji transform je podržan
    const docStyle = document.documentElement.style;
    const transformProp = typeof docStyle.transform === 'string' ? 'transform' : 'WebkitTransform';
    
    // Dodaj scroll event na Flickity
    flkty.on('scroll', function () {
      // Petlja kroz sve slajdove
      flkty.slides.forEach(function (slide, i) {
        const img = imgs[i];
        // Izračunaj X pomeraj na osnovu skrolovanja
        const x = (slide.target + flkty.x) * -0.3; // Adjust this multiplier to control the movement intensity
    
        // Postavi transform na sliku
        img.style[transformProp] = `translateX(${x}px)`;
      });
    });
    
    // Dodavanje uspravnih linija i brojača sa leve strane
    const linesContainer = document.querySelector('.flickity-progress-lines');
    const totalSlides = flkty.slides.length;
    
    // Dodajemo linije i povezujemo ih sa slajdovima
    for (let i = 0; i < totalSlides; i++) {
      const lineContainer = document.createElement('div');
      lineContainer.classList.add('line-container');
      lineContainer.setAttribute('data-slide', i); // Dodajemo podatak koji je slide
      
      const line = document.createElement('div');
      line.classList.add('flickity-line');
      
      // Dodajemo liniju u kontener
      lineContainer.appendChild(line);
      
      // Dodajemo event listener za klik na kontener
      lineContainer.addEventListener('click', function () {
        const slideIndex = parseInt(lineContainer.getAttribute('data-slide'));
        flkty.select(slideIndex); // Pomeri karusel na odgovarajući slide
      });
    
      // Dodajemo kontener u glavnu sekciju sa linijama
      linesContainer.appendChild(lineContainer);
    }
    
    const indicator = document.querySelector('.flickity-progress-lines::after');
    
    // Kada se slide promeni, ažuriraj brojčanik i selektovanu liniju
    flkty.on('change', function (index) {
      // Ažuriraj brojčanik
      document.getElementById('current-slide').textContent = index + 1;
    
      // Ažuriraj selektovanu liniju
      const lineContainers = document.querySelectorAll('.line-container');
      lineContainers.forEach(function (container, i) {
        const line = container.querySelector('.flickity-line');
        if (i === index) {
          line.classList.add('is-selected');
        } else {
          line.classList.remove('is-selected');
        }
      });
      const indicatorPosition = (25 * index) - 3.5; // Svaki slajd se pomera za 25px
      document.querySelector('.flickity-progress-lines').style.setProperty('--indicator-position', `${indicatorPosition}px`);
    });

 }
