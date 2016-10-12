function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  console.log(`${this.owner} loves ${this.name}`);
};

let fred = new Cat("Fred", "Fred Sr");
let jane = new Cat("Jane", "Jane Sr");


Cat.prototype.cuteStatement = function() {
  console.log(`Everyone loves ${this.name}!`);
}

// fred.cuteStatement();
// jane.cuteStatement();

Cat.prototype.meow = function () {
  console.log("Meow");
};

fred.meow = function() {
  console.log(`I am ${this.name}!`);
}


jane.meow();
fred.meow();
