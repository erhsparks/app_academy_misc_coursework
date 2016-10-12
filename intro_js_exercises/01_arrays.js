Array.prototype.myUniq = function() {
  let result = [];
  this.forEach(function(num) {
    if (result.includes(num)) {
      return;
    }

    result.push(num);
  });

  return result;
}

// console.log([1,2,3,4,5].myUniq())
// console.log([1,2,3,4,5, 2, 3].myUniq())

Array.prototype.twoSum = function() {
  let result = [];
  for (i = 0; i < this.length-1; i++) {
    for (j = i+1; j < this.length; j++) {
      let possibleSum = this[i] + this[j];
      if (possibleSum === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
}

// console.log([-1,0,2,-2,1].twoSum())


Array.prototype.myTranspose = function() {
  let result = this;
  for (i = 0; i < this.length; i++) {
    for (j = 0; j < this[i].length; j++) {
      result[i][j] = this[j][i];
    }
  }
  return result;
}

let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

// console.log(arr.myTranspose())


Array.prototype.myEach = function(cb) {
  for (i = 0; i < this.length; i++) {
    cb(this[i]);
  }
}

function addNum(num) {
  return num + 10;
}

// console.log([1,2,3].myEach((num) => console.log(addNum(num))));


Array.prototype.myMap = function(cb) {
  let result = [];

  this.myEach(function(num) {
    result.push(cb(num));
  });

  return result;
}

function addNum(num) {
  return num + 10;
}

// console.log([1,2,3].myMap(addNum));


Array.prototype.myInject = function(cb) {
  let array = this;
  let result = array[0];
  array.myEach(function(el) {
    if (el === array[0]) {
      return;
    } else {
      result = cb(result, el);
    }
  });

  return result;
}

function sumNums(result, el) {
  return result + el;
}

// console.log([1,2,3].myInject(sumNums));

Array.prototype.bubbleSort = function() {
  let that = this;
  let pointer = 0;
  while (pointer < that.length) {
    for (i = 0; i < that.length-1; i++) {
      let j = i+1;
      if (that[i] > that[j]) {
        let temp = that[i];
        that[i] = that[j];
        that[j] = temp;
      }
    }
    pointer++;
  }
}

let arr2 = [6,2,2,4,7,8,3,4,1,3,7,8];
arr2.bubbleSort();
console.log(arr2);
