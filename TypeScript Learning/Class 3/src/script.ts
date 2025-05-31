const userName: string = "Abdul Hannan Khan";
const rollNum: number = 9;

const inputEl = document.getElementById("todo") as HTMLInputElement;
const btn = document.getElementById("btn") as HTMLButtonElement;

btn.addEventListener("click", () => {
  console.log(inputEl.value);
});

type User = {
  name: string;
  age: number;
};

let object: User = {
  name: "Hannan",
  age: 22,
};

console.log(object);

let unknownValue :string | number;
unknownValue = "Test";
// unknownValue = 22;
// unknownValue = true;

console.log(unknownValue);

type User1 = {
    name: string;
}

type User2 = {
    age: number;
}

type Combined = User1 & User2;

let object1: Combined = {
    name: "Hannan",
    age: 22,
}

console.log(object1);

const merged = (param1: string | number, param2: string | number) => {
    if (typeof param1 === "string" && typeof param2 === "string") {
        return `Hello ${param1} ${param2}`;
    } else if(typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
}

const result1 = merged("Abdul Hannan", "Khan");
const result2 = merged(10, 12);
console.log(result1);
console.log(result2);