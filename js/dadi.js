// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi ha il numero più alto.  (e se pari?)

// dichiaro le variabili dei giocatori e le collego all'html
let player1 = document.getElementById('player1');
let cpu = document.getElementById('cpu');

// variabile dove inserirò il vincitore
let winner = document.getElementById('winner');

// dichiaro le variabili contenenti i numeri random
let random_number1 = Math.floor(Math.random() * 100);
let random_number2 = Math.floor(Math.random() * 100);

// assegno le variabili dei numeri random al giocatore
player1.innerHTML = random_number1;
cpu.innerHTML = random_number2;

// collego altre variabili
let = button = document.getElementById('button');
let = box = document.getElementById('box');

// creo una funzione al click del bottone
button.addEventListener('click', function(){
    // al click si sparirà il bottone e apparirà il gioco
    box.classList.remove("display_none");
    button.classList.add("display_none");
})

// se i due numeri sono uguali sarà risutato pari
if (random_number1 == random_number2) {
    winner.innerHTML = 'nobody wins!';
}
// se il numero dell'utente è maggiore della cpu, vincerà l'utente
else if (random_number1 > random_number2) {
    winner.innerHTML = 'you_win!';
}
// altrimenti vincerà il pc
else {
    winner.innerHTML = 'you_lost!';
}

// ricarica la pagina al click del pulsante
function tryagain() {
    location.reload();
  }