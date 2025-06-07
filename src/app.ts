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

class BugattiTourbilon implements bugatti {
  constructor(
    public company: string,
    public color: string,
    public year: number,
    public model: string,
    public passengers: number,
    public material: string,
    public Torbou: boolean
  ) {
    (this.company = company), (this.color = color);
    (this.year = year),
      (this.model = model),
      (this.passengers = passengers),
      (this.material = material),
      (this.Torbou = Torbou);
  }

  drive(speed: number): void {
    console.log(`This Car Can Drive With ${speed}km/h Speed!`);
  }

  stop() {
    console.log(`This Car ${this.company} Stopped!`);
  }
}

const BugattiTourbilon1 = new BugattiTourbilon(
  "Bugatti",
  "Silver-Blue",
  2030,
  "TourBillon",
  2,
  "FiberCarbon",
  true
);

console.log(BugattiTourbilon1);
BugattiTourbilon1.drive(450)
BugattiTourbilon1.stop()