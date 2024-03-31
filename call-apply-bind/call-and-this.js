// method:01
let userName1 = {
    firstName:"daniyal",
    lastName:"ali",
    class:"seven",
    Age:19,
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(userName1.fullName());

let userName2 = {
    firstName:"Ahmed",
    lastName:"ali",
    class:"Eight",
    Age:20
}

//userName2 may function mojood nhy hay pr userName1 say ham nay borrow kar leya bhai

console.log(userName1.fullName.call(userName2))


// method:02
let userNameFun = function(){
    console.log(this.firstName + " " + this.lastName)
}

let userName3 = {
    firstName:"daniyal",
    lastName:"ali",
    class:"seven",
    Age:19,
  
}

userNameFun.call(userName3)

let userName4 = {
    firstName:"soft",
    lastName:"ware",
    class:"Eight",
    Age:20
}

userNameFun.call(userName4)
















