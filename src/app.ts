abstract class Person {
  constructor(public name: string, public job: string, readonly age: number) {
    (this.name = name), (this.age = age), (this.job = job);
  }

  abstract info():string
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

  info(): string {
      return `${this.name} as (Student)`
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

aliStudent.setSkills = "Python";

console.log(aliStudent.getSkills);

console.log(aliStudent);

//* Static

class Home {
  private static count: number = 0;

  constructor(public name: string, public location: string) {
    this.location = location;
    this.name = name;
    ++Home.count;
  }

  public static get getCount() {
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

