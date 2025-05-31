// String Methods
console.log("String Methods");

// 1. charAt(index)
console.log("1. charAt(index)");
console.log("hello".charAt(1));

// 2. charCodeAt(index)
console.log("2. charCodeAt(index)");
console.log("hello".charCodeAt(1));

// 3. codePointAt(index)
console.log("3. codePointAt(index)");
console.log("😊".codePointAt(0));

// 4. concat(st1, st2, ...)
console.log("4. concat(st1, st2, ...)");
console.log("Hello".concat(" ", "World"));

// 5. endsWith(searchString, lenght)
console.log("5. endsWith(searchString, lenght)");
console.log("hello".endsWith("lo"));

// 6. includes(searchString, position)
console.log("6. includes(searchString, position)");
console.log("hello".includes("ell"));

// 7. indexOf(searchString, position)
console.log("7. indexOf(searchString, position)");
console.log("hello".indexOf("l"));

// 8. lastIndexOf(searchString, position)
console.log("8. lastIndexOf(searchString, position)");
console.log("hello".lastIndexOf("l"));

// 9. localeCompare(compareString, locales, options)
console.log("9. localeCompare(compareString, locales, options)");
console.log("a".localeCompare("b"));

// 10. match(regexp)
console.log("10. match(regexp)");
console.log("hello".match(/l/g));

// 11. matchAll(regexp)
console.log("11. matchAll(regexp)");
console.log([..."hello".matchAll(/l/g)]);

// 12. normalize(form)
console.log("12. normalize(form)");
console.log("café".normalize("NFD"));

// 13. padEnd(targetLenght, padString)
console.log("13. padEnd(targetLenght, padString)");
console.log("hello".padEnd(10, "."));

// 14. padStart(targetLenght, padString)
console.log("14. padStart(targetLenght, padString)");
console.log("hello".padStart(10, "."));

// 15. repeat(count)
console.log("15. repeat(count)");
console.log("ha".repeat(3));

// 16. replace(searchValue, replaceValue)
console.log("16. replace(searchValue, replaceValue)");
console.log("hello".replace("l", "x"));

// 17. replaceAll(searchValue, replaceValue)
console.log("17. replaceAll(searchValue, replaceValue)");
console.log("hello".replaceAll("l", "x"));

// 18. search(regexp)
console.log("18. search(regexp)");
console.log("hello".search(/l/));

// 19. slice(startIndex, endIndex)
console.log("19. slice(startIndex, endIndex)");
console.log("hello".slice(1, 3));

// 20. split(seperator, limit)
console.log("20. split(seperator, limit)");
console.log("hello".split(""));

// 21. startsWith(searchString, position)
console.log("21. startsWith(searchString, position)");
console.log("hello".startsWith("he"));

// 22. subString(startIndex, endIndex)
console.log("22. subString(startIndex, endIndex)");
console.log("hello".substring(1, 3));

// 23. toLocaleLowerCase(locales)
console.log("23. toLocaleLowerCase(locales)");
console.log("HELLO".toLocaleLowerCase());

// 24. toLocaleUpperCase(locales)
console.log("24. toLocaleUpperCase(locales)");
console.log("hello".toLocaleUpperCase());

// 25. toLowerCase(locales)
console.log("25. toLowerCase(locales)");
console.log("HELLO".toLowerCase());

// 26. toString()
console.log("26. toString()");
function tostring() {
  let str = new String("hello");
  console.log(str.toString());
}
tostring();

// 27. toUpperCase(locales)
console.log("27. toUpperCase(locales)");
console.log("hello".toUpperCase());

// 28. trim()
console.log("28. trim()");
console.log("     hello     ".trim());

// 29. trimEnd()
console.log("29. trimEnd()");
console.log("     hello     ".trimEnd());

// 30. trimStart()
console.log("30. trimStart()");
console.log("     hello     ".trimStart());

// 31. valueOf()
console.log("31. valueOf()");
function valueof() {
  let str = new String("hello");
  console.log(str.valueOf());
}
valueof();

// Array Methods
console.log("Array Methods");
// 1. concat()
console.log("1. concat()");
function concatArr() {
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  console.log(arr1.concat(arr2));
}
concatArr();

// 2. copyWithin()
console.log("2. copyWithin()");
console.log([1, 2, 3, 4].copyWithin(0, 2));

// 3. entries()
console.log("3. entries()");
for (let [index, value] of ["a", "b"].entries()) {
  console.log(index, value);
}

// 4. every()
console.log("4. every()");
console.log([1, 2, 3].every((x) => x > 0));

// 5. fill()
console.log("5. fill()");
console.log([1, 2, 3].fill(0));

// 6. filter()
console.log("6.");
console.log([1, 2, 3].filter((x) => x > 1));

// 7. find()
console.log("7.");
console.log([1, 2, 3].find((x) => x > 1));

// 8. findIndex()
console.log("8.");
console.log([1, 2, 3].findIndex((x) => x > 1));

// 9. findLast()
console.log("9.");
console.log([1, 2, 3].findLast((x) => x > 1));

// 10. findLastIndex()
console.log("10.");
console.log([1, 2, 3].findLastIndex((x) => x > 1));

// 11. flat()
console.log("11.");
console.log([1, [2, [3]]].flat());

// 12. flatMap()
console.log("12.");
console.log([1, 2].flatMap((x) => [x, x * 2]));

// 13. forEach()
console.log("13.");
[(1, 2, 3)].forEach((x) => {
  console.log(x);
});

// 14. includes()
console.log("14.");
console.log([1, 2, 3].includes(2));

// 15. indexOf()
console.log("15.");
console.log([1, 2, 3].indexOf(2));

// 16. join()
console.log("16.");
console.log([1, 2, 3].join("-"));

// 17. keys()
console.log("17.");
for (let key of ["a", "b"].keys()) {
  console.log(key);
}

// 18. lastIndexOf()
console.log("18.");
console.log([1, 2, 3, 2].lastIndexOf(2));

// 19. map()
console.log("19.");
console.log([1, 2, 3].map((x) => x * 2));

// 20. pop()
console.log("20.");
let arrPop = [1, 2, 3];
arrPop.pop();
console.log(arrPop);

// 21. push()
console.log("21.");
let arrPush = [1, 2];
arrPush.push(3);
console.log(arrPush);

// 22. reduce()
console.log("22.");
console.log([1, 2, 3].reduce((acc, x) => acc + x, 0));

// 23. reduceRight()
console.log("23.");
console.log([1, 2, 3].reduceRight((acc, x) => acc + x, 0));

// 24. reverse()
console.log("24.");
console.log([1, 2, 3].reverse());

// 25. shift()
console.log("25.");
let arrShift = [1, 2, 3];
arrShift.shift();
console.log(arrShift);

// 26. slice()
console.log("26.");
console.log([1, 2, 3].slice(1, 2));

// 27. some()
console.log("27.");
console.log([1, 2, 3].some((x) => x > 2));

// 28. sort()
console.log("28.");
console.log([3, 1, 2].sort());

// 29. splice()
console.log("29.");
let arrSplice = [1, 2, 3];
arrSplice.splice(1, 1, 4);
console.log(arrSplice);

// 30. toLocaleString()
console.log("30.");
console.log([1, "a", new Date()].toLocaleString());

// 31. toString()
console.log("31.");
console.log([1, 2, 3].toString());

// 32. unshift()
console.log("32.");
let arrUnshift = [1, 2];
arrUnshift.unshift(0);
console.log(arrUnshift);

// 33. values()
console.log("33.");
for (let value of ["a", "b"].values()) {
  console.log(value);
}

// 34. at(index)
console.log("34.");
console.log([1, 2, 3].at(-1));

// 35. toReversed()
console.log("35.");
console.log([1, 2, 3].toReversed());

// 36. toSorted()
console.log("36.");
console.log([3, 1, 2].toSorted());

// 37. toSpliced()
console.log("37.");
console.log([1, 2, 3].toSpliced(1, 1, 4));

// 38. with(index, value)
console.log("38.");
console.log([1, 2, 3].with(1, 4));

// Static Array Methods
console.log("Static Array Methods");

// 1. Array.from()
console.log("1.");
console.log(Array.from("hello"));

// 2. Array.isArray()
console.log("2.");
console.log(Array.isArray([1, 2, 3]));

// 3. Array.of()
console.log("3.");
console.log(Array.of(1, 2, 3));
