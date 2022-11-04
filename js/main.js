//passoword generator

//chiedo all'utente il suo nome
let nome = prompt("Inserisci il tuo nome:");

console.log(nome)

//chiedo il suo cognome
let cognome = prompt("Inserisci il tuo cognome:");

console.log(cognome)

//chiedo colore preferito
let colore = prompt("Inserisci il tuo colore preferito:");

console.log(colore)

// number 
const number = 21;


//output
document.getElementById("password").innerHTML = `Password: 
${nome}${cognome}${colore}${number}`;