function logger(constructor: Function) {
    console.log("Constructor => ", constructor);
    
    constructor.prototype.id = crypto.randomUUID()

    console.log(constructor.prototype.id);
}


@logger
class User  {
    constructor(
        public name: string,
        public age: number,
        public email : string
    ) {
        this.name = name 
        this.age = age
        this.email = email
    }


    speak (word : string):void {
        console.log(`${this.name} says ${word}`);
    }
}

const ali = new User("alireza", 15, "AlirezadeveloperUi@gmail.com")
const komeyl = new User("kml", 9, "kml@gmail.com")
