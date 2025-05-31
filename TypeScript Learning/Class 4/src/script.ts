// console.log("test");


// type User = {
//     userName: string;
// }

// type User2 = {
//     age: number;
// }

// type User3 = {
//     cnic: number;
// }

// // interface User {
// //     userName: string;
// //     age: number;
// // }

// const object: User & User2 & User3 = {
//     userName: "Hannan Khan",
//     age: 30,
//     cnic: 420000000000,
// }

// console.log(object);

// function reverseArray<T>(param: T[]) {
//     return param.reverse();
// }

// const result = reverseArray(["test", "test2"]);
// const result2 = reverseArray([1, 2, 3, 4, 5]);
// const result3 = reverseArray([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
// ])
// const result4 = reverseArray([
//     [22], ["Hannan"]
// ])

// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);

class User {
    myName: string;
    myAge: number;
    constructor(name: string, age: number) {
        this.myName = name;
        this.myAge = age;
    }
}

const user1 = new User("Hannan Khan", 22);
console.log(user1);