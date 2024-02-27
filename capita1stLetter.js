// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
let arrString = ["daniyal","ali","hello"];

for(let i=0; i<arrString.length; i++){
    console.log(arrString[i].charAt(0).toUpperCase() + arrString[i].slice(1))
}