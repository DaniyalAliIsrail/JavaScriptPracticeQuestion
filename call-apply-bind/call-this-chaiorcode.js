function setUserName(userName){
    this.userName = userName
    console.log("function called");
}
function createUser(userName,email,password){
    // setusername function execute ho raha hay pr 
    // execute honay kay bad call stack say delete ho 
    // ja raha hay or jetnay varibale banae thay us function kay 
    // andr wo sb delete ho ja raha hay..  function execute 
    // honay kay bad Reference ko hold kar kay rakhana hay 
    // wo call() method k help say hota hay..Syntax of 
    // call method call(this,function)

    setUserName.call(this,userName) // ye this createUser function ka current contect lay ga 
    this.email = email;
    this.password = password;
}

const myFun = new createUser("daniyal","daniyal@gmail.com","12345678")
console.log(myFun);