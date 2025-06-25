// print all number from 1 to 20 that are divisible by 3 and 5

// for(let i=1;i<=20;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i)
//     }
// }

// find the factorial of 5
// 5*4*3*2*1

let count = 1;

for (let i = 1; i <= 5; i++) {
  count = count * i;
}
// console.log(count)

//i =1 , count = 1 *1 , c= 1
//i =2 , count = 1 *2 , c= 2
//i =3 , count = 2 *3 , c= 6
//i =4 , count = 6 *4 , c= 24
//i =5 , count = 24 *5 , c= 120

// let a = 75.89;

// console.log(Math.floor(a))

// print from 1 to 10

// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     break;
//   }

//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     continue;
//   }

//   console.log(i);
// }

// check the number is a prime number or not

let a = 5;
let c = 1;

if(a<2){
    console.log("not a prime no")
}else{
    for(let i=1;i<=a;i++){
        if(a%i==0){
           c++; 
        }
    }
}

// console.log(c)

if(count==2){
    console.log("prime no")
}


// i = 2. 2<=5 , if(5%2 == 0) 
// i = 2. 3<=5 , if(5%2 == 0)
// i = 2. 2<=5 , if(5%2 == 0)
// i = 2. 2<=5 , if(5%2 == 0)
// i = 2. 2<=5 , if(5%2 == 0)
// 
