function range(start_num, end_num) {
  if (start_num > end_num) return [];

  return [start_num].concat(range(start_num + 1, end_num));
}

// console.log(range(2,7));
// console.log(range(9,7));
// console.log(range(7,7));

function recursiveArrSum(arr) {
  if (arr.length === 1) return arr[0];

  return arr.pop() + recursiveArrSum(arr);
}

// console.log(recursiveArrSum([1,2,3]));

function iterativeArrSum(arr) {
  result = 0;

  for (i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

// console.log(iterativeArrSum([1,2,3]));

function exp1(base, exponent) {
  if (exponent === 0) return 1;

  if (exponent < 0) {
    return 1/(base * exp1(base, Math.abs(exponent)-1));
  } else {
    return base * exp1(base, exponent-1);
  }
}

// console.log(exp1(2,-3));

function exp2(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;

  if (exponent % 2 === 0) {
    let temp = exp2(base, exponent/2);
    return temp * temp;
  } else {
    let temp = exp2(base, (exponent-1) / 2);
    return base * temp * temp;
  }
}
// console.log(exp2(2,3));
// console.log(exp2(2,4));

function finbonacciR(num) {
  if (num === 1) return [1];
  if (num === 2) return [1, 1];
  if (num <= 0) return NaN;

  let last = finbonacciR(num - 1);
  return last.concat(last[last.length-2] + last[last.length-1]);
}

// console.log(finbonacciR(1));
// console.log(finbonacciR(2));
// console.log(finbonacciR(7));


function finbonacciI(num) {
  let fibs = [1];
  if (num === 1) return fibs;
  fibs.push(1);

  while (fibs.length < num) {
    fibs.push(fibs[fibs.length-2] + fibs[fibs.length-1]);
  }

  return fibs;
}

console.log(finbonacciI(1));
console.log(finbonacciI(2));
console.log(finbonacciI(7));
