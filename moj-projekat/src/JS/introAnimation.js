// animation.js
import gsap from "gsap";  // Uveri se da imaš GSAP instaliran (npm install gsap)

export const initializeAnimations = () => {
  const counter = document.querySelector('.loading-counter');
  const loadingScreen = document.querySelector('.loading-screen')
  let loadedImages = 0;
  const totalImages = 0;
  // Dodajemo slike iz različitih delova stranice
  const imagesToLoad = [
    ...document.querySelectorAll('.grid img'),  // Slike unutar .grid
    ...document.querySelectorAll('.slides img'),  // Slike unutar .slides
    ...document.querySelectorAll('.img-container img')  // Slike unutar .img-container
  ];

  totalImages = imagesToLoad.length;
  // Funkcija koja se poziva kad se slika učita
  const onImageLoad = () => {
    loadedImages += 1;
    const percentage = Math.floor((loadedImages / totalImages) * 100);
    counter.innerText = `${percentage}%`; // Ažuriraj brojčanik

    console.log(`Slika ${loadedImages} od ${totalImages} učitana.`);

    if (loadedImages === totalImages) {
      // Animacija nestajanja brojača
      gsap.to(counter, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          counter.style.display = 'none'; // Sakrij brojač
          runAnimations(); // Pokreni glavnu animaciju
        },
      });
    }
  };

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

  // Resetuj animacije
  const resetAnimations = () => {
    gsap.killTweensOf('*');
    const elementsToReset = document.querySelectorAll('.img-container, .grid, .n');
    elementsToReset.forEach((el) => {
      gsap.set(el, { clearProps: 'all' });
    });
    const two = document.querySelectorAll('.two');
    const tElements = document.querySelectorAll('.t');

    two.forEach((el, index) => el.style.order = 4 - index);
    tElements.forEach((el, index) => el.style.order = 4 - index);
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
      ease: 'power2.inOut',
    })
      .to(firstCol, { y: '-58.5%', duration: 1, stagger: 0.3, ease: 'power2.inOut' }, '<')
      .to(secondCol, { y: 0, duration: 1, stagger: 0.3 }, '<')
      .to(thirdCol, { y: 0, duration: 1, stagger: 0.3 }, '<')
      .to(fourCol, { y: '-58.5%', duration: 1, stagger: 0.3 }, '<');

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

    const tl = gsap.timeline();

    tl.to(screen, {
      scale: scalingFactor,
      duration: 1,
      ease: 'power2.inOut',
    })
      .to([ssImage, backgroundImgElement], {
        scale: 1,
        duration: 3,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.to(ssContainer, {
            onComplete: () => {
                loadingScreen.style.display = 'none' 
              enableScroll(); // Omogući scroll
            },
          });
        },
      }, '1.3');

    return tl;
  };

  // Pokreni sve animacije
  const runAnimations = () => {
    const masterTimeline = gsap.timeline();
    masterTimeline.add(animateAll());
    masterTimeline.add(animateScaling(), '-=2.2');
  };

  // Inicijalizacija
  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    image.onload = onImageLoad;
    image.src = image.src; // Pokrećemo učitavanje slike
  });
};

