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
console.log(bugattiChiron);
bugattiChiron.drive(450);
bugattiChiron.stop();
//# sourceMappingURL=app.js.map