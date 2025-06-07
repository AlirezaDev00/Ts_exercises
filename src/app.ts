interface car {
  company: string;
  color: string;
  year: number;
  model: string;

  drive(speed: number): void;
  stop(): void;
}

interface bugatti extends car {
  passengers: number;
  material: string;
}

const bugattiChiron: bugatti = {
  company: "Bugatti(FoloxWagon)",
  color: "White-Blue",
  year: 2028,
  model: "Chiron",
  passengers: 2,
  material: "FiberCarbon",
  drive(speed: number) {
    console.log(`This Car Can Driving With ${speed}km/h speed!`);
  },
  stop() {
    console.log(`This Car ${this.company} Stopped!`);
  },
};

console.log(bugattiChiron);
bugattiChiron.drive(450)
bugattiChiron.stop()