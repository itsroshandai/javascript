// object 
// it store data in the key and value form.

const { jsx } = require("react/jsx-runtime")

// let object_Nmae={
// [key]:value 
// }

// // 1. Create
// let user={
//     name: "Ram",
//     phone: 9810032169,
//     isAdmin: true
// };
// // 2. access
// console.log(user)
// // 3. access using dot and array
// console.log(user.name)
// console.log(user.phone)
// console.log(user.isAdmin)
// console.log(user["name"])
// console.log(user["phone"])
// console.log(user["isAdmin"])

// // 3. update
// user.isAdmin=false 
// console.log(user)

// // 4.delete
// delete user.phone
// console.log(user)

// // 5.Add new key and value
// user.address="changu"
// console.log(user)

// 6. Dynamic key
// let n="name"
// let user={
//     [n]:"ram"
// }
// console.log(user)

// let u1={
//     name:"abc",
// }
// let u2={
//     name:"abc",
// }

// console.log(u1==u2)     //this is due to this will compare the memory adress of the objects

// 7. Nested object
// let user={
//     name:"ram",
//     address:{
//         temp:"ktm",
//         per:"bkt",
//     },
//     mark:{
//         nepali:[56,80,60],
//     }
// }
// console.log(user.address.temp)
// console.log((user.mark.nepali.reduce((sum,item)=>sum+item,0)/user.mark.nepali.length))

// 8. array of object
// let products=[{
//     id:1,
//     title:"iphone12",
//     price:27000,
// },
// {
//     id:2,
//     title:"iphone13",
//     price:270009,
// },
// {
//     id:3,
//     title:"iphone13pro",
//     price:270000,
// },
// {
//     id:4,
//     title:"iphone13promax",
//     price:2700090,
// },
// ]
// // console.log(products[0].title)
// products.forEach((item)=>{
//     console.log(item.title)
//     console.log(item.price)
// })

// let products=[{
//     id:1,
//     title:"iphone12",
//     price:27000,
// },
// {
//     id:2,
//     title:"iphone13",
//     price:270009,
// },
// {
//     id:3,
//     title:"iphone13pro",
//     price:270000,
// },
// {
//     id:4,
//     title:"iphone13promax",
//     price:2700090,
// },
// ]
// // q1. write a arrow function that will calculate the total price of products
// const calculate=(product)=>{
//     return product.reduce((acc,item)=>acc+item.price,0)
// }
// let totalPrice=calculate(products)
// console.log(totalPrice)

// // q2. print the list of products whose price is grater than 28000
// const greater=(product)=>{
//     product.forEach((item)=>item.price>28000)
// }
// greater(products)

// // q3. write a arrow function andcalculate the price of product whose id is odd.
// const odd=(product)=>{
//     products.forEach((item)=>{if(item.id%2!==0)
//     console.log(item.price)
// })
// }
// odd(products)

// json=javascript object notation
// let userJson={
//     "name":"Ram",
//     "phone":9810032169,
//     "isAdmin":true,
// }

let user={
    name:"Ram",
    phone:9810032169,
    isAdmin:true,
}
// convert object into json
let uJson=JSON.stringify(user)
console.log(uJson)

// converting the json into object
let uObject=JSON.parse(uJson)
console.log(uObject)