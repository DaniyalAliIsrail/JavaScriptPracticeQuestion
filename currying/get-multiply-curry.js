function mul(x){
    return function(y){
        if(y) return mul(x*y)
        return x
    }
}
console.log(mul(3)(2)());