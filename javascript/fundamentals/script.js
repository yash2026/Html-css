// let js = "maze";
// if (js === "maze") console.log("Javascript is fun");

// console.log("Yash");
// let naMe = "Yash 1";
// console.log(naMe);

// // text in the next line can be print in es6 using below format
// console.log(
//   "String with \n\
// multiple \n\
// line"
// );

// const age = 19;
// const isOldenough = age >= 18;

// if (isOldenough) {
//   console.log("Sarah can drive👍");
// }

function logger() {
  console.log("My name is Yash");
}

//calling / running / invoking function
logger();

// function declaration
const age = calcage1(2000); // we can write it before the function declaration but it is not advisable

function calcage1(birthyear) {
  return 2024 - birthyear;
}
console.log("Age is :", age);

// function expression
const age2 = function (birthyear) {
  return 2024 - birthyear;
};
const age3 = age2(2000); // we can not write it before the function expression bcoz of hoisting

console.log(age, age3);

// Arrow function

const calage3 = (birthyear) => 2024 - birthyear;
console.log(calage3(2000));
const age4 = calage3(2001);
console.log(age4);

const yearsUntilRetirement = (birthYear, firstName) => {
  const retirement = 2050 - birthYear;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(200, "Yash"));
console.log(yearsUntilRetirement(2000, "Yashpal"));

//  function calling other function

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitSelector(apples, oranges) {
  // console.log(apples, oranges);
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitSelector(2, 3));
