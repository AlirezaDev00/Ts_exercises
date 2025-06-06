"use strict";
class Person {
    name;
    job;
    age;
    constructor(name, job, age) {
        (this.name = name), (this.age = age), (this.job = job);
    }
}
class Student extends Person {
    skills;
    constructor(name, job, age, skills) {
        super(name, job, age);
        this.skills = skills;
    }
}
const aliPerson = new Person("Alireza", "FrontEnd Developer", 16);
console.log(aliPerson);
const aliStudent = new Student("Alireza", "Fullstack Developer", 16, [
    "React",
    "Tailwind",
    "Js",
    "Html",
    "Css",
]);
console.log(aliStudent);
