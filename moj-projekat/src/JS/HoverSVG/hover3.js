import gsap from 'gsap'; // Importuj gsap

export let hoverAnimationTimeline3;

export const onMouseEnter3 = () => hoverAnimationTimeline3.play();
export const onMouseLeave3 = () => hoverAnimationTimeline3.reverse();


export   const setupHoverAnimation3 = (filterId, textElement, gridItem) => {
    const feBlur = document.querySelector(`#${filterId} feGaussianBlur`)
    const feDisplacementMap = document.querySelector(`#${filterId} feDisplacementMap`)
  
    if (!feBlur || !feDisplacementMap) {
      console.warn(`Filter with ID ${filterId} not found for element`, textElement);
      return;
    }
  
    let primitiveValues = { stdDeviation: 0, scale: 0 }
  
    gsap.set(textElement, { opacity: 0, visibility: 'hidden' });
  
    const animationTimeline3 = gsap.timeline({
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
    hoverAnimationTimeline3 = animationTimeline3;
  
    // Dodajemo event listenere za hover
    gridItem.addEventListener('mouseenter', onMouseEnter3);
    gridItem.addEventListener('mouseleave', onMouseLeave3);
  };