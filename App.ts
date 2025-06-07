class Person {
  constructor(public name: string, public job: string, readonly age: number) {
    (this.name = name), (this.age = age), (this.job = job);
  }
}

class Student extends Person {
  private _skills: string[];

  constructor(name: string, job: string, age: number, skills: string[]) {
    super(name, job, age);
    this._skills = skills;
  }

  get getSkills() {
    return this._skills;
  }

  set setSkills(skill: string) {
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
