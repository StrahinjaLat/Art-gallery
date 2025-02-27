

import { gsap } from 'gsap';





const buttons = document.querySelectorAll('.footer__submit-button');

buttons.forEach(button => {
  const filler = button.querySelector('.footer__button-filler');
  const textInner = button.querySelector('.footer__button-text-inner');

  button.addEventListener('mouseenter', () => {
    // Filler animation
    button.classList.add('button--hover');
    // Dodavanje klase active na body
    document.body.classList.add('active');

    const tl = gsap.timeline();
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
    }, 0, 1);
  });

  button.addEventListener('mouseleave', () => {
    button.classList.remove('button--hover');
    // Uklanjanje klase active sa body
    document.body.classList.remove('active');

    const tl = gsap.timeline();
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
});