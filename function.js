// function
// function is block of code that perform specific task
// function functionName(){
//  logic
// }
// call
// functionName()

// function sum(a,b,c){
//     return a+b+c
// }
// x=sum(1,2,3)
// console.log(x)

// write a function that will identify the given number is odd or even
// function oddoreven(x){
//     if(x%2==0){
//         console.log(`${x} is even.`)
//     }
//     else{
//         console.log(x+" is odd")
//     }
// }
// oddoreven(8)
// // write a function to count total even number between 1-20
// function counteven(){
//     let count=0;
//     for(i=1;i<=20;i++){
//         if(i%2==0){
//             count++;
//         }
//     }
//     return count;
// }
// count=counteven();
// console.log("There are toatl "+count+" even numbers.")

// types of function
// 1. Arrow function
// function sum(){
// console.log("sum")
// }
// const sum=(a,b)=>{
//     console.log(a)
//     console.log(b)
// }
// const sum=(a,b)=> console.log(a+b);
// sum(2,3)
// const sum = a => console.log(a);
// sum(1)
// const sum=(a,b)=> a+b;
// console.log(sum(1,2));

// allows hoist in normal function only
// printinfo()
// function printinfo(){
//     console.log("horw")
// }

// ssh

//3. function express or an0nymous function
// const add=function(){
//     console.log("hello how are you ?")
// }
// add()

// 4. immediateluy invoked function expression (IIFE) : a function that id executed immediately after some operation is completed
// (
//     function(){
//         console.log("oho")
//     }
// )();

// 5. callback functions
// function a(){
//     console.log("in a")
//     function b(){
//         console.log(" in b")
//     }
// }
// a();

// if we need to call the fuction out of the scope
// function a(){
//     console.log("in a")
//     function b(){
//         console.log(" in b")
//     }
//     return b;
// }
// let x=a();
// x();

// let first=()=>{
//     console.log("HI i am first");
// };
// const outer=( fn)=>{
//     console.log("Hi i am outer")
//     fn();
// };
// outer(first);

// const outer=( fn)=>{
//     console.log("Hi i am outer")
//     fn();
// };
// outer(()=>{
//     console.log("HI i am first");
// });

// write a function that take a function and a number , and write code in such way that given function that will say the passed number is odd or even.
// const oddeven=(a)=>{
// if(a%2==0){
//     console.log(a +' is even')
// }
// else{
//     console.log(a +' is odd')
// }
// }
// const fun=(fn,b)=>{
//     fn(b);
// }
// fun(oddeven,19)

// default parameter
// function here(a=3,b=1,c=2){
//     console.log(a,b,c)
// }
// here(1,2)
// here( undefined,undefined,1)
// 6. Async funtion