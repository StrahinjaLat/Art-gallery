

export const buttonsActive = () => {
    const buttons = document.querySelectorAll('.button__fillter');
    const gridItems = document.querySelectorAll('.work__grid__list li');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Uklanjanje 'active-button' klase sa svih dugmadi
        buttons.forEach(btn => btn.classList.remove('active-button'));
  
        // Dodavanje 'active-button' klase na kliknuto dugme
        this.classList.add('active-button');

        const filter = button.textContent.toLowerCase();
        console.log(`Filter clicked: ${filter}`);

        gridItems.forEach(item => {

            const category = item.getAttribute('data-category');
            console.log(`Item category: ${category}`); 

            if (filter === 'all' || category === filter) {
                item.classList.remove('hidden');
                item.classList.add('vissible');
              } else {
                item.classList.remove('vissible');
                item.classList.add('hidden');
              }

        })


      });
    });

    const layoutButton = document.getElementById('layout-toggle');
    const cardLayoutButton = document.getElementById('card-layout-toggle');
    
    const tableLayout = document.querySelector('.table-layout');
    const cardLayout = document.querySelector('.card-layout');

    layoutButton.addEventListener('click', function() {
        tableLayout.style.display = 'block'; // Prikazivanje tabele
        cardLayout.style.display = 'none';  // Sakrivanje kartica
    });
    
    cardLayoutButton.addEventListener('click', function() {
        tableLayout.style.display = 'none'; // Sakrivanje tabele
        cardLayout.style.display = 'block'; // Prikazivanje kartica
    });

  };