


import gsap from 'gsap'; // Importuj gsap

export let hoverAnimationTimeline;

export const onMouseEnter = () => hoverAnimationTimeline.play();
export const onMouseLeave = () => hoverAnimationTimeline.reverse();

export const setupHoverAnimation = (filterId, textElement, gridItem) => {
    const feBlur = document.querySelector(`#${filterId} feGaussianBlur`);
    const feDisplacementMap = document.querySelector(`#${filterId} feDisplacementMap`);
  
    if (!feBlur || !feDisplacementMap) {
      console.warn(`Filter with ID ${filterId} not found for element`, textElement);
      return;
    }
  
    let primitiveValues = { stdDeviation: 0, scale: 0 };
  
    gsap.set(textElement, { opacity: 0, visibility: 'hidden' });
  
    const animationTimeline = gsap.timeline({
      paused: true,
      defaults: {
        duration: 2,
        ease: 'expo',
      },
      onUpdate: () => {
        feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation);
        feDisplacementMap.setAttribute('scale', primitiveValues.scale);
        textElement.style.filter = `url(#${filterId})`;
      },
    })
    .to(
      primitiveValues,
      {
        startAt: {
          stdDeviation: 40,
          scale: 150,
        },
        stdDeviation: 0,
        scale: 0,
      },
      0,
    )
    .to(textElement, {
      startAt: {
        opacity: 0,
        scale: 0.9,
      },
      opacity: 1,
      visibility: 'visible',
      scale: 1,
    }, 0);
  
    // Sačuvajte referencu na timeline
    hoverAnimationTimeline = animationTimeline;
  
    // Dodajemo event listenere za hover
    gridItem.addEventListener('mouseenter', onMouseEnter);
    gridItem.addEventListener('mouseleave', onMouseLeave);
  };
  