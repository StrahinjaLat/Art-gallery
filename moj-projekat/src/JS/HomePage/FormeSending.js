
document.addEventListener('DOMContentLoaded', function () {
    const budgetButtons = document.querySelectorAll('.footer__price-button');
    let selectedBudget = ''; // Ovdje ćemo sačuvati izabrani budžet
  
    // Dodavanje event listenera za dugmadi
    budgetButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Uklanjanje aktivnog stila sa svih dugmadi
            budgetButtons.forEach(btn => btn.classList.remove('selected'));
  
            // Dodavanje aktivnog stila na kliknutu dugme
            button.classList.add('selected');
            selectedBudget = button.getAttribute('data-price'); // Preuzimamo podatke o budžetu
           
            
        });
    });
  
  // Funkcija za zatvaranje poruke
  function closeSuccessMessage() {
    document.getElementById('successMessage').style.display = 'none';
  }
  
    // Kada se submituje forma
    document.querySelector('#footerForm').addEventListener('submit', function (event) {
        event.preventDefault();  // Sprečavamo da stranica bude osvežena
  
        const form = this; // 'this' predstavlja formu
  
        // Dodajemo odabrani budžet u formu pre slanja
        const budgetInput = document.createElement('input');
        budgetInput.type = 'hidden';
        budgetInput.name = 'budget';
        budgetInput.value = selectedBudget;
        form.appendChild(budgetInput);
  
        // Slanje podataka putem EmailJS
        emailjs.sendForm('service_t9nfmkq', 'template_j21502l', form, 'hhCGMxWdpzOwXjwEv')
            .then(function (response) {
                console.log('Success:', response);
               
  
                document.getElementById('successMessage').style.display = 'block';
              form.reset();
  
              // Poništavamo selektovani budžet
              selectedBudget = '';
            }, function (error) {
                console.log('Error:', error);
               
            });
    });
  //   // Dodavanje event listenera za dugme "Zatvori"
  document.getElementById('closeButton').addEventListener('click', closeSuccessMessage);
  });