"use strict";
class Person {
    name;
    job;
    age;
    constructor(name, job, age) {
        (this.name = name), (this.age = age), (this.job = job);
    }
}
const aliPerson = new Person("Alireza", "FrontEnd Developer", 16);
console.log(aliPerson);
const testPerson = { name: "Test", age: 18, job: "FullStack Developer" };
console.log(testPerson);
const users = [
    aliPerson,
    testPerson,
    { name: "Alirezads", job: "BackEnd Developer", age: 198 }
];
console.log(users);
