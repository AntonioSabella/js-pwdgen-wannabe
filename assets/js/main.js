/* Chiedere all'utente il suo nome,
poi il suo cognome. 
Chiedere colore preferito
e stampare il tutto su HTML
in formato "nomecognomecolorepreferito22" */

//Chiedere all'utente il suo nome

const first_name = prompt('Digita il tuo nome');

console.log(first_name);

//Chiedere all'utente il suo cognome

const last_name = prompt('Digita il tuo cognome');

console.log(last_name);

//Chiedere all'utente il suo colore preferito

const favourite_color = prompt('Digita il tuo colore preferito');

console.log(favourite_color);

//Stampare tutto in formato esatto

const pass_phrase = first_name + last_name + favourite_color + 22

console.log(pass_phrase);

/* console.log(`${pass_phrase}`); Alternativa*/

// Mostrare a schermo

document.getElementById('password').innerHTML = pass_phrase;



