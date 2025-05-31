"use strict";
const userName = "Abdul Hannan Khan";
const rollNum = 9;
const inputEl = document.getElementById("todo");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    console.log(inputEl.value);
});
let object = {
    name: "Hannan",
    age: 22,
};
console.log(object);
let unknownValue;
unknownValue = "Test";
// unknownValue = 22;
// unknownValue = true;
console.log(unknownValue);
let object1 = {
    name: "Hannan",
    age: 22,
};
console.log(object1);
const merged = (param1, param2) => {
    if (typeof param1 === "string" && typeof param2 === "string") {
        return `Hello ${param1} ${param2}`;
    }
    else if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
};
const result1 = merged("Abdul Hannan", "Khan");
const result2 = merged(10, 12);
console.log(result1);
console.log(result2);
