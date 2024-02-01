// const age = 21;
const school = "IPSC";
const isPassed = true;
let isDeveloper;
const subjects = ["Bangla", "English", "Physics", "Math"];
const wrongBottle = ["Water", 45];
const bottleColor = "White";
const bottlePrice = 45;
const bottleDrinks = "Water";

// console.log(isDeveloper);

const bottle = {
    brand: "Apple",
    price: 45,
    color: "White",
    isClean: false
}

const subject = {
    name: "Biology",
    teacher: "Salma Mam",
    examDate: "30 Feb",
    chapters: ["First", "Second", "Third"],
    exams: {
        name: "Final Exam",
        marks: 100
    }
}

const person = {
    name: "Al Sahaf Sifat",
    age: 25,
    profession: "Developer",
    salary: 25000,
    isMarried: false,
    "Favorite places": ["Palestine", "Afganistan", "Saudi Arabia"]
}

person.salary = 30000;
person["age"] = 26;
person["Favorite places"] = ["Palestine", "Turkiye", "South Africa"];

// console.log(person.profession);
// const salary = person.salary;
// console.log(salary);
// console.log(person["age"]);
// const age = person["age"];
// console.log(age);
// console.log(person["Favorite places"]);

const keyName = "profession"
// console.log(person[keyName]);

const propName = "profession"
person[propName] = "DevOps"
console.log(person);