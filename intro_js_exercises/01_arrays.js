Array.prototype.my_uniq = function() {
  let result = [];
  this.forEach(function(num) {
    if (result.includes(num)) {
      return;
    }

    result.push(num);
  });

  return result;
}

// console.log([1,2,3,4,5].my_uniq())
// console.log([1,2,3,4,5, 2, 3].my_uniq())

Array.prototype.two_sum = function() {
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

// console.log([-1,0,2,-2,1].two_sum())


Array.prototype.my_transpose = function() {
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
console.log(arr.my_transpose())
