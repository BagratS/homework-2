const userAvgCalc = (arr) => {
    return arr.reduce((pv, cv) => pv + cv.age, 0)/arr.length;
}

const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
    },
];

console.log(userAvgCalc(users));