const sum = (num1: number, num2: number): number => {
  return num1 + num2
}

const logger = (param) => {
  console.log(`Result: ${param}`);
}

//! void => a function don't return a value

const logger2 = (param): undefined => {
  console.log(`Result: ${param}`);
}

console.log(logger("Alireza(F.C.B)"));
console.log(logger2("Alireza(F.C.B)"));

//? both funcs return undefined but first func is void and second func is undefined output