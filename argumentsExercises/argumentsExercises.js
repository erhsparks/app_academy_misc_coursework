function sum() {
  let args = Array.from(arguments);
  let sum = 0;
  args.forEach (arg => sum += arg)
  return sum;
}


function sum2(...args) {
  let sum = 0;
  args.forEach (arg => sum += arg)
  return sum;
}
// console.log(sum2(1,2,3));

Function.prototype.myBind = function (context) {
  let bindArgs = Array.from(arguments);
  bindArgs = bindArgs.slice(1);

  let fcn = this;

  function toBeReturned() {
    let callArgs = Array.from(arguments);
    return fcn.apply(context, bindArgs.concat(callArgs));
  }

  return toBeReturned;
}

Function.prototype.myBind2 = function (context, ...bindArgs) {
  return (...callArgs) => {
    this.apply(context, bindArgs.concat(callArgs));
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// markov.says.myBind2(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// markov.says.myBind2(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// markov.says.myBind2(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// const notMarkovSays = markov.says.myBind2(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true

function curriedSum(numArgs) {
  let numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs){
      return numbers.reduce((sum, n) => sum + n);
    } else return _curriedSum;
  }

  return _curriedSum;
}

// const sums = curriedSum(4);
// console.log(sums(5)(30)(20)(1));


Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let fcn_cxt = this;

  function _curried(num) {
    numbers.push(num);

    if (numbers.length === numArgs){
      return fcn_cxt.apply(null, numbers);
    } else return _curried;
  }

  return _curried;
}

Function.prototype.curry2 = function(numArgs) {
  let numbers = [];
  let fcn_cxt = this;

  function _curried(num) {
    numbers.push(num);

    if (numbers.length === numArgs){
      return fcn_cxt.call(null, ...numbers);
    } else return _curried;
  }

  return _curried;
}

console.log(sum2.curry2(4)(1)(2)(3)(3));
