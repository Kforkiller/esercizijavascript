const number = 15;

let prova = new Promise((resolve, reject) => { 
    if (number > 10 ) {
        return resolve`${number}`
    } else {
        return reject`Errore`
    }
})
    .then((resolve) => console.log(`Accepted ${number}`))
    .catch((reject) => console.error(`Errore`))