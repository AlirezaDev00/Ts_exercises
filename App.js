//! any
// let variable: any = 15
// variable = false
// variable++
// variable.length
// variable.push("alireza")
// console.log(variable.length);
//! top code not has error in vscode
//! feature of any type
//! Unknown
var number = 12;
// number++
// number.push("asfsadf")
// console.log(number.length);
//! top code has error in vscode
if (typeof number === "number") {
    console.log(++number);
}
number = "Alireza";
if (typeof number === "string") {
    console.log(number.length);
}
