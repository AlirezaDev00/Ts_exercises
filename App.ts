const sum = (num1: number, num2: number): number => {
  return num1 + num2
}

const logger = (param) => {
  console.log(`Result : ${param}`);
}

// let testFunc : Function;
let testFunc : (num1 : number , num2: number) => number ;
testFunc = sum

//! testFunc = logger

// ! testFunc = 20

console.log(sum(12, 18));
console.log(testFunc(12 , 18));