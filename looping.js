const friends = ["Alvi", "Sabit", "Mamun", "Sifat"];

for(const friend of friends){
    // console.log(friend);
}

// for(let i = 0; i < friends.length; i++){
//     console.log(i);
//     console.log(friends[i]);
// }

// const numbers = [5, 23, 456, 421, 25, 4512, 54541, 21, 45, 6];

// for(i = 0; i < numbers.length; i++){
//     // console.log(i);
//     // console.log(numbers[i]);
// }

// let i = 0;
// while(i < numbers.length){
//     console.log(numbers[i]);
//     i++;
// }

// let i = 0;
// while(i < friends.length){
//     console.log(friends[i]);
//     i++;
// }

const numbers = [1, 2, 3, 4, 5, 6, 7];

// numbers.reverse();
// console.log(numbers);

const rev_numbers = [];
for(const num of numbers){
    // console.log(num);
    // rev_numbers.push(num);
    rev_numbers.unshift(num);
}
// console.log(rev_numbers);

const reversedNumbers = [];
for(let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    reversedNumbers.unshift(num);
}

const reverseNumber = [];
for(let i = numbers.length - 1; i >= 0; i--){
    const num = numbers[i];
    console.log(num);
    reverseNumber.push(num);
}
console.log(reverseNumber);