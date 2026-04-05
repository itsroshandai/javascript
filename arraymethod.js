// 1. Write a function that filters out even numbers from an array.
function filterEven(arr) {
    console.log(arr.filter(num => num % 2 !== 0));
}
filterEven([1,2,3,4,5,6]);

// 2. Filter an array to include only odd numbers.
function filterOdd(arr) {
    console.log(arr.filter(num => num % 2 !== 0));
}
filterOdd([1,2,3,4,5]);

// 3. Given an array of strings, filter out strings that have more than 3 characters.
function filterStrings(arr) {
    console.log(arr.filter(str => str.length <= 3));
}
filterStrings(["cat","lion","dog","tiger"]);

// 4. Write a function that filters out negative numbers from an array.
function filterNegative(arr) {
    console.log(arr.filter(num => num >= 0));
}
filterNegative([-1,2,-3,4,5]);

// 5. Given an array of boolean values, filter out the true values.
function filterTrue(arr) {
    console.log(arr.filter(val => val === true));
}
filterTrue([true,false,true,false]);

// 6. Filter an array of strings to include only those that contain the letter 'a'.
function filterA(arr) {
    console.log(arr.filter(str => str.includes('a')));
}
filterA(["apple","berry","grape","kiwi"]);

// 7. Filter an array of numbers to return only those greater than 5.
function greaterThan5(arr) {
    console.log(arr.filter(num => num > 5));
}
greaterThan5([2,6,3,8,1]);

// 8. Write a function that filters out empty strings from an array.
function removeEmpty(arr) {
    console.log(arr.filter(str => str !== ""));
}
removeEmpty(["hello","","world",""]);

// 9. Write a function that maps an array of numbers to an array where each number is doubled.
function doubleNumbers(arr) {
    console.log(arr.map(num => num * 2));
}
doubleNumbers([1,2,3]);

// 10. Convert an array of numbers into an array of strings using map.
function numbersToStrings(arr) {
    console.log(arr.map(num => num.toString()));
}
numbersToStrings([1,2,3]);

// 11. Write a function that converts an array of strings to uppercase using map.
function toUpper(arr) {
    console.log(arr.map(str => str.toUpperCase()));
}
toUpper(["apple","banana"]);

// 12. Given an array of numbers, map it to an array of true (if positive) or false (if negative).
function positiveCheck(arr) {
    console.log(arr.map(num => num >= 0));
}
positiveCheck([-1,2,-3,4]);

// 13. Write a function that adds 1 to each number in an array using map.
function addOne(arr) {
    console.log(arr.map(num => num + 1));
}
addOne([1,2,3]);

// 14. Given an array of strings, return an array of the first letter of each string using map.
function firstLetters(arr) {
    console.log(arr.map(str => str[0]));
}
firstLetters(["apple","banana","cherry"]);

// 15. Convert an array of strings to an array of their lengths using map.
function stringLengths(arr) {
    console.log(arr.map(str => str.length));
}
stringLengths(["hi","hello","hey"]);

// 16. Write a function that squares each number in an array using map.
function squareNumbers(arr) {
    console.log(arr.map(num => num * num));
}
squareNumbers([2,3,4]);

// 17. Use forEach to log each element of an array to the console.
function logElements(arr) {
    arr.forEach(el => console.log(el));
}
logElements([1,2,3]);

// 18. Write a function that uses forEach to calculate the sum of an array of numbers.
function sumArray(arr) {
    let sum = 0;
    arr.forEach(num => sum += num);
    console.log(sum);
}
sumArray([1,2,3,4]);

// 19. Use forEach to multiply each number in an array by 2 and log the results.
function multiplyBy2(arr) {
    arr.forEach(num => console.log(num * 2));
}
multiplyBy2([1,2,3]);

// 20. Use forEach to log each string in an array in uppercase.
function logUpper(arr) {
    arr.forEach(str => console.log(str.toUpperCase()));
}
logUpper(["apple","banana"]);

// 21. Use forEach to add an exclamation mark to each string in an array and log the new strings.
function addExclamation(arr) {
    arr.forEach(str => console.log(str + "!"));
}
addExclamation(["hi","hello"]);

// 22. Use forEach to log the index and value of each element in an array.
function logIndexValue(arr) {
    arr.forEach((val, index) => console.log(index, val));
}
logIndexValue([10,20,30]);

// 23. Use forEach to log only the odd numbers from an array.
function logOdd(arr) {
    arr.forEach(num => {
        if (num % 2 !== 0) console.log(num);
    });
}
logOdd([1,2,3,4,5]);

// 24. Write a function that uses forEach to log numbers greater than 10 from an array.
function greaterThan10(arr) {
    arr.forEach(num => {
        if (num > 10) console.log(num);
    });
}
greaterThan10([5,12,8,20]);

// 25. Use forEach to concatenate all strings in an array into a single string and log it.
function concatStrings(arr) {
    let result = "";
    arr.forEach(str => result += str);
    console.log(result);
}
concatStrings(["Hello"," ","World"]);