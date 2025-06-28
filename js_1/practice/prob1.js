// Reverse a number using a while loop (e.g., 4321 → 1234)


let num = 4321;
let reversed = 0;

while (num > 0) {
  let digit = num % 10;  // 1 , 2  , 3 , 4
  reversed = reversed * 10 + digit;  // 0*10+1 = 1 , 1*10+2 =12 , 12*10+3= 123 , 123*10+4 = 1234
  num = Math.floor(num / 10); // 432  , 43 , 4
}

console.log(reversed); 
