let arr = [1, 3, 8, 7, 10, 12, 16];


// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }


// let name = ["vivek", "parth", "harsh", "amol"]

// for(let i=0;i<name.length;i++){
//     console.log(i+1,name[i])
// }


//Problem 3 : Given an array of numbers find the average of all the even numbers.


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
let count = 0;
for(let i=0;i<arr1.length;i++){
    if(arr1[i]%2==0){
       sum = sum+ arr1[i]
       count++;
    }
}
console.log(sum / count);
// console.log(sum)