"use strict";
class Human {
    constructor(userName, userIncome) {
        this.name = userName;
        this.income = userIncome;
    }
}
const result = new Human("Hannan", 0);
console.log(result);
class Dog {
    constructor(animalAge) {
        this.age = animalAge;
    }
}
class Bark extends Dog {
    constructor(age) {
        super(age);
        // console.log(this.age)
    }
}
const result2 = new Dog(2);
console.log(result2);
const result3 = new Bark(2);
console.log(result3);
class Bird {
}
class Eagle extends Bird {
    makeSound() {
        return "sound";
    }
    constructor(thisBird) {
        super();
        this.birdName = thisBird;
    }
}
const showBird = new Eagle("Eagle");
console.log(showBird);
