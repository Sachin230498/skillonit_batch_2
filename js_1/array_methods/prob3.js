// sorting

let arr = [45, 78, 12, 7, 8, 1, 3, 5];

let num = [7, 9, 8, 2, 1, 5, 4, 1, 6];

// bubble sort

function sorting(){
    
}

for(let i=0;i<arr.length;i++){
   for(j=0;j<arr.length-1-i;i++){
    if(arr[j]>arr[j+1]){
        // swaping
        let temp = arr[j];
        arr[j]= arr[j+1];
        arr[j+1]=temp
  
    }
   }
}


// console.log(num.sort())

// console.log(arr.sort())


// let x =arr.sort(function(a,b){
//     return b-a
// })

// console.log(x)

