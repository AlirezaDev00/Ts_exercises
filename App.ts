class Person {
  name: string;
  job: string;
  age: number;

  constructor(name: string, job: string, age: number) {
    (this.name = name), (this.age = age), (this.job = job);
  }
}

class Student extends Person {
  skills: string[];

  constructor(name: string, job: string, age: number, skills: string[]) {
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

