const user = {
  id: 1,
  name: "John",
  age: 25,
};

function save(user){
  const saveJson = JSON.stringify(user)
  localStorage.setItem("user", saveJson)
}

function getSaves(){
  return JSON.parse(localStorage.getItem("user"))
}
save(user)
console.log(getSaves())