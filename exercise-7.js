class Person {
  #fname;
  #lname;
  #age;
  constructor(fname, lname, age){
    this.#age = age
    this.#fname = fname
    this.#lname = lname
  }

  set firstnameset(_fname){
    this.#fname = _fname;
  } 
  set lastnameset(_lname){
    this.#lname = _lname;
  }
  set ageset(_age){
    this.#age = _age;
  }

  get firstnameget(){
    return this.#fname
  } 
  get lastnameget(){
    return this.#lname
  }
  get ageget(){
    return this.#age
  }
  get fullName(){
    return this.#fname + " " + this.#lname
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);