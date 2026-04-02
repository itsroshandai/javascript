// 1. Write a function that filters out even numbers from an array.
// let arr=[1,2,3,4,5,6,7,8]
// console.log(arr.filter((item)=>item%2==0))
// 2. Filter an array to include only odd numbers.
// let arr=[1,2,3,4,5,6,7,8]
// console.log(arr.filter((item)=>item%2!==0))
// 3. Given an array of strings, filter out strings that have more than 3 characters.
// let arr=["a","aaa","aefafs","sdsf"]
// console.log(arr.filter((item)=>item.length>3))
// 4. Write a function that filters out negative numbers from an array.
// let arr=[1,-2,3,4,5,-6,7,8]
// console.log(arr.filter((item)=>item<0))
// 5. Given an array of boolean values, filter out the `true` values.
// let arr=[true,false,1,0]
// console.log(arr.filter((item)=>item==true))
// 6. Filter an array of strings to include only those that contain the letter 'a'.
// let arr=["a","aaa","aefafs","sdsf"]
// console.log(arr.filter((item)=>item.includes("a")))
// 7. Filter an array of numbers to return only those greater than 5.
// let arr=[1,2,3,4,5,6,7,8]
// console.log(arr.filter((item)=>item>5))
// 8. Write a function that filters out empty strings from an array.
// let arr=["a","aaa","aefafs","sdsf",""]
// console.log(arr.filter((item)=>item.length>0))
// 9. Write a function that maps an array of numbers to an array where each number is doubled.
// let arr=[1,2,3,4,5,6,7,8]
// console.log(arr.map((item)=>item*2))
// 10. Convert an array of numbers into an array of strings using `map`.
// let arr=[1,2,3,4,5,6,7,8]
// console.log(arr.map((item)=>String(item)))
// 11. Write a function that converts an array of strings to uppercase using `map`.
// let arr=["a","aaa","aefafs","sdsf"]
// console.log(arr.map((item)=>item.toUpperCase()))
// 12. Given an array of numbers, map it to an array of `true` (if the number is positive) or `false` (if the
// number is negative).
// let arr=[-1,2,3,4,-5,6,-7,8]
// console.log(arr.map((item)=>item>0))
// 13. Write a function that adds 1 to each number in an array using `map`.
// let arr=[1,2,3,4,5,6,7,8]
// console.log(arr.map((item)=>item+1))
// 14. Given an array of strings, return an array of the first letter of each string using `map`.
// let arr=["a","aaa","aefafs","sdsf"]
// console.log(arr.filter((item)=>item.length>3))
// 15. Convert an array of strings to an array of their lengths using `map`.
// let arr=["a","aaa","aefafs","sdsf"]
// console.log(arr.map((item)=>item.length))
// 16. Write a function that squares each number in an array using `map`.
// let arr=[1,2,3,4,5,6,7,8]
// console.log(arr.map((item)=>item**2))
// 17. Use `forEach` to log each element of an array to the console.
// let arr=[1,2,3,4,5,6,7,8]
// arr.forEach((item)=>{
//     console.log(item)
// })
// 18. Write a function that uses `forEach` to calculate the sum of an array of numbers.
// let arr=[1,2,3,4,5,6,7,8],sum=0;
// arr.forEach((item)=>{
//     sum+=item;
// })
// console.log(sum)
// 19. Use `forEach` to multiply each number in an array by 2 and log the results.
// let arr=[1,2,3,4,5,6,7,8]
// arr.forEach((item)=>{
//     console.log(item*2)
// })
// 20. Use `forEach` to log each string in an array in uppercase.
// let arr=["hlo","fjg"]
// arr.forEach((item)=>{
//     console.log(item.toUpperCase())
// })
// 21. Use `forEach` to add an exclamation mark to each string in an array and log the new strings.
// let arr=["hlo","fjg"]
// arr.forEach((item)=>{
//     let it= item+"!"
//     console.log(it)
// })
// 22. Use `forEach` to log the index and value of each element in an array.
// let arr=["hlo","fjg"]
// arr.forEach((item, index)=>{
//     console.log(item,index)
// })
// 23. Use `forEach` to log only the odd numbers from an array.
// let arr=[1,2,3,4,5,6,7,8]
// arr.forEach((item)=>{
//     if(item%2!==0){
//             console.log(item)}
// })
// 24. Write a function that uses `forEach` to log numbers greater than 10 from an array.
// let arr=[1,2,3,42,50,6,7,8]
// arr.forEach((item)=>{
//     if(item>10){
//             console.log(item)}
// })
// 25. Use `forEach` to concatenate all strings in an array into a single string and log it.
let arr=["a","aaa","aefafs","sdsf"]
let ne=""
arr.forEach((item)=>ne=ne+item)
console.log(ne)