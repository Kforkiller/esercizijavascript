const isLogged = true;

function firstPromise(log) {
    return new Promise((resolve, reject) => {
    if (log == true) {
        let number = Math.random()
        resolve(number)
    } else {
        reject(new Error('Error Not logged'))
    }
    })
}

function secondPromise(number) {
    console.log(number)
    return new Promise((resolve, reject) => {
    if (number > 0.5) {
        const data = { name: "John", age: "24" }
        resolve(data)
    } else {
        reject(new Error('Error Number'))
    }
    })
}

firstPromise(isLogged)
    .then((number) => secondPromise(number))
    .then((solution) => console.log(solution))
    .catch((error) => console.error('ERROR'))
