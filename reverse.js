// // for loop
let arr = "daniyal ali is good boi";

for(let i=arr.length-1; i>= 0; i--){
    console.log(arr[i])
}

// //  while loop
// let arr1 = "daniyal";
// let i = arr1.length -1

// while(i>=0){
//     console.log(arr1[i]);
//     i--
// }

// reverse string

var str = "daniyal is a good boi";
var stringtoArray= str.split(" ")
console.log(stringtoArray);
let savedString = stringtoArray.map((item)=>(
     item.split("").reverse().join("")
))
console.log(savedString)