function logger(param: number) {
    //! decorator factory
  return function (constructor: Function) {
    console.log("Constructor => ", constructor);

    constructor.prototype.id = param;

    console.log(constructor.prototype.id);
  };
}

function insertInDOM(value: string) { 
    
    return function (target: Function) {
        console.log("Target => " , target);

        const rootElem = document.querySelector("#root")

        if (rootElem) {
            rootElem.innerHTML = value
        } else {
            throw new Error("Element Is NotDefined")
        }
    }
} 
@logger(18)
@insertInDOM("<h1>Hello Im Alireza Is The Best Ever !!</h1>")
class User {
  constructor(public name: string, public age: number, public email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  speak(word: string): void {
    console.log(`${this.name} says ${word}`);
  }
}

const ali = new User("alireza", 15, "AlirezadeveloperUi@gmail.com");
const komeyl = new User("kml", 9, "kml@gmail.com");