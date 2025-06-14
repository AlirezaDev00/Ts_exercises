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
    console.log("Target => ", target);

    const rootElem = document.querySelector("#root");

    if (rootElem) {
      rootElem.innerHTML = value;
    } else {
      throw new Error("Element Is NotDefined");
    }
  };
}

// function ToLowerCase(
//   target: object,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   // console.log(target);
//   // console.log(methodName);
//   // console.log(descriptor);
//   // console.log(descriptor.value);

//   const mainMethod = descriptor.value;

//   descriptor.value = function (param: string) {
//     mainMethod.call(this, param);
//   };
// }

// function ToUpperCase(
//   target: object,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   console.log(target);
//   console.log(methodName);

//   const mainMethod = descriptor.get;

//   descriptor.get = function () {
//     const res = mainMethod?.call(this);

//     return typeof res === "string" ? res.toUpperCase() : res;
//   };
// }

function MinLength(limit: number) {
  return function (target: object, propertyKey: string ) {
    console.log(target);
    console.log(propertyKey);
    console.log(limit);
    //! In this method, we only have access to the name and prototype of the class itself, but to change the properties and class, a library called Reflect Metadata must be used, which has additional explanations in the ts document.
  };


}

// @logger(18)
// @insertInDOM("<h1>Hello Im Alireza Is The Best Ever !!</h1>")
class User {
  @MinLength(3)
  public name: string;

  constructor(name: string, public age: number, public email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // @ToLowerCase
  speak(word: string): void {
    console.log(`${this.name} says ${word}`);
  }

  // @ToUpperCase
  get fullInfo() {
    return `${this.name} - ${this.age} - ${this.email}`;
  }
}

const ali = new User("alireza", 15, "AlirezadeveloperUi@gmail.com");
const komeyl = new User("kml", 9, "kml@gmail.com");
// console.log(ali.fullInfo);
// ali.speak("Hello Ts")
