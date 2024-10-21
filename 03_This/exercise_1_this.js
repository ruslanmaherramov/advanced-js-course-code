// Write a function called greetFluffy, which should return the string "Hello Fluffy Meowson".
// Add the necessary code to invoke the greet function, but instead of returning "Hello Butters Cluckly",
// return "Hello Fluffy Meowson". Do not modify the fluffy object above.

const butters = {
  firstName: "Butters",
  lastName: "Cluckly",
  greet: function(){
    return `Hello ${this.firstName} ${this.lastName}`
  }
}

const fluffy = {
  firstName: "Fluffy",
  lastName: "Meowson",
}

function greetFluffy() {
  return butters.greet.call(fluffy);
}
