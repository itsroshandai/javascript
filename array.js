// String
// Array
// object
// aray of object
// json

// // array
// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
// console.log(arr)
// console.log(arr[5])
// // properties
// console.log(arr.length)
// for(let i=0;i<arr.length;i++){
// console.log(arr[i]);
// }
// let sum=0;
// for(let i=arr.length-1;i>=0;i--){
// console.log(arr[i]);
// sum=sum+arr[i];
// }
// console.log("sum of all elements= "+sum)

// printing only even
// for(let i=arr.length-1;i>=0;i--){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }

// count the even n0
// let count=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         count++;
//     }
// }
// console.log(count);

// print only prime no
// for(let i=0;i<arr.length;i++){
//     let isPrime=true;
//     if(arr[i]==2){
//         isPrime=true;
//     }
//     else {
//         if(arr[i]==1){
//                 isPrime=false;
//         }
//         else{
//             for(let y=arr[i]-1;y>1;y--){
//                 if(arr[i]%y==0){
//                     isPrime=false;
//                     break;
//                 }
//             }
//         }
//     }
//     if(isPrime){
//         console.log(arr[i]+' ')
//     }
// }

// array method
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
console.log(arr)
// // push
// arr.push(100,200)
// console.log(arr)
// // pop
// console.log(arr.pop()) // remove item from the end
// console.log(arr)
// arr.unshift(11,12,14)  //add valuse from first index
// console.log(arr)
// console.log(arr.shift()) //remove the item from the left
// console.log(arr)
// delete arr[1]   //this will delete the specifi indexed item
// console.log(arr)
// arr[1]=99 //update the specific index item
// console.log(arr)
// // completed the crud operation = create, read/access, update, delete

// // console.log(arr.slice(start_index,end_endex))         end_index is excluded
// console.log(arr.slice(1,4))

// console.log(arr.splice(start_index,count_to_delete,nie_item))
// console.log(arr.splice(2,1))
// console.log(arr)

// arr.splice(2,1,"ra","ba") //here the = item at arr[2] is deleted and new item is added there
// console.log(arr)

// concatination
// let arr1=[1,2]
// let arr2=["a","b"]
// const arr3=arr1.concat(arr2)
// console.log(arr3)

// Map, filter, reduce , foreach, find, includes
// foreach
// arr.forEach((item, index)=>{
//     console.log(item,index)
// });

// write a code that will count the total even number and also find the sum of even number using forEach
// let count=0, sum=0;
// arr.forEach((item)=>{
//     if(item%2==0){
//         sum=sum+item;
//         count++;
//     }
// })
// console.log(sum,count)

// filter
// let filteredArray=arr.filter((item)=>{
//     if(item%2==0)
//         return(item)
//     })

// find
// let val=arr.find((item)=>{
//     return item==5
// })
// console.log(val)

// map          it is used when we want to create a array from old array, with updated values
// let updatedArray=arr.map((item)=>{
//     return item+1
// })
// console.log(updatedArray)

// reduce                               //acc is a parameter to store temporary sum of items, 0 is the starting index
// let totalSum=arr.reduce((acc,item)=>{
//     return acc+item
// },0)  
// console.log(totalSum)

// includes
// console.log(arr.includes(19))

// write a code that will give the sum of even number using filter and reduce
// let filteredArr=arr.filter((item)=>{
//     if(item%2==0){
//         return item
//     }
// })
// let sumArr=filteredArr.reduce((acc,item)=>{
//     return acc+item
// },0)

// let filteredArr=arr.filter((item)=>item%2==0).reduce((acc,item)=> acc+item,0)
// console.log(filteredArr)