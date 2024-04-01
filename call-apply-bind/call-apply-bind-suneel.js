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
//function no patameter
let userNameFun = function(){
    console.log(this.firstName + " " + this.lastName)
}

//function with parameter
let userNameFunwithstate = function(city,country){
    console.log(this.firstName + " " + this.lastName + " "+"state" + " " + city + " " + country)
}
//userName 3
let userName3 = {
    firstName:"daniyal",
    lastName:"ali",
    class:"seven",
    Age:19,
  
}

userNameFun.call(userName3)

//userName 4
let userName4 = {
    firstName:"soft",
    lastName:"ware",
    class:"Eight",
    Age:20
}
//passed with string , Array or Obejct 
userNameFunwithstate.call(userName4,"karachi","pakistan");

// apply k help say ham multiple argument array may pass karsaktay hay
userNameFunwithstate.apply(userName4,["karachi","pakistan","us"]);

// bind function same as call par function but bind function ko direct call nhy kara saktay bind may function ka copy banatay hay or var may store kara letay hay or condition kay mutabiq call kara letay hay.....
// ++++++++++++++++++++++ Chai or  Code || Call and this ++++++++++++++++
















