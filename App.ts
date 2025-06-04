let UserAge = 12; //! Type Inference
let UserName = "Alireza"; //! Type Inference

console.log(UserAge, UserName);

let userAge1: number = 18; //! Type Annotation
let username1: string = "Alireza"; //! Type Annotation

console.log(userAge1, username1);

//Bool Types

let isLogin = true; //! Type Inference
isLogin = false;
//! the bad code isLogin = ""

let se2: boolean = true; //! Type Annotation
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
const rules = ["alireza", 12];

const rules2: (string | { id: number; name: string })[] = [
  "alireza",
  {
    id: 1,
    name: "alireza",
  },
];

console.log(rules);
console.log(rules2[1]);

//! tuple

const rules3: [string, number] = ["Admin", 12]; //? Tuple Data Type A New Data In Ts

rules3.push("js");

const rules4: (string | number)[][] = [["alireza", 12]];

//! multi d arr

const isLoginFunc = (user: string, pass: string): boolean => {
  return user === "admin" && pass === "admin";
}; //! output require a bool type

console.log(isLoginFunc("admin", "admin"));

/////////////////

let variable: any = "js";
variable = 18;
variable = false || Boolean("00");

//////////////

//! union type

let variable2: string | number = "15";

variable2 = 15;

let variable3: string | number | boolean = "15";

variable3 = false;

///////////////////
//! Literal Type

let variable4: 18 | 19 | 20 = 18;

variable4 = 19;
variable4 = 20;

function setCssProperty(param: "px" | "rem" | "%") {
  //h1Elem.style.width = `12${param}`
  return `12${param}`;
}

console.log(setCssProperty("%"));

//! Template Literal Type
const num1 = 15;
const num2 = 20;
let variable5 = `sum : ${num1 + num2}`;

console.log(variable5);

const setCssProperty2 = (
  param: `${number}px` | `${number}rem` | `${number}%`
):string => {
  return param;
};

// console.log(setCssProperty2(`${12}px`));
console.log(setCssProperty2("12px"));