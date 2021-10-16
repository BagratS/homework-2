const filterByField = (obj, field, ...fieldValue) => {
    if(fieldValue.length) {
        return obj.filter(val => val[field] === fieldValue[0]);
    }
    return obj.filter(val => val[field]);
}
const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
    },
    {
    username: "Elon Musk",
    isAstronaut: false,
    },
];
console.log(filterByField(users, 'isAstronaut'))
console.log(filterByField(users, 'username', "Yuri Gagarin"));