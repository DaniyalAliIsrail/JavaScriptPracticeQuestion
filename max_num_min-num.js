// max number
let arr = [3,4,5,4,8];
let max = arr[0]
for(let i=1; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max)

// Min Number
let arr1 = [3,4,5,4,8];
let min = arr[0]
for(let i=1; i<arr.length; i++){
    if(arr[i] < min){
       min = arr[i]
    }       
}
console.log(min)