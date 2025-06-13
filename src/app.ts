interface User {
    name: string,
    email: string,
    age : number
}

// interface OptionalUser {
//     username?: string
//     email?: string
// }

// const aliUser: User = { name: "Alireza", email: "alirezadeveloperui@gmail.com", age: 16 }
// const aminUser : OptionalUser = {}

// type OptionalUser = {
//     [key in keyof User]?: User[key]
// }

type Optional<T> = {
    [key in keyof T]?: T[key]
}

type ReadOnly = {
    readonly [key in keyof User]: User[key]
}

const ali : User = {name: "Alireza" , age : 16 , email : "alireza@gmail.com"}
// const aliOptional : OptionalUser = {name: "Alireza"}
const aliOptional : Optional<User> = {name: "Alireza"}
const aliReadOnly: ReadOnly = { name: "Alireza", age: 17, email: "alirezadeveloperui@gmail.com" }

// aliReadOnly.age = 18
// console.log(aliReadOnly.age);

//* 2
type NullableUser = {
    [key in keyof User] : User[key] | null
}

//* 3

type OptionalReadOnly<T> = {
    readonly [key in keyof T]?: T[key] | null
}

const aliUser: OptionalReadOnly<User> = { name: "Alireza" , age: null }
// aliUser.name = "ALireza"
// aliUser.age = 189
console.log(aliUser.name);
console.log(aliUser.age);