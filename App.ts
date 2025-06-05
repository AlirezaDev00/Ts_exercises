const sum = (
  num1: number,
  num2: number,
  callback: (result: number) => void
): void => {

  const result = num1 + num2;
  
  callback(result)
};

console.log(sum(36, 21, (result) => {
  console.log(`Result : ${result}`);
}));
