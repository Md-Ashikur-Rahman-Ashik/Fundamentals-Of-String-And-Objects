const persons = ["Alvi", "Sifat", "Sabit", "Mamun", "Ratul"];
const sortedPersons = persons.sort();

// console.log(sortedPersons);

const numbers = [4, 7, 2, 8, 3, 6];
// const numbers_asc = numbers.sort(function(a, b){
//     return a - b;
// });
const numbers_dsc = [...numbers].sort(function(a, b){
    return b - a;
})

console.log(numbers_dsc);