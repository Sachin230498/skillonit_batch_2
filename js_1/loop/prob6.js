// Father is basically asking his son to plant 5 seeds in 5 farm but in horizontal fashion.


// for(let farm = 1;farm<=5;farm++){
//     let bag = "";
//     console.log("Farm no - ", farm);
//     for(let plant=1;plant<=5;plant++){
//         bag = bag + "*"
        
//     }
//     console.log(bag);
// }



// Father is asking his son to plant seeds, with the following commands
// 1 ==> *
// 2 ==> **
// 3 ==> ***
// 4 ==> ****
// 5 ==> *****


for(let farm = 1;farm<=5;farm++){
    let bag = "";
    // console.log("Farm no - ", farm);
    for(let plant=1;plant<=farm;plant++){
        bag = bag + "*"
        
    }
    console.log(bag);
}