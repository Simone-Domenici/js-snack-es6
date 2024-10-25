/*
Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const serieA = [
    atalanta = {
        nome: 'Atalanta',
        punti : 0,
        falliSubiti : 0
    },
    bologna = {
        nome: 'Bologna',
        punti : 0,
        falliSubiti : 0
    },
    cagliari = {
        nome: 'Cagliari',
        punti : 0,
        falliSubiti : 0
    },
    como = {
        nome: 'Como',
        punti : 0,
        falliSubiti : 0
    },
    empoli = {
        nome: 'Empoli',
        punti : 0,
        falliSubiti : 0
    },
    fiorentina = {
        nome: 'Fiorentina',
        punti : 0,
        falliSubiti : 0
    },
    genoa = {
        nome: 'Genoa',
        punti : 0,
        falliSubiti : 0
    },
    hellasVerona = {
        nome: 'Hellas Verona',
        punti : 0,
        falliSubiti : 0
    },
    inter = {
        nome: 'Inter',
        punti : 0,
        falliSubiti : 0
    },
    juventus = {
        nome: 'Juventus',
        punti : 0,
        falliSubiti : 0
    },
    lazio = {
        nome: 'Lazio',
        punti : 0,
        falliSubiti : 0
    },
    lecce = {
        nome: 'Lecce',
        punti : 0,
        falliSubiti : 0
    },
    milan = {
        nome: 'Milan',
        punti : 0,
        falliSubiti : 0
    },
    monza = {
        nome: 'Monza',
        punti : 0,
        falliSubiti : 0
    },
    napoli = {
        nome: 'Napoli',
        punti : 0,
        falliSubiti : 0
    },
    parma = {
        nome: 'Parma',
        punti : 0,
        falliSubiti : 0
    },
    roma = {
        nome: 'Roma',
        punti : 0,
        falliSubiti : 0
    },
    torino = {
        nome: 'Torino',
        punti : 0,
        falliSubiti : 0
    },
    udinese = {
        nome: 'Udinese',
        punti : 0,
        falliSubiti : 0
    },
    venezia = {
        nome: 'Venezia',
        punti : 0,
        falliSubiti : 0
    },
]

console.log(serieA) 

function generateRandomNumber(min,max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    const randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
    return randomNumber
}

for (let i = 0; i < serieA.length; i++) {
    serieA[i].punti = generateRandomNumber(0,114)
    serieA[i].falliSubiti = generateRandomNumber (300,500)
}


const serieAFouls = []

for (let i = 0; i < serieA.length; i++) {
    serieAFouls.push(serieA[i].nome)
    serieAFouls.push(serieA[i].falliSubiti)
}
console.log(serieAFouls)
