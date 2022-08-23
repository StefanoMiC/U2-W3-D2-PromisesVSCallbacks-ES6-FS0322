//DEFAULT PARAMETERS

const sum = (n1, n2 = 2) => n1 + n2;
// const sum = (n1, n2) => {
//   if (!n2) {
//     n2 = 2;
//   }

//   n1 + n2;
// };
console.log(sum(1, 5));

const search = (query = "nature") => {
  console.log("https://endpoint.com/search?q=" + query);
};

search();
search("tech");

// REST PARAMETERS

const withRestParams = (param1, param2, param3, ...rest) => {
  console.log(param1);
  console.log(param2);
  console.log(param3);
  console.log(rest);
};

withRestParams(1, 5, 10, 99, 105, 0);

// TERNARY OPERATOR

let studName = "Paul";
// let isAdmitted = false;

// if (studName !== "John") {
//   isAdmitted = true;
// } else {
//   isAdmitted = false;
// }

let isAdmitted = studName !== "John" ? true : false;

console.log(isAdmitted);

// DESTRUCTURING

const obj = {
  name: "Alessandro",
  specialty: "sidekick",
  location: { area: { country: "Italy" } },
};

// const name = obj.name;
// const specialty = obj.specialty;
// const country = obj.location.area.country;

const {
  name,
  specialty,
  location: {
    area: { country },
  },
} = obj;
console.log(name, country);

// DESTRUCTURING FUNCTION PARAMETERS

const personObj = {
  name: "Stefano",
  lastName: "Miceli",
  region: { area: "FVG" },
  role: "Teacher",
};

const person = ({ name, lastName, region: { area }, role }) => {
  console.log(name);
  console.log(lastName);
  console.log(area);
  console.log(role);
};

person(personObj);

//DESTRUCTURING FOR ARRAYS

const randomArr = ["a", "b", "c", "d", "e", "f"];

// const fourth = randomArr[3]

const [first, , , fourth, ...rest] = randomArr;

console.log(first);
console.log(fourth);
console.log(rest);

//SPREAD OPERATOR
// FOR OBJs

const student = {
  name: "Davide",
  kudos: 500,
  planet: "Earth",
};

const student2 = {
  name: "Alessio",
  kudos: 45,
  street: "whatever st.",
};

// const student3 = Object.assign({}, student);
const student3 = { ...student, name: "Stefano", phone: 23189128 };
const student4 = { ...student2, ...student, name: "Paul", planet: "Mars" };
// student3.name = "Stefano"
// delete student3.planet
console.log(student4);

// FOR ARRAYS
const newArrayCopied = [...randomArr];
newArrayCopied.pop();
newArrayCopied.pop();
newArrayCopied.pop();
console.log(newArrayCopied);
console.log(randomArr);

// FOR STRINGS

const word = "We are at Epicode!";
const arrayOfCharacters = [...word];
console.log(arrayOfCharacters.join(""));
