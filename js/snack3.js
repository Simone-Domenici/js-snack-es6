/*
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

const nomi = [
    "Alessandro",
    "Beatrice",
    "Carlo",
    "Diletta",
    "Emanuele",
    "Francesca",
    "Giorgio",
    "Ilaria",
    "Jacopo",
    "Laura",
    "Marco",
    "Nicole",
    "Omar",
    "Paola",
    "Riccardo",
    "Sofia",
    "Tommaso",
    "Valentina",
    "Zaira"
  ];

const newArray = estraiSottoarray(nomi,3,7)

function estraiSottoarray(array, a, b) {
    if (a < 0 || b >= array.length || a > b) {
      alert('Indici non validi')
    }

    return array.slice(a, b + 1);
}

console.log(newArray)