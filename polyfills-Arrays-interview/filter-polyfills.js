let arr =["daniyal","ali","afaq","nazir","shamim"];
let filterarray = arr.filter(((item)=>{
    return item.length > 4
}))
console.log(filterarray);

//filter polyfill in js
// may nay bnaya hay custom polfills in for filter

let arr1 = ["daniyal","ali","ayan","nazir","shamim"];
Array.prototype.filter1 = function (cb){
    let newArray = [];
    for(let i =0 ; i<this.length; i++){
        if(cb(this[i]))
        newArray.push((this[i] + " " + this[i].length))
    }
    return newArray;
}

let filterarray1 = arr1.filter1((item)=>{
    return item.length > 4
})
console.log(filterarray1);










    




