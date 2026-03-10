
let name = "daniyal is good boi daniyal is a good hello daniyal hello boi";
let arr = name.split(" ")
let unique = [];
let seen = {};

for(let i=0; i <= arr.length-1; i++ ){
    let value = arr[i];
    console.log(!seen[value]);
    if(!seen[value]){
        seen[value] = true;
        unique.push(value);
    }
}

console.log(unique)
console.log(seen)