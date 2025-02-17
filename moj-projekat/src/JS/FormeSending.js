

document.addEventListener('DOMContentLoaded', function () {
  
    const budgetButtons = document.querySelectorAll('.footer__price-button');
    let selectedBudget = '';

      // Dodavanje event listenera za dugmadi
      budgetButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Uklanjanje aktivnog stila sa svih dugmadi
            budgetButtons.forEach(btn => btn.classList.remove('selected'));

            // Dodavanje aktivnog stila na kliknutu dugme
            button.classList.add('selected');

            // Čuvanje vrednosti odabranog budžeta
            selectedBudget = button.dataset.price;

            // Sakrivanje vrednosti budžeta u hidden inputu forme
            document.getElementById('budget').value = selectedBudget;
        });
    });

    document.querySelector('#footerForm').addEventListener('submit', function (event) {
        event.preventDefault();
        
    })

})