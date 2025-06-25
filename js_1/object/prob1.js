// object ->

// data will store in key value pair

// syntex obj = { key : el, key: el}

// let name = ["A","B", "C"]
// let marks = [55,45,75]

let data = {
  A: 45,
  B: 75,
  C: 55,
};

// How to access

// bracket notation    dot notation

// console.log(data["A"])

let details = {
  name: "Aman",
  age: 45,
  location: "Manali",
  hobbies: ["Biking", "Graphic Novels"],
  marks: {
    maths: 75,
    englis: 88,
    EVS: 95,
  },
};


// console.log(details.marks.EVS)
// Access the value at a particular key
//1. Bracket Notation
//array ==> details[0];
// console.log(details["name"], details["age"]);

//2. Dot Notation
let a = details.hobbies[1];
// console.log(a);
