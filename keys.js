const computer = {
    brand: "Walton",
    price: 35000,
    processor: "AMD",
    sdd: "256gb",
    monitor: "SkyView"
}

const keys = Object.keys(computer);
// console.log(keys);

const values = Object.values(computer);
// console.log(values);

const college = {
    name: "IPSC",
    class: ["11", "12"],
    events: ["Science fair", "Victory Day", "21st February"],
    specialty: {
        color: "Blue",
        result: {
            gpa: 5,
            merit: "top",
        }
    }
}

// console.log(college.name);
// console.log(college.specialty);
// console.log(college.specialty.color);
console.log(college);