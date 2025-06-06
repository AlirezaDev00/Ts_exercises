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
