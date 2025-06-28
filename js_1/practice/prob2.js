// Calculate the sum of digits of a number using a while loop (e.g., 123 → 6).

let num = 123;
let sum = 0;

while (num > 0) { 
  let digit = num % 10;   // 3  2   1
  sum = sum + digit; // 0+3  3  ,  3+2 = 5, 5+1
  num = Math.floor(num / 10);  // 12    1
}

// console.log(sum); 


