
// variables
const userName = "Mirjalol"
const password = 7777
const money = 10000

// start our logic
let userLogin = prompt("What is your name?")

 if(userLogin === userName){
    let userPassword = prompt("Enter your password please")

    if(userPassword){
        let userWithdrowAmount = prompt("how much money do you want to withdraw?")

        if(userWithdrowAmount){
            let remainingMoney = money - userWithdrowAmount
            alert('Remained money $' + remainingMoney )
        }else{
            alert("Error, please enter money to withdraw")
        }
    }else{
        alert("Error, please enter your password")
    }
 }
 else{
   alert("Error, please enter your name")
 }