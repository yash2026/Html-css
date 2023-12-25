// const markMass = 78;
// const johnMass = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

const markMass = 95;
const johnMass = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

const BMImark = markMass / markHeight ** 2;
const BMIjohn = johnMass / johnHeight ** 2;
console.log(BMImark, BMIjohn);

// console.log(
//   "BMI of Mark:",
//   markMass / markHeight ** 2,
//   "BMI of John:",
//   johnMass / johnHeight ** 2
// );

// console.log(
//   "Mark heigher is ",
//   markMass / markHeight ** 2 > johnMass / johnHeight ** 2
// );

if (BMImark > BMIjohn) {
  console.log(`Mark's BMI(${BMImark}) is higher than John's BMI(${BMIjohn}).`);
} else {
  console.log(`John's BMI(${BMIjohn}) is higher than Mark's!(${BMImark})`);
}

const inputYear = "1991";
console.log(inputYear + 18);
console.log(Number(inputYear) + 18, inputYear);
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "3");
console.log("23" / "2");
