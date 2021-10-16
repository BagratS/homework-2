function getEvens(arr) {
    return arr.filter(val => !(val%2));
}
//console.log(getEvens([1,2,3,4,5,6]));
function sum(arr) {
    return arr.reduce((a, b) => a + b);
}
//console.log(sum([1,3,5]))
function typeResult(res) {
    console.log(`The result is ${res}`);
}
const pipe = (...funcs) => (val) => funcs.reduce((pv,cv) => cv(pv), val);
pipe(getEvens, sum, typeResult)([1,2,3,5,7,6]);