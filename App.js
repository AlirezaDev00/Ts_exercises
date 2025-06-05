var sum = function (num1, num2) {
    return num1 + num2;
};
var logger = function (param) {
    console.log("Result : ".concat(param));
};
// let testFunc : Function;
var testFunc;
testFunc = sum;
//! testFunc = logger
// ! testFunc = 20
console.log(sum(12, 18));
console.log(testFunc(12, 18));
