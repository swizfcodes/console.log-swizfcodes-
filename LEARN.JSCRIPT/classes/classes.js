class ClassName {
    constructor() { }
  }

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

document.getElementById('classes').innerHTML = 
myCar1.name + " " + myCar2.name;

document.getElementById('classes').innerHTML = 
"My car is " + myCar1.age() + " years old.";  

