class Human {
  name: string;
  private income: number;

  constructor(userName: string, userIncome: number) {
    this.name = userName;
    this.income = userIncome;
  }
}

const result = new Human("Hannan", 0);
console.log(result);

class Dog {
   protected age: number;
  constructor(animalAge: number) {
    this.age = animalAge;
  }
}

class Bark extends Dog {
    constructor(age: number) {
        super(age);
        // console.log(this.age)
    }
}

const result2 = new Dog(2);
console.log(result2);

const result3 = new Bark(2);
console.log(result3);

abstract class Bird {
    abstract makeSound(): string;
    abstract birdName: string;
}

class Eagle extends Bird {
    makeSound(): string {
        return "sound";
    }
    birdName: string;
    constructor(thisBird: string) {
        super();
        this.birdName = thisBird;
    }
}

const showBird = new Eagle("Eagle");
console.log(showBird);