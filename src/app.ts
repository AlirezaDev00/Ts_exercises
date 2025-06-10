// let car = "pride"
// let  car = "BugattiChiron"

namespace Bugatti {
  export let car = "BugattiChiron"

  export class Body {
    constructor(public name : string , public color : string) {
      this.name = name
      this.color = color
    }

    make() {
      console.log("Car Created Successfully");
    }
  }
}

namespace Saipa {
  export let car = "pride"
}

console.log(Saipa.car);
console.log(Bugatti.car);

const BugattiChiron = new Bugatti.Body("BugattiChiron", "White-Blue")
console.log(BugattiChiron);
BugattiChiron.make()