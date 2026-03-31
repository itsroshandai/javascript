// String
// Array
// object
// aray of object
// json

// // array
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
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
for(let i=0;i<arr.length;i++){
    let isPrime=true;
    if(arr[i]==2){
        isPrime=true;
    }
    else {
        if(arr[i]==1){
                isPrime=false;
        }
        else{
            for(let y=arr[i]-1;y>1;y--){
                if(arr[i]%y==0){
                    isPrime=false;
                    break;
                }
            }
        }
    }
    if(isPrime){
        console.log(arr[i]+' ')
    }

}