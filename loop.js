// loop
// if we have to take value in range (1-100,1-10)
// is we need to execute same code muoltiple time than we use loop

// types of loop
// for loop
// while
// do-while

// for loop
// for(i=1;i<=100;i++){
//     console.log(i)
// }
// for(let i=20;i>=1;i--){
//     console.log(i)
// }
// for(i=1;i<=10;i++){
//     console.log(`7*${i}=${7*i}`)
// }
var x=0;
for(i=1;i<=100;i++){
    if(i%2==0){
    console.log(i)
    x++;
    }
}
console.log(`${x} even numbers between 1-100`)