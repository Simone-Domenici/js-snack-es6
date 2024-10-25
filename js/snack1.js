/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bikeShop = [
    bikeOne = {
        nome: 'Saetta',
        peso: 25,
    },
    bikeTwo = {
        nome: 'Mcqueen',
        peso: 31,
    },
    bikeThree = {
        nome: 'Graziella',
        peso: 18,
    }
]

// console.log(bikeShop)
let result = {
    nome:'',
    peso:9999,
}
for (let i = 0; i < bikeShop.length; i++) {
    if (bikeShop[i].peso < result.peso) {
        result.nome = bikeShop[i].nome
        result.peso = bikeShop[i].peso
    }
}

console.log(result)