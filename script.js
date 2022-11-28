
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
 
//  Task 2
 let visitorName = prompt("What is your name visitor?") 
 

 if( visitorName[0] === "A" ||  visitorName[0] ===  "a" ){
    let ageVisitor = prompt("How old are you visitor")
     
    if(ageVisitor < 20 ){
        alert('возраст подходит')
    }
    else if(ageVisitor =>40){
        alert('возраст подходит')
    }
    else{
        alert('Возраст не подходит')
    }
    let  cashVisitor = prompt("Have you cash more $100?")
    if(cashVisitor > 100){
        alert('У вас достаточно денег')
    }
    else{
        alert('У вас мало денег')
    }

 }
 else(
    console.log("Error, please enter your name")
 )