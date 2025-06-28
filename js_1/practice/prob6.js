// Swap the first and last element of an array.

let arr = [10, 20, 30, 40, 50];

let first = 0;
let last = arr.length - 1;

// Swapping first and last element
let temp = arr[first];
arr[first] = arr[last];
arr[last] = temp;

console.log("Array after swapping:", arr);
