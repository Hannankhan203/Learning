// Fundamental JavaScript Question

// 1. Hello, World!:
// Write a program to print "Hello, World!" in the console.
let hello = "Hello, World!";
console.log(hello);

// 2. Simple Calculator (Addition):
// Write a program to take two numbers as input and display their sum.
let a = 10;
let b = 20;
let sum = a + b;
console.log(sum);

// 3. Odd or Even:
// Write a program that checks whether a number is odd or even.
let c = 35;
if(c % 2 === 0) {
    console.log(`${c} is even`);
} else {
    console.log(`${c} is odd`);
}

// 4. Maximum of Two Numbers:
// Write a program to find the maximum of two numbers provided by the user.
// let d = +prompt("Enter 1st number");
// let e = +prompt("Enter 2nd number");
let d = 43;
let e = 33;
if(d > e) {
    console.log(`${d} is maximum`);
} else if(d < e) {
    console.log(`${e} is maximum`);
} else {
    console.log("Both are equal");
}

// 5. Multiplication Table:
// Write a program to print the multiplication table of the number entered by the user.
// let f = +prompt("Enter a number to find it's multiplication table");
let f = 5;
let mul = 0;
for(let i = 1; i <= 10; i++) {
    mul = f * i;
    console.log(mul);
}

// 6. Array Sum:
// Write a program to calculate the sum of all elements in an array.
let g = [23, 21, 2, 4, 34, 656, 43];
let res = 0;
for(let i = 0; i < g.length; i++) {
    res += g[i];
}
console.log(res);

// 7. Count Vowels:
// Write a function to count the number of vowels in a given string.
let h = "Karachi, the city of lights";
let k = h.toLowerCase().split('');
let j = 0
for(let i = 0; i < k.length; i++) {
    if(k[i] === "a" || k[i] === "e" || k[i] === "i" || k[i] === "o" || k[i] === "u") {
        j++;
    }
}
console.log(j);

// 8. Reverse a String:
// Write a program to reverse a string input by the user.
let l = "Karachi";
let reverseL = l.split('').reverse().join('');
console.log(reverseL);

// 9. Factorial of a Number:
// Write a function that takes a number and returns its factorial.
let m = 5;
let fact = 1;
for(let i = 1; i <= m; i++) {
    fact = fact * i;
}
console.log(fact);

// 10. FizzBuzz:
// Write a program that prints numbers from 1 to 50, but:
// Print "Fizz" for multiples of 3,
// Print "Buzz" for multiples of 5,
// Print "FizzBuzz" for multiples of both 3 and 5.
for(let i = 1; i <= 50; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FizzBuzz`);
    } else if(i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if(i % 5 === 0) {
        console.log(`${i} Buzz`);
    }
}