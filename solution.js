function repeatHello(callback) {
  const repeat = setInterval(callback, 1000);
  setTimeout(() => clearInterval(repeat), 5100);
}

const printHello = () => console.log("Hello");

repeatHello(printHello);
