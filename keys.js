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
// console.log(college.specialty.result);
college.specialty.result.merit = "Top Top Top Most";
// console.log(college.specialty.result.merit);

// console.log(college.events);
college.events[1] = "16th December";
// console.log(college.events[1]);
delete college.class;
// console.log(college);

const mobile = {
    brand: "Samsung",
    price: 25000,
    color: "Black",
    camera: "12mp",
    isNew: true
}

for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}