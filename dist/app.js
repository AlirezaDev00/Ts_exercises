"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function logger(param) {
    //! decorator factory
    return function (constructor) {
        console.log("Constructor => ", constructor);
        constructor.prototype.id = param;
        console.log(constructor.prototype.id);
    };
}
function insertInDOM(value) {
    return function (target) {
        console.log("Target => ", target);
        const rootElem = document.querySelector("#root");
        if (rootElem) {
            rootElem.innerHTML = value;
        }
        else {
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
function MinLength(limit) {
    return function (target, propertyKey) {
        console.log(target);
        console.log(propertyKey);
        console.log(limit);
        //! In this method, we only have access to the name and prototype of the class itself, but to change the properties and class, a library called Reflect Metadata must be used, which has additional explanations in the ts document.
    };
}
// @logger(18)
// @insertInDOM("<h1>Hello Im Alireza Is The Best Ever !!</h1>")
class User {
    age;
    email;
    name;
    constructor(name, age, email) {
        this.age = age;
        this.email = email;
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // @ToLowerCase
    speak(word) {
        console.log(`${this.name} says ${word}`);
    }
    // @ToUpperCase
    get fullInfo() {
        return `${this.name} - ${this.age} - ${this.email}`;
    }
}
__decorate([
    MinLength(3),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
const ali = new User("alireza", 15, "AlirezadeveloperUi@gmail.com");
const komeyl = new User("kml", 9, "kml@gmail.com");
// console.log(ali.fullInfo);
// ali.speak("Hello Ts")
//# sourceMappingURL=app.js.map