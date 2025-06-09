class Car{
  constructor(public name: string, public color: string, public model: string) {
    this.name = name
    this.color = color 
    this.model = model
  }

  drive(speed: number) {
    console.log(`this Car can drive with ${speed}(km/h)`);
  }
}

class Truck extends Car {
  constructor(public name : string , public color : string , public model : string) {
    super(name , color , model)
  }

  load(weight : number) {
    console.log(`Loaded ${weight}(kg)`); 
  }
}

const logger = (car: Car | Truck) => {
  if (car instanceof Truck) {
    car.load(500)
  } else if (car instanceof Car) {
    car.drive(450)
  }
}

const bugattiChiron = new Car("Bugatti", "White-Blue", "Chiron SuperSport")

const NH12 = new Truck("Volvo", "White", "NH12")

// logger(bugattiChiron)
logger(NH12)