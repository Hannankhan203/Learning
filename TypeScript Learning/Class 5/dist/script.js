"use strict";
class User {
    constructor(name, age) {
        this.userName = name;
        this.userAge = age;
    }
}
const user1 = new User("Hannan Khan", 22);
console.log(user1);
class Student extends User {
    constructor(name, age, qualification) {
        super(name, age);
        this.userQualification = qualification;
    }
}
const student1 = new Student("Hannan Khan", 22, "3rd Semester");
console.log(student1);
class PrivateCar {
    constructor(param) {
        this.speed = param;
    }
    get getSpeed() {
        return this.speed;
    }
    set setSpeed(value) {
        this.speed = value;
    }
}
const car1 = new PrivateCar(50);
console.log(car1);
console.log(car1.getSpeed);
console.log((car1.setSpeed = 1000));
var date = new Date().getTime();
console.log(date);
class Calculator {
    constructor() { }
    static add(num1, num2) {
        return num1 + num2;
    }
    static sub(num1, num2) {
        return num1 - num2;
    }
    static mul(num1, num2) {
        return num1 * num2;
    }
    static div(num1, num2) {
        return num1 / num2;
    }
}
const result = new Calculator();
// console.log(result.add(10, 10));
console.log(Calculator.add(10, 10));
