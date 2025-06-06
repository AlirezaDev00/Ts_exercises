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


const testPerson: Person = { name: "Test", age: 18, job: "FullStack Developer" }

console.log(testPerson);

const users: Person[] = [
    aliPerson, 
    testPerson,
    {name: "Alirezads" , job: "BackEnd Developer" , age: 198}
]

console.log(users);