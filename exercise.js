class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  refactoring() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const developer = new Person("Mario", "Rossi");
// console.log(developer.firstName + " " + developer.lastName);
console.log(developer.refactoring())
