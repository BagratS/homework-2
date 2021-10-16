"use strict"
const slice = (arr, start = 0, end = arr.length - 1) => {
    if(end < 0) end = arr.length + end - 1;
    if(start < 0) start = arr.length + start;
    return arr.filter((val, index) => index >= start && index <= end);
}

//console.log(slice([1,2,3,4,5,6], -2));


const splice = (arr, start, deleteCount , ...arg) => {
    let toAdd = [];
    let index = arr.length - start;
    while(index > 0) {
        const val = arr.pop();
        toAdd.push(val);
        index--;
    }
    let toShow = []
    
    while(deleteCount > 0) {
        toShow.push(toAdd.pop());
        if(toAdd.length === 0) break;
        deleteCount--;
    }
    console.log(toShow.reverse());
    arr.push(...arg, ...toAdd.reverse());
    return arr;
}

console.log(splice([1,2,3,4], 1, 4,'Joe'));


const splice1 = (arr, start, deleteCount , ...arg) => {
    const newArr = [];
    let i = 0;
    let index = start;
    while(index > 0) {
        newArr.push(arr[i]);
        i++;
        index--;
    }
    i = 0;
    index = arg.length - 1;
    while(i <= index) {
        newArr.push(arg[i]);
        i++;
    }
    i = start + deleteCount;
    index = arr.length - 1;
    while(i <= index) {
        newArr.push(arr[i]);
        i++;
    }
    i = 0;
    index = newArr.length - 1;
    while(i <= index) {
        arr[i] = newArr[i];
        i++;
    }
    if(arr.length > newArr.length) {
        for(i = 0 ; i <= arr.length - newArr.length ; i++) {
            arr.push();
        }
    }
    return arr;
}

// console.log(splice1([1,2,3,4], 3, 2,'gago'));

const find = (arr, clbfn, thisArg) => {
    for(let index = 0 ; index < arr.length ; index++) {
        const fn = clbfn.bind(thisArg, arr[index], index, arr);
        if(fn()) {
            return arr[index];
        }
    }
    return undefined;
}
// const func = (val) => val > 7;
// console.log(find([1,2,3,4],func));



const map = (arr, clbfn, thisArg) => {
    const newArr = [];
    for(let index = 0 ; index < arr.length ; index++) {
        const fn = clbfn.bind(thisArg, arr[index], index, arr);
        newArr[index] = fn();
    }
    return newArr;
}

// const func = val => val*2;
// console.log(map([1,2,3,4], func));


const filter = (arr, clbfn, thisArg) => {
    const newArr = [];
    for(let index = 0 ; index < arr.length ; index++) {
        const fn = clbfn.bind(thisArg, arr[index], index, arr);
        if(fn()) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}

// const func = (val) => val < 25;
// console.log(filter([15,22,34,41,14],func));


const every = (arr, clbfn, thisArg) => {
    for(let index = 0 ; index < arr.length ; index++) {
        const fn = clbfn.bind(thisArg, arr[index], index, arr);
        if(!fn()) {
            return false;
        }
    }
    return true;
}

// const func = (val) => val < 60;
// console.log(every([15,22,34,41,14],func));


const some = (arr, clbfn, thisArg) => {
    for(let index = 0 ; index < arr.length ; index++) {
        const fn = clbfn.bind(thisArg, arr[index], index, arr);
        if(fn()) {
            return true;
        }
    }
    return false;
}

// const func = (val) => val < 14;
// console.log(some([15,22,34,41,14],func));



'use strict';
function reduce(arr, cb, initialValue) {
  let index;
  let previousValue;
  let count = 0;
  if (arguments.length >= 3) {
    previousValue = initialValue;
    index = 0;
  } else {
    previousValue = arr[0];
    index = 1;
  }
  const length = arr.length;
  for (; index < length; index++) {
    if (arr.hasOwnProperty(index) && length - 1 === index && count === 0) {
      return arr[index];
    } else if (
      !arr.hasOwnProperty(index) &&
      length - 1 === index &&
      count === 0 &&
      arguments.length < 3
    ) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    if (arr.hasOwnProperty(index)) {
      previousValue = cb(previousValue, arr[index], index, arr);
      count++;
    }
  }
  return previousValue;
}

const func = (prval, val) => prval + val;
// console.log(reduce([1, 2, 3, 4, 5], func));
// console.log(reduce([, ,], func, 2));
// console.log(reduce([, , ,]), func);

