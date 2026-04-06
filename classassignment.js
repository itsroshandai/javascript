// 1. Create a Simple Class:
// - Write a code to create a class `Person` with a constructor that initializes `name` and `age` properties.
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// 2. Add Method to Class:
// - Write a method inside the `Person` class to return a greeting message like "Hello, my name is [name]".
// class Person{
//     constructor(name){
//         this.name=name;
//     }
//     printInfo(){
//         console.log("Hello, my name is "+this.name)
//     }
// }
// const u1=new Person("Ram")
// u1.printInfo()
// 3. Instantiate a Class:
// - Write a code to create an instance of the `Person` class with `name` "John" and `age` 30, and call the greeting method.
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greeting(){
//         console.log("Hi my name is "+this.name +" and i'm "+this.age+" years old.")
//     }
// }
// const u1=new Person("jhon", 30)
// u1.greeting()
// 4. Class Property Initialization:
// - Write a class `Car` with `make` and `model` properties initialized in the constructor.
// class Car{
//     constructor(make,model){
//         this.make=make;
//         this.model=model;
//     }
// }
// Arrow Functions
// 5. Basic Arrow Function:
// - Write an arrow function that takes two numbers as parameters and returns their sum.
// class Sum{
//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//     }
//     add=()=>console.log(this.a+this.b)
// }
// const s1=new Sum(5,6)
// s1.add()
// 6. Arrow Function with Default Parameter:
// - Write an arrow function that takes a number and returns its square, with a default parameter of 2 if no argument is provided.
class square{
    constructor(a=2){
        this.a=a;
    }
    sq=()=>console.log(this.a**2)
}
const s1=new square(9)
s1.sq()
// 7. Arrow Function with No Parameters:
// - Write an arrow function that returns a string "Hello, World!" with no parameters.
// 8. Arrow Function with Object Return:
// - Write an arrow function that returns an object with properties `name` and `age`.