// Write a program to check if a number is a palindrome (e.g., 121, 1331)


let num = 152;
let originalNum = num;
let reversed = 0;  // 25   

for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
  let digit = temp % 10;  // 1
  reversed = reversed * 10 + digit;  // r = 25 *10 + 1   251
}

if (originalNum === reversed) {
  console.log(originalNum + " is a Palindrome");
} else {
  console.log(originalNum + " is Not a Palindrome");
}
