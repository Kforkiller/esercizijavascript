const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon"
// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);


/* perchè l'oggetto viene matenuto in memoria e diciamo che le variabili
in questo caso firstname ecc.. sono l'indirizzo di dove andiamo a trovare
l'oggetto in memoria, quindi proprio per questo motivo e come se stessimo
andando a modificare 1 solo oggetto con 2 riferimenti all'indirizzo di memoria */