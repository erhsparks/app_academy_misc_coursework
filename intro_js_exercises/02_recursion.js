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
  if (num <= 0) return undefined;

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

// console.log(finbonacciI(1));
// console.log(finbonacciI(2));
// console.log(finbonacciI(7));


function bSearch(arr, target) {
  if (arr.length <= 0) return undefined;

  let half = Math.floor(arr.length/2);

  switch (Math.sign(target - arr[half])) {
  case -1:
    return bSearch(arr.slice(0, half), target);
  case 0:
    return half;
  case 1:
    let right = bSearch(arr.slice(half+1, arr.length), target);
    if (right === undefined) {
      return right;
    } else {
      return half + 1 + right;
    }

  }
}
//
// console.log(bSearch([1, 2, 3], 1));
// console.log(bSearch([2, 3, 4, 5], 3));
// console.log(bSearch([2, 4, 6, 8, 10], 6));
// console.log(bSearch([1, 3, 4, 5, 9], 5));
// console.log(bSearch([1, 2, 3, 4, 5, 6], 6));
// console.log(bSearch([1, 2, 3, 4, 5, 6], 0));
// console.log(bSearch([1, 2, 3, 4, 5, 7], 6));


function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let half = Math.floor(arr.length/2);

  let left = mergeSort(arr.slice(0, half));
  let right = mergeSort(arr.slice(half, arr.length));

  return merge(left, right);
}

function merge(arr1, arr2) {
  let result = [];

  while ((arr1.length > 0) && (arr2.length > 0)) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result.concat(arr1).concat(arr2);
}

// console.log(mergeSort([6,2,34,6,7,23,4,87]));
// console.log(mergeSort([6,2]));


function subsets() {

}
