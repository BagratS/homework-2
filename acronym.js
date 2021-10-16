const acronym = (str) => {
    const words = str.split(" ");
    return words.reduce((pv, cv) => {
        return pv + cv[0].toUpperCase();
    },'')
} 

console.log(acronym('agag vag rt'));