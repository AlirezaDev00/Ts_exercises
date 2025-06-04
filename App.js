var UserAge = 12; //! Type Inference
var UserName = "Alireza"; //! Type Inference
console.log(UserAge, UserName);
var userAge1 = 18; //! Type Annotation
var username1 = "Alireza"; //! Type Annotation
console.log(userAge1, username1);
//Bool Types
var isLogin = true; //! Type Inference
isLogin = false;
//! the bad code isLogin = ""
var se2 = true; //! Type Annotation
se2 = false;
se2 = Boolean("15");
console.log(se2);
////////////
// const user = {
//     id: 12,
//     name: "Alireza"
// }
// const user: object = {
//     id: 13,
//     name : "Alireza"
// }
// const user: { id: number; name: string; arr: ([string, number] | number)[] } = {
//   id: 15,
//   name: "Alireza",
//   arr: [12, ["sljsdflk", 15], ["admin", 1]],
// };
// user.id = 1587;
// console.log(user);
// console.log(user.id);
///////////
var rules = ["alireza", 12];
var rules2 = [
    "alireza",
    {
        id: 1,
        name: "alireza",
    },
];
console.log(rules);
console.log(rules2[1]);
//! tuple
var rules3 = ["Admin", 12]; //? Tuple Data Type A New Data In Ts
rules3.push("js");
var rules4 = [["alireza", 12]];
//! multi d arr
var isLoginFunc = function (user, pass) {
    return user === "admin" && pass === "admin";
}; //! output require a bool type
console.log(isLoginFunc("admin", "admin"));
/////////////////
var variable = "js";
variable = 18;
variable = false || Boolean("00");
//////////////
//! union type
var variable2 = "15";
variable2 = 15;
var variable3 = "15";
variable3 = false;
///////////////////
//! Literal Type
var variable4 = 18;
variable4 = 19;
variable4 = 20;
function setCssProperty(param) {
    //h1Elem.style.width = `12${param}`
    return "12".concat(param);
}
console.log(setCssProperty("%"));
//! Template Literal Type
var num1 = 15;
var num2 = 20;
var variable5 = "sum : ".concat(num1 + num2);
console.log(variable5);
var setCssProperty2 = function (param) {
    return param;
};
// console.log(setCssProperty2(`${12}px`));
console.log(setCssProperty2("12px"));
