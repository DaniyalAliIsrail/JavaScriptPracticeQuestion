const factoralNumber = (num) =>{
    if(num == 0 || num == 1){
        return 1;
    }
    else{
        return(num*factoralNumber(num-1));
    }
}
const user = factoralNumber(5)
console.log(`The factorial number is ${user}`);


const fact = (num)=>{
    if(num == 0 || num ==1){
        return 1
    }
    else{
        return num*fact(num-1)
    }
}

const factNum = fibo(3);
console.log(factNum);