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

var studenti = [
  {"nome" : "Marco", "cognome" : "Pesucci", "età" : 21},
  {"nome" : "Paolo", "cognome" : "Tangetti", "età" : 28},
  {"nome" : "Alberto", "cognome" : "Carrara", "età" : 25},
  {"nome" : "Eugenio", "cognome" : "Meo", "età" : 33}
]

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + " " +  studenti[i].cognome);
}

// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


var nomeStud = prompt("Inserisci il nome del nuovo studente");
var cognomeStud = prompt("Inserisci il cognome del nuovo studente");
var etaStud = parseInt(prompt("Inserisci l'età del nuovo studente"));

studenti.push({"nome" : nomeStud, "cognome" : cognomeStud, età : etaStud});
console.log(studenti);
