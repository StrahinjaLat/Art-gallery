
export const resizeSVG = () => {
    const pathElement = document.getElementById('curve-path');

    // Funkcija za ažuriranje dimenzija prozora i podešavanje puta
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const pathData = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
      `;
      pathElement.setAttribute('d', pathData);
    };
    
    
    window.addEventListener('resize', updateDimensions);
    updateDimensions(); 
}

