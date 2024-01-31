const address = "Palestine";
const part = address.slice(2, 5);
// console.log(part);

// const sentence = "I am a hardworking person.";
// console.log(sentence);
// console.log(sentence.slice());
// console.log(sentence.split());
// console.log(sentence.split(""));
// console.log(sentence.split(" "));
// console.log(sentence.split("a"));

const friendsStr = "Alvi, Sabit, Mamun, Shanto, Sifat, Ratul";
const friends = friendsStr.split(",");
// console.log(friends);

const realFriends = [ 'Alvi', ' Sabit', ' Mamun', ' Shanto', ' Sifat', ' Ratul' ];
// console.log(realFriends);
// console.log(realFriends.join());
// console.log(realFriends.join("|"));
// console.log(realFriends.join("-"));

const first = "Alvi";
const last = "Sabit";
const fullName = first + " " + last;
// console.log(fullName);

const secondFullName = first.concat(" ").concat(last);
// console.log(secondFullName);
// console.log(last.includes("d"));

let reverse = "";
const sentence = "I want to learn Web Dev.";
for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);

let rev = "";
for(let i = 0; i < sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}
// console.log(rev);

// const reversed = sentence;
const reversed = sentence.split("").reverse().join("");
console.log(reversed);