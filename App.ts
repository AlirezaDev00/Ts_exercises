class Person {
  name: string;
  job: string;
  age: number;

  constructor(name: string, job: string, age: number) {
    (this.name = name), (this.age = age), (this.job = job);
  }
}

const aliPerson = new Person("Alireza", "FrontEnd Developer", 16);


console.log(aliPerson);
