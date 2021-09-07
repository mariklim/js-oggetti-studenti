// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

//1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var studenti = {
    "nome": "Anna",
    "cognome": "Rossi",
    "età": 40
};

//2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studenti){
    console.log(`la proprietà dell'oggetto "Studenti" : ${studenti[key]}`);
}

// _____________________________________

//1. Creare un array di oggetti di studenti.
var arrStudenti;
arrStudenti = [
    {"nome": "Anna",
    "cognome": "Rossi",
    "età": 40,
},
    {"nome": "Giuseppe",
    "cognome": "Verdi",
    "età": 32,
    },

    {"nome": "Vincenzo",
    "cognome": "Gialli",
    "età": 23,
    },

];

// Se voglio stampare senza il ciclo: console.log(`${arrStudenti[0].nome} ${arrStudenti[0].cognome} `);

//2. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (var i = 0; i<arrStudenti.length; i++){
    // console.log(`${arrStudenti[i].nome} ${arrStudenti[i].cognome} `);
    document.getElementById("studenti").innerHTML += (`<li>${arrStudenti[i].nome} ${arrStudenti[i].cognome}</li>`);
}

//3. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var nuovoStudente = {
    "nome": "",
    "cognome": "",
    "età": 0,
};

nuovoStudente.nome = prompt("scrivi il nome");
nuovoStudente.cognome = prompt("scrivi il cognome");
nuovoStudente.età = prompt("scrivi la tua età");

arrStudenti.push(nuovoStudente);
console.log(`${arrStudenti[i].nome} ${arrStudenti[i].cognome} ${arrStudenti[i].età} `);
document.getElementById("studenti").innerHTML += (`<li>${arrStudenti[i].nome} ${arrStudenti[i].cognome} ${arrStudenti[i].età}</li>`);
