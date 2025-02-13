import gsap from 'gsap'; // Importuj gsap


export let hoverAnimationTimeline2;
export const onMouseEnter2 = () => hoverAnimationTimeline2.play();
export const onMouseLeave2 = () => hoverAnimationTimeline2.reverse();

export  const setupHoverAnimation2 = (filterId, textElement, gridItem) => {
    const feBlur = document.querySelector(`#${filterId} feGaussianBlur`)
    const feTurbulence = document.querySelector(`#${filterId} feTurbulence`)
    const feDisplacementMap = document.querySelector(`#${filterId} feDisplacementMap`)
  
    if (!feBlur || !feDisplacementMap) {
      console.warn(`Filter with ID ${filterId} not found for element`, textElement);
      return;
    }
  
    let primitiveValues = { stdDeviation: 0, scale: 0, baseFrequency: 0 }
  
    gsap.set(textElement, { opacity: 0, visibility: 'hidden' });
  
    const animationTimeline2 = gsap.timeline({
      paused: true,
      defaults: {
        duration: 2,
        ease: 'expo',
      },
      onUpdate: () => {
        feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation)
        feDisplacementMap.setAttribute('scale', primitiveValues.scale)
        feTurbulence.setAttribute('baseFrequency', primitiveValues.baseFrequency)
        textElement.style.filter = `url(#${filterId})`;
      },
    })
    .to(
      primitiveValues,
      {
        startAt: {
          stdDeviation: 20,
          scale: 100,
          baseFrequency: 0.1,
        },
        stdDeviation: 0,
        scale: 0,
        baseFrequency: 0.05,
      },
      0,
    )
    .to(textElement, {
      startAt: {
        opacity: 0,
       
      },
      opacity: 1,
      visibility: 'visible',
     
    }, 0);
  
    // Sačuvajte referencu na timeline
    hoverAnimationTimeline2 = animationTimeline2;
  
    // Dodajemo event listenere za hover
    gridItem.addEventListener('mouseenter', onMouseEnter2);
    gridItem.addEventListener('mouseleave', onMouseLeave2);
  };