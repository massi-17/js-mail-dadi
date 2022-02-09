// creo un array di email
const listaEmail = [
    'marcorossi@gmail.com',
    'lucaverdi@hotmail.it',
    'mariabianchi@yahoo.it',
    'annarosa@gmail.com'
];

// dichiaro la variabile del controllo email e le attribuisco valore false
let emailCheck = false;
// dichiaro le variabili e le collego all'html
let result = document.getElementById('esito');
let bottoneRiprova = document.getElementById('tryagain');
let togli = document.getElementById('container');

//creo una funzione
function check() {
    // dichiaro e collego la variabile emailInput al valore immesso nel campo della pagina
  let emailInput = document.getElementById('emailInput').value;

  // creo un ciclo for dove l'index controllerà il contenuto dell'array
  for (i=0; i < listaEmail.length; i++) {
      // creo una condizione dove se l'email inserita è contenuta nell'array allora la variabile emailCheck è vera
    if (listaEmail[i] == emailInput) {
      emailCheck = true;
    }
  }
// se il controllo email è vero allora stampa access permit e togli il form
  if (emailCheck) {
    result.innerHTML = 'access permit';
    togli.classList.add('display_none');

    
// se no stampa access denied, togli il form e fai apparire il pulsante try again
  } else {
    result.innerHTML = 'access denied';
    togli.classList.add('display_none');
    bottoneRiprova.classList.remove('button_riprova');
  }
  
}

// funzione per ricaricare la pagina premendo sul pulsante tryagain
function tryagain() {
  location.reload();
}

