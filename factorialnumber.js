const factoralNumber = (num) =>{
    if(num == 0 || num == 1){
        return 1;
    }
    else{
        return(num*factoralNumber(num-1));
    }
}
const user = factoralNumber(3)
console.log(`The factorial number is ${user}`);