
let name = "daniyal is good daniyal is a good hello daniyal hello";
let nameArr = name.split(" ")
let unique = [];
let seen = {};

for(let i=0; i <= nameArr.length-1; i++ ){
    let value = nameArr[i];
    console.log(!seen[value]);
    if(!seen[value]){
        seen[value] = true;
        unique.push(value);
    }
}

console.log(unique)
console.log(seen)