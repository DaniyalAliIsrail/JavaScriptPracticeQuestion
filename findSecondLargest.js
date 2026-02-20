let num = [25,16,38,10,35,48,20,50];
let max1
let max2
if(num[0]>num[1]){
     max1 = num[0]
     max2 = num [1]
}else{
     max1 = num[1]
     max2 = num[2]
}
for(let i = 2; i<=num.length-1; i++){
    if(num[i] > max1){
        max2 = max1
        max1 = num[i]
    }else if(num[i] > max2){
        max2 = num[i]
    }
}
console.log(max1)
console.log(max2)