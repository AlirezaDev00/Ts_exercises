//! Public , Private , ReadOnly , Protected

//? Public = Read and write everywhere
//? Private = Just read and write in super or defined class
//? ReadOnly = Just read everywhere , can't write everywhere
//? Protected = Read and write just super class and sub class
class Person {
  // public name: string;
  // job: string; //* Public
  // readonly age: number = 18;

   constructor(public name: string, public job: string, readonly age: number) {
    (this.name = name), (this.age = age), (this.job = job);
  }

  // setAge(userAge : number) {
  //   this.age = userAge
  // }
}

class Student extends Person {
  private _skills: string[];

  constructor(name: string, job: string, age: number, skills: string[]) {
    super(name, job, age);
    this._skills = skills;

  }

  get getSkills() {
    return this._skills
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

// aliStudent.age = 18
// console.log(aliStudent);
// console.log(aliStudent.age);

console.log(aliStudent.getSkills);

