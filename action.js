// Creare un oggetto che descriva uno studente con le seguenti proprietà:
//  nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var studente1 = {
  "nome" : "Marco",
  "cognome" : "Pesucci",
  "età" : 21
};

for (var lista in studente1) {
console.log(lista + "=" + studente1[lista])
}

// console.log(studente1.nome + " è il nome del primo studente" );

// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti
//  e stampare per ognuno nome e cognome



var studente2 = {
  "nome" : "Paolo",
  "cognome" : "Carletti",
  "età" : 25
}

var studente3 = {
  "nome" : "Simone",
  "cognome" : "Parroco",
  "età" : 33
}

var studenti = [studente1, studente2, studente3];

console.log("I nomi degli studenti sono " + studente1.nome + " " + studente2.nome + " " + studente3.nome);
console.log("I cognomi degli studenti sono " + studente1.cognome + " " + studente2.cognome + " " + studente3.cognome);




// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var studente4;
var nomeNuovoStud = prompt("Inserisci il nome del nuovo studente");
var cognomeNuovoStud = prompt("Inserisci il cognome del nuovo studente");
var etaNuovoStud = parseInt(prompt("Inserisci l'età del nuovo studente"));


studente4.push(cognomeNuovoStud.nome);
studenti.push(studente4);

console.log(studente4);
