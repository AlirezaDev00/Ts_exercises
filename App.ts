let test: unknown = "Alireza"

let logo_title = test as string
let site_title = <string>test

console.log((<string>test).length);

let num1: unknown = "12"
let num2: unknown = "8"

console.log((num1 as number) + (num2 as number)); // 128 
