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
function logger(constructor) {
    console.log("Constructor => ", constructor);
    constructor.prototype.id = crypto.randomUUID();
    console.log(constructor.prototype.id);
}
let User = class User {
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
};
User = __decorate([
    logger,
    __metadata("design:paramtypes", [String, Number, String])
], User);
const ali = new User("alireza", 15, "AlirezadeveloperUi@gmail.com");
const komeyl = new User("kml", 9, "kml@gmail.com");
//# sourceMappingURL=app.js.map