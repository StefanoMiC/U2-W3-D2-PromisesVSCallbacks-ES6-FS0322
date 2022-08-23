const myPromise = () =>
  new Promise((resolve, reject) => {
    const promiseTime = Math.floor(Math.random() * 4000);

    setTimeout(() => {
      resolve("Success!!!! " + promiseTime);
    }, promiseTime);
  });

// myPromise().then(value => console.log(value));

const rollTheDice = () =>
  new Promise((resolve, reject) => {
    const promiseTime = Math.floor(Math.random() * 4000);

    setTimeout(() => {
      const randNum = Math.floor(Math.random() * 10);
      if (randNum <= 6) {
        resolve("We've got a winner! And the number is: " + randNum + ", it took: " + promiseTime / 1000 + "s");
      } else {
        reject("You lose. The number " + randNum + " is too high!" + ", it took: " + promiseTime / 1000 + "s");
      }
    }, promiseTime);
  });

// rollTheDice()
//   .then(successMessage => console.log("SUCCESS MESSAGE:", successMessage))
//   .catch(rejectMessage => console.log("REJECT MESSAGE:", rejectMessage));

const timer = ms =>
  new Promise((resolve, reject) => {
    if (ms) {
      setTimeout(() => resolve(), ms);
    } else {
      reject("provide a correct time in milliseconds");
    }
  });

// timer(1000)
//   .then(() => {
//     console.log("Resolved in 1s");
//     return timer(3000);
//   })
//   .then(() => console.log("Resolved in 4s"))
//   .then(() => timer(2000))
//   .then(() => console.log("Resolved in 6s"))
//   .catch(err => console.log("Error happened:", err));

const animals = ["cat", "dog", "horse", "rabbit", "duck", "mouse", "lizzard", "goldfish", "bird"];

// const forEach = (array, callback) => {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     callback(element);
//   }
// };

// forEach(animals, element => console.log("<<" + element + ">>"));

animals.forEach(element => console.log("<<" + element + ">>"));

newFunc();

function newFunc() {
  console.log("normal function definition");
}

const newFunc2 = function () {
  console.log("anonymous function expression");
};
newFunc2();

const newFunc3 = () => console.log("arrow function expression");
newFunc3();

// THIS

const myObject = {
  name: "John",
  jobs: ["freelancer", "teacher", "designer", "photographer"],
  myMethod: function () {
    console.log("OUTER THIS", this); // myObject obj

    // this.jobs.forEach(function (job) {
    //   console.log(this);
    //   console.log(`${this.name} is a ${job}`);
    // });
    // this.jobs.forEach(job => {
    //   console.log(this);
    //   console.log(`${this.name} is a ${job}`);
    // });

    setTimeout(() => {
      console.log("Inner THIS", this);
      console.log(this.name);
    }, 1000);
  },
};

const myObject2 = {
  name: "John",
  myMethod: () => {
    console.log("THIS", this); // GlOBAL obj
  },
};

myObject.myMethod();

// CONSTRUCTOR FUNCTIONS
function Person(name, age) {
  console.log("THIS", this);
  this.name = name;
  this.age = age;
}
const Person2 = (name, age) => {
  console.log("THIS", this);
  this.name = name;
  this.age = age;
};

const teacher = new Person("Stefano", 33);
