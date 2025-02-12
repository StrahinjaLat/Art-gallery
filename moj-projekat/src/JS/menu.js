import { gsap } from 'gsap';

// Animacija menija
export const MenuAnimations = () => {
  let isActive = false;

  const menuLabel = document.getElementById("menuLabel");
  const closeLabel = document.getElementById("closeLabel");
  const menu = document.getElementById("menu");
  const menuLinks = menu.querySelectorAll(".linkContainer");

  function toggleMenu() {
    isActive = !isActive;

    // Animacija za dugme Menu/Close
    gsap.to(menuLabel, {
      top: isActive ? "-100%" : "0%",
      duration: 0.5,
      ease: "power3.out"
    });

    gsap.to(closeLabel, {
      top: isActive ? "0%" : "100%",
      duration: 0.5,
      ease: "power3.out"
    });

    // Animacija za meni (proširivanje menija)
    gsap.to(menu, {
      width: isActive ? "480px" : "100px",
      height: isActive ? "450px" : "40px",
      top: isActive ? "10px" : "25px",
      right: isActive ? "15px" : "30px",
      duration: 0.75,
      ease: "power3.out"
    });

    // Animacija za linkove sa efektima za `rotateX` i `translateY`
    menuLinks.forEach((link, i) => {
      gsap.fromTo(link, {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20,
      }, {
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        delay: 0.5 + i * 0.1,
        duration: 0.65,
        ease: "power3.out"
      });
    });

    // Ažuriranje pristupačnosti
    menu.setAttribute("aria-hidden", !isActive);
    document.querySelector(".button").setAttribute("aria-expanded", isActive.toString());

    // Dodavanje/uklanjanje klase koja označava aktivnost menija
    if (isActive) {
      menu.classList.add('menu-active');
    } else {
      menu.classList.remove('menu-active');
    }
  }

  window.toggleMenu = toggleMenu;
};
