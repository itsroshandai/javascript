// // // console.log("this is roshan ")
// // // alert("warning boy shut your pc ")
// // // document.writeln("this is to be written in the document")
// // // a=prompt("Enter your name:")
// // // document.writeln(a)
// // // console.log(a)
// // // alert(a)

// // console.log("hello this is parash motherfucker")

// // // node script.js
// // // node --watch script.js

// // // data types in js
// // // 2 types

// // // 1. primitive data types
// // // number=0-9  
// // //  n1=1    n2=1.6
// // n=5.69
// // console.log(typeof n)
// // // string   "",'',``
// // ame='roshan'
// // ame="roshan's"
// // ame=`roshan
// // dai`
// // ame=`roshan's ${n}`
// // console.log(ame)
// // console.log(typeof ame)
// // // boolean
// // isAdmin = true;
// // console.log(isAdmin)
// // console.log(typeof isAdmin)
// // // null=empty       its data type is object
// // let x=null
// // console.log(x)
// // console.log(typeof x)
// // // undefined
// // let y;
// // console.log(y)
// // console.log(typeof y)
// // // bigInt()     number only can store only up to 16 digits using above that will express in exponential
// // number=1243243253533243253235635165465
// // number=1243243253533243253235n
// // number=BigInt(1243243253533243253235n)
// // console.log(number)
// // // Symbol   it adds unique timeframes on the data making it unque 
// // // let id1="ram"
// // // let id2="ram"
// // let id2=Symbol("ram")
// // let id1=Symbol("ram")
// // console.log(id1==id2)
// // // 2. non-primitive data types
// // // array    collection of heterogenous data types
// // let arr=[1,2,3,"abc",false]
// // console.log(arr)
// // console.log(typeof arr)
// // // object
// // let user={
// //     name:"roshan",
// //     age:19
// // }
// // console.log(user)
// // console.log(typeof user)

// // // function     block of code that perform specific task
// // function function_name(){
// //     // logics
// // }
// // function add(){
// //     console.log(5+10)
// //     console.log(9+10)
// // }
// // function adds(a,b){
// //     console.log(a)
// //     console.log(b)
// //     console.log(`${a}+${b}=${a+b}`)
// // }
// // add()
// // adds(10,20)
// // console.log(typeof adds)
// // // date 
// // const today=new Date()
// // console.log(today.toLocaleString())
// // console.log( typeof today)

// // // Rules for variable in js
// // // 1. digit, char, _, $     while using digit it should be at the begining
// // let fullName1="ram"
// // console.log(fullName1)
// // let full1Name="shyam"
// // console.log(full1Name)
// // let _fullName="ram"
// // console.log(_fullName)
// // let $fullName="shyam"
// // console.log($fullName)
// // fullname="ram"
// // fullName="shyam"
// // console.log(fullname)
// // console.log(fullName)
// // fullname="shyam"
// // console.log(fullname)
// // // 2.var, let, const
// // var a=10                //var overrides
// // console.log(a)
// // var a=400
// // console.log(a)
// // {
// //     var j=3
// // }
// // console.log(j)
// // // hosting
// // console.log(r)
// // var r=50

// // // const
// // // const pi=3.14           //dosent allow updation
// // // console.log(pi)
// // // {
// // //     const num =1        //block scoped
// // // }
// // // console.log(num)
// // // console.log(p)       //hosting is not allowed
// // // const p=90

// // //let
// // // let na=12       //reassign is not allowed
// // // console.log(na)
// // // hosting is allowed
// // // console.log(ta)
// // // let ta=20
// // let ha=10
// // ha++
// // console.log(ha)

// // // whiel using let it wont allow to overide
// // // let b=10
// // // let b=20
// // // console.log(b)

// // // type of operators in js
// // // 1. Arthemetic operator
// // // +,-,*,/,%,++,--,**
// // console.log(1+1)
// // console.log(1-1)
// // console.log(1*1)
// // console.log(1/1)
// // console.log(8%2)
// // console.log(9%2)
// // xa=1
// // console.log(xa--)
// // console.log(xa)
// // console.log(++xa)
// // console.log(xa)

// // // 2.Assignment operator
// // // +,+=,-=,/=,*=,**=
// // let ya=10
// // console.log(ya+=5)
// // console.log(ya*=2)

// // // 3. Comparison operator
// // // ==,<,>,<=,>=,!=,!==
// // let g=10,h=10;
// // console.log(g==h)           //checks value of data
// // console.log(g===h)          //checks both datatype and value 
// // console.log(g>=h)
// // console.log(g!=h)
// // console.log(g!==h)

// // // 4. Logical operator
// // // and, or,not
// // // true or ture = true
// // // false or ture = true
// // // true or false = true
// // // false or false = true

// // // true and ture = true
// // // true and false = false
// // // false and ture = false
// // // false and false = false
// // q=1
// // p=2
// // console.log(q!=p && q<p)
// // let xx=true
// // console.log(!xx)

// // // 5. ternary operator
// // // cond?console.log("hi"):console.log("bye")
// // true?console.log("hi"):console.log("bye")
// // 10>11?console.log("hi"):console.log("bye")

// // type conversion in js
// // 1. number to string
// let n=1
// console.log(String(n))
// // 2. string to number
// let m="111"
// m=Number(m)
// console.log(m)
// // 3. number to boolean
// let b=1
// b=Boolean(b)
// console.log(typeof b)
// // 4. string to boolean
// let v="hbijdfh"
// v=Boolean(v)
// console.log(typeof v)
// // 5. boolean to number
// let isAdmin=true
// isAdmin=Number(isAdmin)
// console.log(isAdmin)
// // 6. boolean to string
// let isadmin=true
// isAdmin=String(isadmin)
// console.log(isadmin)