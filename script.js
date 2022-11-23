const number = prompt("Enter to check number: ")

if (number % 2 == 0){   
    console.log("The number is even")
}
else{
    console.log("The number is odd")
}

const userName = prompt("Waht is your name?")
if (userName.length % 2 == 0 ){
    console.log("Your name even, Nice!")
}
else{
    console.log("Very bad, your name odd!")
}

const userAge = confirm("are you 18 years old?")
if (userAge === true){
    console.log("Then welcome!")
}
else{
console.log("Bye man!")
}


const guests = "Mirziyoev Putin Trump Biden Obama Macron"
console.log(
    guests.includes('Obama')

)
