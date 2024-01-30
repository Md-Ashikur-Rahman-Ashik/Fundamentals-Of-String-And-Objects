const country = "Bangladesh";
const division = "Chattagram";
const district = `Cumilla`;
const thana = new String("Sadar South");

// console.log(typeof country);
// console.log(typeof division);
// console.log(typeof district);
// console.log(typeof thana);
// console.log(thana);

const numbers = [54, 98, 78, 21, 65];
// console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[0]);
// console.log(numbers[1]);
numbers[1] = 11;
// console.log(numbers);

const capital = "Dhaka";
// const capital = "Dha ka";
// console.log(capital);
// console.log(capital.length);
// console.log(capital[0]);
// console.log(capital[1]);
// console.log(capital[2]);
// console.log(capital[3]);
// capital[1] = "Q";
capital[0] = "F";
// console.log(capital);

const school = "Ispahani Public School & College";
// console.log(school);
// console.log(school.toLowerCase());
// console.log(school.toUpperCase());

const subject = "Chemistry";
const book = "chemistry";

// if (subject.toLowerCase() === book.toLowerCase()){
//     console.log("I am reading book");
// }
// else{
//     console.log("Nothing to say.");
// }

const drink = " Water";
const liquid = "Water   ";

if(drink.trim() === liquid.trim()){
    console.log("Drinking water is very much important for our body");
}
else{
    console.log("We can't drink salty water");
}