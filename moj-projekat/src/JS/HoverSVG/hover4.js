
import gsap from 'gsap'; // Importuj gsap

export let hoverAnimationTimeline4;

export const onMouseEnter4 = () => hoverAnimationTimeline4.play();
export const onMouseLeave4 = () => hoverAnimationTimeline4.reverse();




export  const setupHoverAnimation4 = (filterId, textElement, gridItem) => {
    const feBlur = document.querySelector(`#${filterId} feGaussianBlur`)
    const feDisplacementMap = document.querySelector(`#${filterId} feDisplacementMap`)
  
    if (!feBlur || !feDisplacementMap) {
      console.warn(`Filter with ID ${filterId} not found for element`, textElement);
      return;
    }
  
    let primitiveValues = { stdDeviation: 0, scale: 0 }
  
    gsap.set(textElement, { opacity: 0, visibility: 'hidden' });
  
    const animationTimeline4 = gsap.timeline({
      paused: true,
      defaults: {
        duration: 2,
        ease: 'expo',
      },
      onUpdate: () => {
        feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation)
        feDisplacementMap.setAttribute('scale', primitiveValues.scale)
        textElement.style.filter = `url(#${filterId})`;
      },
    })
    .to(
      primitiveValues,
      {
        startAt: {
          stdDeviation: 70,
          scale: 200,
        },
        stdDeviation: 0,
        scale: 0,
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
    hoverAnimationTimeline4 = animationTimeline4;
  
    // Dodajemo event listenere za hover
    gridItem.addEventListener('mouseenter', onMouseEnter4);
    gridItem.addEventListener('mouseleave', onMouseLeave4);
  };
  