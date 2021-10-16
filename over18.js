const isOVer18 = (arr) => {
    return arr.filter(val => val >= 18)
    .reduce((pv, cv) => pv + cv);
}

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
console.log(isOVer18(arr));