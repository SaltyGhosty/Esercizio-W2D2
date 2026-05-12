/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/
/*
const { type } = require("express/lib/response");*/


/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto "persona" con: nome, cognome, eta, citta.
   Stampa: "Mario Rossi, 25 anni, vive a Roma."
*/

/* 
const persona = {
   nome: 'Mario',
   cognome: 'Rossi',
   eta: 25,
   citta: 'Roma',
};
console.log(`${persona.nome} ${persona.cognome},${persona.eta} anni, vive a ${persona.citta}`);

*/


/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto "persona": aggiungi "email", poi rimuovi "eta".
   Stampa l'oggetto risultante.
*/ 

/*
const persona = {
   nome: 'Mario',
   cognome: 'Rossi',
   eta: 25,
   citta: 'Roma',
};
delete persona.eta;
persona.email = 'mario.rossi@gmail.com';
console.log(persona);
*/



/* ESERCIZIO 3 — Oggetto annidato
   Oggetto "utente" con una proprietà "indirizzo" (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* 
const utente = {
	nome: 'Antonino',
	cognome: 'Cannavacciuolo',
	eta: 51,
	indirizzo: {
		via: 'Napoli',
		civico: 20,
		cap: 80020,
		citta: 'Campania',
	},
	lavoro: 'chef',
};
console.log(`CAP ${utente.indirizzo.cap}`);
*/


/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto "persona", variabile chiave = "nome".
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/*
const persona = {
   nome: 'Mario',
   cognome: 'Rossi',
   eta: 25,
   citta: 'Roma',
};

const myKey = "nome";

console.log(`Valora di nome ${persona[myKey]}`);
 */


/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa "Pareggio".
*/

/*  
let a = 12;
let b = 19;
let c = 19;

if (a > b && a > c) {
   console.log(`Il numero piu grande e: ${a}`);
}
else if (b > a && b > c) {
   console.log(`Il numero piu grande e: ${b}`);
}
else if (c > a && c > b) {
   console.log(`Il numero piu grande e: ${c}`);
} 
else if ((a === c && a > b) || (a === b && a > c) || (b === c && b > a)) {
console.log("Pareggio");
}
*/


/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile "totale".
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: "Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€"
   Risolvi una volta con if/else e una volta con ternario.
*/

/*
let totale = 44;
let spedizione = 9.90
if (totale >= 50) {
   console.log(`Spedizione gratuita`)
 }else {
      console.log(`Totale carrello: ${totale} - Spedizione: 9.90 - Totale finale ${totale + spedizione}`)
}



ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, "ciao", true]).
   Con un for + if, per ogni elemento stampa "x è un numero" o "x non è un numero".
*/
/* 
const mixedArray = [42, "ciao", true]

for (let i = 0; i < mixedArray.length; i++) {
  let tipo = typeof mixedArray[i];
     if (tipo === "number") {
      console.log(`L'elemento ${mixedArray[i]} e un numero`);
     } else if (tipo === "string") {
        console.log(`El elemento "${mixedArray[i]}" e un testo`);
    } else if (tipo === "boolean") {
        console.log(`El elemento ${mixedArray[i]} e un valore booleano`);
    }
   }
/*  */





/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.

  
*/
/*
const numeri = []
numeri.push(1,2,3,4,5);
console.log(numeri);
numeri.unshift(0);
console.log(numeri);
console.log(numeri.length)
*/





/* ESERCIZIO 9 — Carrello con splice
   Array ["Penna", "Quaderno", "Zaino", "Astuccio"].
   Con splice: rimuovi "Quaderno", poi inserisci "Diario" al suo posto.
   Stampa dopo ogni operazione.
*/

/* const utilita = ["Penna", "Quaderno", "Zaino", "Astuccio"];
console.log(utilita);
utilita.splice(1,1);
console.log(utilita);
utilita.splice(1,0,"Diario");
console.log(utilita); */




/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ["Penna", "Quaderno", "Zaino"].
   cercato = "Zaino".
   Con includes: stampa "Zaino è in carrello: true".
   Con indexOf: stampa la posizione, o "Non in carrello".
*/

/*
const prodotti = ["Penna", "Quaderno", "Zaino"];
if(prodotti.includes("Zaino")){
   console.log(`Zaino e in carrello in posizione ${prodotti.indexOf("Zaino")}`);
}  else {
    console.log(`Zaino non e in carrello`)
}
*/


/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: "Mario (25 anni)".
   Aggiungi console.table(utenti) alla fine.
*/

/*
const utenti = [
    { nome: "Mario", eta: 25 },
    { nome: "Luisa", eta: 30 },
    { nome: "Giovanni", eta: 22 }
];
for (let i = 0;i < utenti.length; i++){
      console.log(`${utenti[i].nome} (${utenti[i].eta} anni)`);
}
  
*/


/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → "OFFERTA: nome (prezzo€)"
   - disponibile && prezzo >= 10 → "nome — prezzo€"
   - !disponibile → "nome — esaurito"
*/

/* 
const inventario = [
	{
		articleName: 'HyperX QuadCast',
		category: 'accessories',
		price: 5,
		available: true,
	},
	{
		articleName: 'Nvida GeForce 5070',
		category: 'hardware',
		price: 800,
		available: true,
	},
	{
		articleName: 'Wooting 60HE',
		category: 'accessories',
		price: 70,
		available: false,
	},
   	{
		articleName: 'G502 Hero',
		category: 'accessories',
		price: 70,
		available: false,
	},
]

for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].available && inventario[i].price < 10) {
        console.log(`OFFERTA: ${inventario[i].articleName} (${inventario[i].price}€)`);
    } else if (inventario[i].available && inventario[i].price >= 10) {
        console.log(`${inventario[i].articleName} — ${inventario[i].price}€`);
    } else if (!inventario[i].available) {
        console.log(`${inventario[i].articleName} — esaurito`);
    }
}
*/



/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array "inverso", riempilo con un for (dall'ultimo al primo) usando push.
   Stampa "inverso".
   Vincolo: niente metodo .reverse() di JavaScript.
*/
let stilosi = [1, 2, 3, 4, 5];
let inversi = [];

for (let i = 0;i < 6; i++) {
      inversi.push(i);
}
 console.log(inversi)
/* SCRIVI QUI LA TUA RISPOSTA */
