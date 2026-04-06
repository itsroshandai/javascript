// class
// class is blueprint of object
// dry donot repeat yourself
// class Person{
//     constructor(name, age){      //it  creates the objects
//         this.name=name;
//         this.age=age;
//     }
// }
// const u1=new Person("Ram",40)       //object creating
// console.log(u1.name)
// console.log(u1.age)

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     printInfo(){
//         console.log("hi "+this.name+" you are "+this.age+" years old.")
//     }
// }
// const u1=new Person("Hari",30)
// const u2=new Person("mohan",90)
// u1.printInfo()
// u2.printInfo()

// inheritence
// class A{
//     constructor(name){
//         this.name=name;
//     }
// }
// class B{
//     coonstructor(name,studyField){
//         this.name=name;
//         this.studyField=studyField
//     }
// }
// in such a case where a class include same properties and addition

class Company{
    constructor(c_name,price){
        this.c_name=c_name;
        this.price=price
    }
}
class Car extends Company{
    constructor(c_name,car_name,price){
        super(c_name,price)
        this.car_name=car_name
    }
}
class Truck extends Company{
    constructor(c_name,Truck_name,price){
        super(c_name,price)
        this.Truck_name=Truck_name
    }
}
const c1=new Car("abc","mno",346543)
const c2=new Car("abc","xyz",34634)
const t1=new Truck("mahendra","tuk ",3495798479)
console.log(c1)
console.log(c2)
console.log(t1)