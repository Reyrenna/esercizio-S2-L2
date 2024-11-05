/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* let numero1 = 88;
   let numero2 = 76;
  if (numero1>numero2){
   console.log("numero1 più grande di numero2")
   } else {
    console.log("numero2 più grande di numero1")
   }; */

   let numero1 = 88;
   let numero2 = 76;
   if (numero1>numero2){
    console.log("numero1 più grande di numero2")
    } else {
     console.log("numero2 più grande di numero1")
    };
 

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* let numeroIntero = 7;
 if (numeroIntero!==5){
  console.log("not equal")
 } else {
  console.log("equal")
};  */

let numeroIntero = 7;
 if (numeroIntero!==5){
  console.log("not equal")
 } else {
  console.log("equal")
}; 

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* let numeroDivisibile = 25;
 if (numeroDivisibile%5){
  console.log("divisibile per 5")
  } else {
   console.log("non divisibile per 5")
  }; */

  let numeroDivisibile = 25;
  if (numeroDivisibile%5){
   console.log("non divisibile per 5")
   } else {
    console.log("divisibile per 5")
   };

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* let numero8 =;
  let numero4 =;
  if (numero8, numero4===8){
   console.log("numero uguale a 8")
   } else if (numero8+numero4===8){
    console.log("la somma dei due numeri è 8")
    } else if (numero8-numero4===8){
    console.log("la sottrazioe dei due numeri è 8")
    } else { 
     console.log("nessun parametro rispettato")
    }; */

    let numero8 = 10;
  let numero4 = 2;
  if (numero8, numero4===8){
   console.log("uno dei due numeri è uguale a 8")
   } else if (numero8+numero4===8){
    console.log("la somma dei due numeri è 8")
    } else if (numero8-numero4===8){
    console.log("la sottrazioe dei due numeri è 8")
    } else { 
     console.log("nessun parametro rispettato")
    };

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* let totalShoppingCart = 75;
   const costoSpedizione = 10; 
   if (totalShoppingCart>=50){
   console.log("prezzo totale:"+""+totalShoppingCart)
  } else {
   console.log("prezzo totale:"+""+totalShoppingCart+costoSpedizione)
  }; 
   */

  let totalShoppingCart = 800;
   const costoSpedizione = 10; 
   let percentuale = 20;
   function calcoloPercentuale (totalShoppingCart,percentuale) {
   return totalShoppingCart * percentuale / 100
   };
   let risultato = calcoloPercentuale (totalShoppingCart,percentuale);
   console.log(risultato);
   if (risultato>=50){
   console.log(risultato)
  } else {
   console.log(risultato+costoSpedizione)
  }; 

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* let percentuale = 20;
   function calcoloPercentuale{
   totalShoppingCart * percentuale / 100
   };
   console.log(calcoloPercentuale);
   */


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*    let variabile1 = 3;
   let variabile2 = 15;
   let variabile3 = 12;
   if (variabile1>variabile2>variabile3){
    console.log(variabile1, variabile2, variabile3)
   } else if (variabile2>variabile1>variabile3){
    console.log(variabile2, variabile1, variabile3)
   } else if (variabile3>variabile2>variabile1){
    console.log(variabile3, variabile2, variabile1)
   } else if (){console.log("te inculi")};
    */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* let valorex = 90
    if (typeof valorex===String){
  console.log("il valore è una stringa")
 } else if(typeof valorex===Number) {
  console.log("il valore è un numero")
 } else {
  console.log("il valore è booleano")
 }; */

  let valorex = 90;
  console.log(typeof valorex);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeroPari = 4;
if (numeroPari%2){
  console.log("il numero è dispari")
} else {
  console.log("il numero è pari")
};

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto";


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop("css");
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeri110 = [];
numeri110.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numeri110)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
numeri110.splice(9, 1, 100);

/* SCRIVI QUI LA TUA RISPOSTA */
