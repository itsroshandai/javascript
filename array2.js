// 1. Find Even Numbers:
// - Write a code to find and print all even numbers from the array `[1, 2, 3, 4, 5, 6, 7, 8, 9]`.
function findEven() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) console.log(arr[i]);
  }
}
findEven();

// 2. Find Odd Numbers:
// - Write a code to find and print all odd numbers from the array `[10, 15, 20, 25, 30]`.
function findOdd() {
  let arr = [10, 15, 20, 25, 30];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) console.log(arr[i]);
  }
}
findOdd();

// 3. Sum of Array Elements:
// - Write a code to calculate and print the sum of all elements in the array `[5, 10, 15]`.
function sumArray() {
  let arr = [5, 10, 15],
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
sumArray();

// 4. Find Maximum Value:
// - Write a code to find and print the maximum value in the array `[3, 5, 7, 2, 8]`.
function maxValue() {
  let arr = [3, 5, 7, 2, 8],
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  console.log(max);
}
maxValue();

// 5. Find Minimum Value:
// - Write a code to find and print the minimum value in the array `[12, 4, 6, 9, 1]`.
function minValue() {
  let arr = [12, 4, 6, 9, 1],
    min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  console.log(min);
}
minValue();

// 6. Count Elements:
// - Write a code to count and print the number of elements in the array `[8, 3, 7, 5]`.
function countElements() {
  let arr = [8, 3, 7, 5];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
  }
  console.log(count);
}
countElements();

// 7.Multiply Array Elements:
// - Write a code to multiply all elements in the array `[2, 3, 4]` and print the result.
function multiplyArray() {
  let arr = [2, 3, 4],
    product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  console.log(product);
}
multiplyArray();

// 8. Check for a Specific Number:
// - Write a code to check if the number `7` is present in the array `[5, 6, 7, 8]` and print "Found" or "Not Found".
function checkNumber() {
  let arr = [5, 6, 7, 8];
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
      found = true;
      break;
    }
  }
  console.log(found ? "Found" : "Not Found");
}
checkNumber();

// 9. Remove Duplicates:
// - Write a code to remove duplicate elements from the array `[1, 2, 2, 3, 4, 4, 5]` and print the new array
function removeDuplicates() {
  let arr = [1, 2, 2, 3, 4, 4, 5];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}
removeDuplicates();

// 10. Create an Array with Squares:
// - Write a code to create a new array containing the squares of the elements from the array `[1, 2, 3]`.
function squareArray() {
  let arr = [1, 2, 3],
    result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }
  console.log(result);
}
squareArray();

// 11. Filter Numbers Greater than 10:
// - Write a code to filter and print numbers greater than `10` from the array `[5, 12, 7, 14, 3]`.
function filterGreater() {
  let arr = [5, 12, 7, 14, 3];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) console.log(arr[i]);
  }
}
filterGreater();

// 12. Combine Two Arrays:
// - Write a code to combine the arrays `[1, 2, 3]` and `[4, 5, 6]` into a single array.
function combineArrays() {
  let arr1 = [1, 2, 3],
    arr2 = [4, 5, 6];
  let result = [];
  for (let i = 0; i < arr1.length; i++) result.push(arr1[i]);
  for (let i = 0; i < arr2.length; i++) result.push(arr2[i]);
  console.log(result);
}
combineArrays();

// 13. Find Array Length:
// - Write a code to print the length of the array `[9, 7, 5, 3, 1]`.
function arrayLength() {
  let arr = [9, 7, 5, 3, 1];
  console.log(arr.length);
}
arrayLength();

// 14. Find Average Value:
// - Write a code to calculate and print the average of the numbers in the array `[10, 20, 30]`.
function averageArray() {
  let arr = [10, 20, 30],
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum / arr.length);
}
averageArray();

// 15. Reverse an Array:
// - Write a code to reverse the array `[1, 2, 3, 4, 5]` and print the reversed array.
function reverseArray() {
  let arr = [1, 2, 3, 4, 5];
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  console.log(result);
}
reverseArray();

// 16. Find Common Elements:
// - Write a code to find and print the common elements between the arrays `[1, 2, 3]` and `[2, 3, 4]`.
function commonElements() {
  let arr1 = [1, 2, 3],
    arr2 = [2, 3, 4];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) console.log(arr1[i]);
  }
}
commonElements();

// 17. Split Array into Two:
// - Write a code to split the array `[1, 2, 3, 4, 5]` into two arrays: one with the first half and one with the second half.
function splitArray() {
  let arr = [1, 2, 3, 4, 5];
  let mid = Math.ceil(arr.length / 2);
  let first = [],
    second = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < mid) first.push(arr[i]);
    else second.push(arr[i]);
  }
  console.log(first, second);
}
splitArray();

// 18. Find Index of an Element:
// - Write a code to find the index of the element `5` in the array `[10, 20, 5, 30]`.
function findIndex() {
  let arr = [10, 20, 5, 30];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      console.log(i);
      break;
    }
  }
}
findIndex();

// 19. Check if Array Contains a Number:
// - Write a code to check if the number `4` is in the array `[2, 4, 6, 8]` and print "Yes" or "No".
function containsNumber() {
  let arr = [2, 4, 6, 8];
  let exists = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
      exists = true;
      break;
    }
  }
  console.log(exists ? "Yes" : "No");
}
containsNumber();

// 20. Create an Array with String Lengths:
// - Write a code to create a new array containing the lengths of each string from the array `["apple", "banana", "cherry"]`.
function stringLengths() {
  let arr = ["apple", "banana", "cherry"];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].length);
  }
  console.log(result);
}
stringLengths();
