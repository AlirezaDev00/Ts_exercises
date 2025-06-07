"use strict";
const bugattiChiron = {
    company: "Bugatti(FoloxWagon)",
    color: "White-Blue",
    year: 2028,
    model: "Chiron",
    passengers: 2,
    material: "FiberCarbon",
    drive(speed) {
        console.log(`This Car Can Driving With ${speed}km/h speed!`);
    },
    stop() {
        console.log(`This Car ${this.company} Stopped!`);
    },
};
class BugattiTourbilon {
    company;
    color;
    year;
    model;
    passengers;
    material;
    Torbou;
    constructor(company, color, year, model, passengers, material, Torbou) {
        this.company = company;
        this.color = color;
        this.year = year;
        this.model = model;
        this.passengers = passengers;
        this.material = material;
        this.Torbou = Torbou;
        (this.company = company), (this.color = color);
        (this.year = year),
            (this.model = model),
            (this.passengers = passengers),
            (this.material = material),
            (this.Torbou = Torbou);
    }
    drive(speed) {
        console.log(`This Car Can Drive With ${speed}km/h Speed!`);
    }
    stop() {
        console.log(`This Car ${this.company} Stopped!`);
    }
}
const BugattiTourbilon1 = new BugattiTourbilon("Bugatti", "Silver-Blue", 2030, "TourBillon", 2, "FiberCarbon", true);
console.log(BugattiTourbilon1);
BugattiTourbilon1.drive(450);
BugattiTourbilon1.stop();
//# sourceMappingURL=app.js.map