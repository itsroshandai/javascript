// promise
// object,
// state in promise
// 1. pending
// 2. fulfilled
// 3. rejected

// callback
// callback Hell

// promise
// asyn-await

// API
// js

// clients(js)-----API------backend(java, python, node js)------Database
// API
// Application Programming Interface

// promise
// const pr=new Promise((resolve,reject)=>{
//     let isData=true;
//     if(isData){
//         resolve({name:'Ram'})
//     }else{
//         reject("Data not found");
//     }
// });
// pr.then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })


// let res=fetch("https://dummyjson.com/products")
// res.then((data)=>{
//     // console.log(data)
//     return data.json()
// }).then((info)=>{
//     // console.log(info)
//     console.log(info.products[26].title)
// }
// ).catch((error)=?{
// console.log(error)
// })


// products
// const getProduct=async()=>{
//     try{
//         let res= await fetch('https://dummyjson.com/products')
//         res= await res.json()
//         console.log(res)
//     }catch(error){
//         console.log(error)
//     }
// }
// getProduct()


// recipes
// let res=fetch('https://dummyjson.com/recipes');
// res.then((data)=>{
//     return data.json();
// }).then((info)=>{
//     console.log(info.recipes[0].prepTimeMinutes)
// }).catch((error)=>{
// console.log(error)
// })

// const getrecipes=async()=>{
//     try{
//         let res= await fetch('https://dummyjson.com/recipes')
//         res= await res.json()
//         console.log(res)
//     }catch(error){
//         console.log(error)
//     }
// }
// getrecipes()