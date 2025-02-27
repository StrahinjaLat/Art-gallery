

export const hoverGlove = () => {
  document.querySelectorAll('.seo-technologies__list').forEach(list => {
    list.onmousemove = e => {
      for (const card of list.querySelectorAll('.seo-technologies__item')) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
  
        // Postavljanje pozicije miša kao CSS varijabli
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  });
}

