const isLogged = true;
function firstPromise (){
return new Promise((isLogged, reject) => { 
    if(isLogged == true)
    {
        let number = Math.random
        return number
    }else{
        return reject`Error`
    }
})
}

function secondPromise (){
return new Promise((number, reject) => { 
    if(number > 0.5)
    {
        const data ={name : "John", age: "24"}
        return data
    }else{
        return reject
    }
})
}

firstPromise()
    .then((number) => secondPromise(number))
    .then((number)=> console.log(number))
    .then((solution) => console.log(solution))
    .catch((error) => console.error('ERROR'))