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
function ToLowerCase(target, methodName, descriptor) {
    // console.log(target);
    // console.log(methodName);
    // console.log(descriptor);
    // console.log(descriptor.value);
    const mainMethod = descriptor.value;
    descriptor.value = function (param) {
        mainMethod.call(this, param);
    };
}
// @logger(18)
// @insertInDOM("<h1>Hello Im Alireza Is The Best Ever !!</h1>")
class User {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.name = name;
        this.age = age;
        this.email = email;
    }
    speak(word) {
        console.log(`${this.name} says ${word}`);
    }
}
__decorate([
    ToLowerCase,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], User.prototype, "speak", null);
const ali = new User("alireza", 15, "AlirezadeveloperUi@gmail.com");
const komeyl = new User("kml", 9, "kml@gmail.com");
ali.speak("Hello Ts");
//# sourceMappingURL=app.js.map