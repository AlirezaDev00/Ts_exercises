"use strict";
// let car = "pride"
// let  car = "BugattiChiron"
var Bugatti;
(function (Bugatti) {
    Bugatti.car = "BugattiChiron";
    class Body {
        name;
        color;
        constructor(name, color) {
            this.name = name;
            this.color = color;
            this.name = name;
            this.color = color;
        }
        make() {
            console.log("Car Created Successfully");
        }
    }
    Bugatti.Body = Body;
})(Bugatti || (Bugatti = {}));
var Saipa;
(function (Saipa) {
    Saipa.car = "pride";
})(Saipa || (Saipa = {}));
console.log(Saipa.car);
console.log(Bugatti.car);
const BugattiChiron = new Bugatti.Body("BugattiChiron", "White-Blue");
console.log(BugattiChiron);
BugattiChiron.make();
//# sourceMappingURL=app.js.map