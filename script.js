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
},
    {"nome": "Giuseppe",
    "cognome": "Verdi",
    },

    {"nome": "Vincenzo",
    "cognome": "Gialli",
    },

];

// Se voglio stampare senza il ciclo: console.log(`${arrStudenti[0].nome} ${arrStudenti[0].cognome} `);

//2. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (var i = 0; i<arrStudenti.length; i++){
    console.log(`${arrStudenti[i].nome} ${arrStudenti[i].cognome} `);
    document.getElementById("studenti").innerHTML += (`<li>${arrStudenti[i].nome} ${arrStudenti[i].cognome}</li>`);
}