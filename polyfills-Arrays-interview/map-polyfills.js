//write a polyfill for the map function in javascript;
let arr1 = [1,2,3,4,5]
Array.prototype.myMap1 = function(cb){
    let newArray = [];
    for(i=0; i<this.length; i++){
        newArray.push(cb(this[i],i,arr1))
    }
    return newArray
}

const data = arr1.myMap1((item,index,orginalArray)=>{
    console.log(item,index,orginalArray);
    return item * 2
})
console.log(data);


