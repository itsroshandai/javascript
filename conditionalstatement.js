// conditional statement
// if-else
//     if (cond){
//         // logic
//     }
//     else {
//         // logic
//     }
// if (false){
//     console.log("true")
// }
// else {
//     console.log("false")

// }
// let x=5;
// if (x>1){
//     console.log("greater")
// }
// else{
//     console.log("small")
// }
// let x=5435;
// if(x%2==0){
//     console.log("even")

// }
// else{
//     console.log("odd")
// }
// let x=5;
// if (x>1){
//     console.log("greater")
// }
// else if(x==5){
//         console.log("equal to 5")

// }
// else{
//     console.log("small")
// }
// let years=-1;
// if(years<6 && years>-1){
//     console.log("kid")
// }
// else if(years<13 && years>5){
//     console.log("child")
// }
// else if(years<20 && years>12){
//     console.log("teen")
// }
// else if(years<61 && years>19){
//     console.log("young")
// }
// else if(years>60 && years<=150){
//     console.log("old")
// }
// else{
//     console.log("wrong input")
// }

let grade=1;
if(grade<=100 && grade>90){
    console.log("A+")
}
else if(grade<=90 && grade>80){
    console.log("A")
}
else if(grade<=80 && grade>70){
    console.log("B+")
}
else if(grade<=70 && grade>60){
    console.log("B")
}
else if(grade<=60 && grade>50){
    console.log("C+")
}
else if(grade<=50 && grade>40){
    console.log("C")
}
else if(grade<=40 && grade>30){
    console.log("D+")
}
else if(grade<=30 && grade>20){
    console.log("D")
}
else if(grade<=20 && grade>10){
    console.log("E")
}
else if(grade<=10 && grade>0){
    console.log("NG")
}
else{
    console.log("wrong input")
}