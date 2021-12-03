// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// genero 5 numeri casuali
function generateNumbers(min, max) {
    arrayNumbers = [];
    while (arrayNumbers.length < 5) {
        let randomNumbers = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!(arrayNumbers.includes(randomNumbers))) {
            arrayNumbers.push(randomNumbers);
        }
    }
    return arrayNumbers;
}

// visualizzo in pagina i 5 numeri random
random = generateNumbers(0, 100);
let contenitore = document.querySelector('.container');
let h1 = document.createElement('h1');
h1.append(random);
contenitore.append(h1);
console.log(random);

// facciamo scomparire i numeri dopo 5 secondi
function myTimeout() {
    contenitore.remove(h1);
    console.log('myTimeout');
}
setTimeout(myTimeout, 1000 * 5);

// facciamo partire il timer di 30 secondi e mostriamo 6 prompt
function myTimeoutPrompt() {
    arrayNumbersUser = [];
    for (let i = 0; i < 6; i++) {
        let scriviNumeri = prompt('inserisci il numero');
        arrayNumbersUser.push(scriviNumeri);
        console.log(arrayNumbersUser);
    }
}
setTimeout(myTimeoutPrompt, 1000 * 30);



