function sum (x){
    return function(y){
        if (y) return sum(x+y)
        return x;
    }
}

console.log(sum(2)(3)(1)());