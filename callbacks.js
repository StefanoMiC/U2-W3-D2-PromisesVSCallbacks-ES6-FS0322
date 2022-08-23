const sum = 2 + 3;

const sum2 = () => 6 - 1;

console.log(sum2);

const sayHi = str => console.log("Hi " + str);
const sayBye = str => console.log("It's late, see you another time " + str);

const greetWithEnthusiasm = (str, callback) => {
  const enthusiasmStr = str + "!!!";

  callback(enthusiasmStr); // sayHi(enthusiasmStr), sayBye(enthusiasmStr)
};

greetWithEnthusiasm("Stefano", sayHi);
greetWithEnthusiasm("Paul", sayBye);
greetWithEnthusiasm("Komilov", str => console.log("Hey again, " + str));

const animals = ["cat", "dog", "horse", "rabbit", "duck", "mouse", "lizzard", "goldfish", "bird"];

const displayAnimal = string => {
  console.log("I looked in the had and found a... " + string);
};
const displayAnimal2 = (string, num) => {
  console.log(num + " - What a nice " + string + "!");
};
// displayAnimal(animals[8]);

const getRandomAnimal = (array, callback) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const selectedAnimal = array[randomIndex];

  callback(selectedAnimal); //undefined(selectedAnimal), displayAnimal(selectedAnimal), displayAnimal2(selectedAnimal), ((string) => console.log("I love " + string + "s"))(selectedAnimal)
};

getRandomAnimal(animals, displayAnimal);
getRandomAnimal(animals, string => displayAnimal2(string, 302));
getRandomAnimal(animals, string => console.log("I love " + string + "s"));
