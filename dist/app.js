"use strict";
class Person {
    name;
    job;
    age;
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
        (this.name = name), (this.age = age), (this.job = job);
    }
    info() {
        return `${this.name} (Info) (Person)`;
    }
}
class Student extends Person {
    _skills;
    constructor(name, job, age, skills) {
        super(name, job, age);
        this._skills = skills;
    }
    get getSkills() {
        return this._skills;
    }
    set setSkills(skill) {
        this._skills.push(skill);
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
aliStudent.setSkills = "Python";
console.log(aliStudent.getSkills);
console.log(aliStudent);
//* Static
class Home {
    name;
    location;
    static count = 0;
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.location = location;
        this.name = name;
        ++Home.count;
    }
    static get getCount() {
        // this.static
        return `Count : ${Home.count}`;
    }
}
// const aliHome = new Home("Diamond", "Karaj , Loqman Hakim Street, Bon JavadPoor")
// const aliHome2 = new Home("Diamond", "Karaj , Loqman Hakim Street, Bon JavadPoor")
// // aliHome.count
// // aliHome.getCount
// // console.log(Home.count);
// console.log(Home.getCount);
console.log(aliStudent.info());
//# sourceMappingURL=app.js.map