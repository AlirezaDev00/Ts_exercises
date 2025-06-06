"use strict";
//! Public , Private , ReadOnly , Protected
//? Public = Read and write everywhere
//? Private = Just read and write in super or defined class
//? ReadOnly = Just read everywhere , can't write everywhere
//? Protected = Read and write just super class and sub class
class Person {
    name;
    job;
    age;
    // public name: string;
    // job: string; //* Public
    // readonly age: number = 18;
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
        (this.name = name), (this.age = age), (this.job = job);
    }
}
class Student extends Person {
    skills;
    constructor(name, job, age, skills) {
        super(name, job, age);
        this.skills = skills;
        // this.setAge(189)
    }
}
// const aliPerson = new Person("Alireza", "FrontEnd Developer", 16);
// console.log(aliPerson);
const aliStudent = new Student("Alireza", "Fullstack Developer", 16, [
    "React",
    "Tailwind",
    "Js",
    "Html",
    "Css",
]);
// aliStudent.age = 18
console.log(aliStudent);
console.log(aliStudent.age);
