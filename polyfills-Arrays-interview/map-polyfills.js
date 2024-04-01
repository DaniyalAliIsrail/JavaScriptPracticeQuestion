//write a polyfill for the map function in javascript;
// myMap function ko js array kay sath call karo gey this use array ko consider karay ag or usy array par sara operation karya ga

// let arr1 = [1,2,3,4,5]
// Array.prototype.myMap1 = function(cb){
//     let newArray = [];
//     for(i=0; i<this.length; i++){
//         newArray.push(cb(this[i],i,arr1))
//     }
//     return newArray
// }
// const data = arr1.myMap1((item,index,orginalArray)=>{
//     console.log(item,index,orginalArray);
//     return item * 2
// })
// console.log(data);

Array.prototype.myMap1 = function(cb) {
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        newArray.push(cb(this[i]),i,this[i]);
    }
    return newArray;
}

let arr = [1, 2, 3, 4, 5];

let square = function(x) {
    return x * x;
}

const myFun = arr.myMap1(square);
console.log(myFun);

