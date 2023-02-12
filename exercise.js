
function hello(){
    return "Hello"
}
function printAsyncName(callback, nome){
    setTimeout(() => console.log(callback), 1000);
    setTimeout(() => console.log(nome), 2000);
}

printAsyncName(hello(), "franco");