//! const assertion(const casting)

//* way 1 
// const num1 = 12;
//* way 2
// let num1: 12 = 12;
//* way 3
// let num1 = 12 as const

//! num1 = 13 =>  error in vscode or ts

// const users = [12, 13]
// users.push(15)
// const numbers = [12, 13] as const
//! users.push(15) => error in vscode or ts
// const user = {
//   id: 1,
//   name : "Alireza"
// }

// user.id = 15
// user.name = "F.C.B" => not error in vscode or ts

const user = {
  id: 1,
  name : "Alireza"
} as const

//! user.id = 18 not error in vscode or ts

// const numbers = [12 , 13]

// const sum = (num1: number, num2: number): number => {
//   return num1 + num2
// }

//! console.log(sum(...numbers)); => error in vscode or ts

const numbers = [12 , 13] as const

const sum = (num1: number, num2: number): number => {
  return num1 + num2
}

console.log(sum(...numbers));

//example 2
// const faves = ["Coding" , "Boxing" , "Trading" , "Family"]

// const user2 = {
//   id: 1,
//   name: "Alireza",
//   age: 16,
//   faves
// } as const

//! user2.faves.push("js") not error in vscode or ts

const faves = ["Coding" , "Boxing" , "Trading" , "Family"] as const

const user2 = {
  id: 1,
  name: "Alireza",
  age: 16,
  faves
} as const

//! user2.faves.push("js") => error in vscode or ts

//* example 3

// const actions = [
//   { type: "Add Todo" },
//   { type: "Remove Todo" },
// ]

// for (const action of actions) {
//   if (action.type === "Created") {
//     console.log("Added");
//   } else {
//     console.log("Removed");
//   }
//! } => Not Error In Vscode And Ts


// const actions = [
//   { type: "Add Todo" },
//   { type: "Remove Todo" }
// ] as const

// for (const action of actions) {
//   if (action.type === "Created") {
//     console.log("Added");
//   } else {
//     console.log("Removed");
//   }
//! } => error in vscode and Ts