"use strict";
class Car {
    name;
    color;
    model;
    constructor(name, color, model) {
        this.name = name;
        this.color = color;
        this.model = model;
        this.name = name;
        this.color = color;
        this.model = model;
    }
    drive(speed) {
        console.log(`this Car can drive with ${speed}(km/h)`);
    }
}
class Truck extends Car {
    name;
    color;
    model;
    constructor(name, color, model) {
        super(name, color, model);
        this.name = name;
        this.color = color;
        this.model = model;
    }
    load(weight) {
        console.log(`Loaded ${weight}(kg)`);
    }
}
const logger = (car) => {
    if (car instanceof Truck) {
        car.load(500);
    }
    else if (car instanceof Car) {
        car.drive(450);
    }
};
const bugattiChiron = new Car("Bugatti", "White-Blue", "Chiron SuperSport");
const NH12 = new Truck("Volvo", "White", "NH12");
// logger(bugattiChiron)
logger(NH12);
//# sourceMappingURL=app.js.map