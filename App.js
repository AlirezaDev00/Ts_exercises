var sum = function (num1, num2) {
    return num1 + num2;
};
var logger = function (param) {
    console.log("Result: ".concat(param));
};
//! void => a function don't return a value
var logger2 = function (param) {
    console.log("Result: ".concat(param));
};
console.log(logger("Alireza(F.C.B)"));
console.log(logger2("Alireza(F.C.B)"));
//? both funcs return undefined but first func is void and second func is undefined output
