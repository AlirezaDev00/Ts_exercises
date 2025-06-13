type User = {
  name: string;
  age?: number;
  phone?: number;
  email: string;
};

type Type1 = string | boolean | number | null | undefined

type requiredUser = Required<User>;
type readOnlyUser = Readonly<User>;
type partialUser = Partial<User>;
type pickUser = Pick<User, "age" | "phone">
type Type2 = NonNullable<Type1>
type excludeType = Exclude<Type1, null | undefined | boolean | string>
type omitType = Omit<User , "name" | "email" | "phone"> 

const user1: requiredUser = {
  email: "alirezadeveloperui@gmail.com",
  name: "Alireza",
  age: 17,
  phone: +980101010101,
};

const user2: readOnlyUser = { name: "alireza", email: "alireza@gmail.com" };
// user2.name = "1alireza"
console.log(user2.name);

const user3: partialUser = {};

const user4: pickUser = {phone : +980101010101 , age : 17};

// const var1: Type2 = null
// const var1: Type2 = undefined
const var1: Type2 = 12

// const var2: excludeType = "12"
// const var2: excludeType = true
// const var2: excludeType = null , ....
const var2: excludeType = 12

// const user5: omitType = {age: 17 , name: "alireza"}
const user5: omitType = { age: 17 }

//* 2

type names = "alireza" | "komeyl" | "mojtaba" | "marzie"
type person = { name: string, age: number, email: string }

type recordType = Record<names, person>

const user6 : recordType = {
    "alireza" : {name : "Alireza" , age : 17 , email: "alirezadeveloperui@gmail.com"},
    "komeyl" : {name : "Komeyl" , age : 9 , email: "0101010101@gmail.com"},
    "mojtaba" : {name : "Mojtaba" , age : 47 , email: "1515151515@gmail.com"},
    "marzie" : {name : "Marzie" , age : 48 , email: "156891868@gmail.com"},
}