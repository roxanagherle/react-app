

class Car {
    constructor(){
        this.wheels = 4
        this.type = 'Sedan'
    }
}

class Ford extends Car {
    constructor(){
        super();
        this.maker = 'Ford'
    }
}

const car = new Car();
const ford = new Ford();

console.log(ford.maker)
console.log(ford.wheels)