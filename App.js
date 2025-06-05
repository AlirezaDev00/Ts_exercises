var sum = function (num1, num2, callback) {
    var result = num1 + num2;
    callback(result);
};
console.log(sum(36, 21, function (result) {
    console.log("Result : ".concat(result));
}));
