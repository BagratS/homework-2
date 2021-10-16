'use strict';
const commonString = (str) => {
    const resultObj = str.split('')
    .reduce((res ,letter) => {
        if(typeof res[letter] === 'undefined')  res[letter] = 1;
        else res[letter]++;
        return res;
    },{});
    let max = 0;
    for(const key in resultObj) {
        if(resultObj[key] >= max) {
            max = resultObj[key];
        }
    }
    return max;
}

function makeObj(str) {
    return str.split('')
    .reduce((res ,letter) => {
        if(typeof res[letter] === 'undefined')  res[letter] = 1;
        else res[letter]++;
        return res;
    },{});
}

function counter(resultObj) {
    let max = 0;
    for(const key in resultObj) {
        if(resultObj[key] >= max) {
            max = resultObj[key];
        }
    }
    return max;
}

const commonString1 = (...funcs) => (string) => funcs.reduce((pv,cv) => cv(pv), string);
console.log(commonString('afasfasf,abfakjfsbaf'));
console.log(commonString1(makeObj, counter)('afasfasf,abfakjfsbaf'));
