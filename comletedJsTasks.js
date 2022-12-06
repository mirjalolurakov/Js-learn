// First homework
 let username = "Jaks "
 username  = "Tom"
 let balance = 25000
 let car = 4480
 let food = 890
 let invoice = 5500
 let stock = 4200

 let totalBalance = balance - car - food + invoice + stock

 console.log(totalBalance);
 
 //Task 1

let strOne = "aaa@bbb@ccc" 

console.log(
    strOne.split('@').join('!')
)
 
//Task 2

let strTwo = "HELLOWORLD"
let a = strTwo.split(' ')

console.log(
    strTwo[0].toUpperCase() + strTwo.toLowerCase().slice(1) 
)

//Task 3

let strThree = "Hello, it is HTML"
console.log(
    strThree.split('Hello, it is HTML').join('Hello, it is not JS')

)

//Task 4

let name = "alex"
console.log(
    name[0].toUpperCase() + name.toLowerCase().slice(1)

)
    
//Task 5

Math.random().toString

//Task 6

let strFour = "Lex Luter has a big suit"


console.log(
    strFour.split('Lex Luter has a big suit').join('Alex')
)

// # */ Second Lesson */
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

const userAge = prompt('how old are you' ,'19')
if (userAge >= 18){
    console.log("Welcome!")
}
else{
console.log("Bye man!")
}



let guests = "Obama Trump Macron Biden Putin"
let nameIs = prompt('Heeeli')

if (guests.includes(nameIs)) {
    console.log(
        "welcome"
    )
}
else {

    console.log("bye")
}

let age = prompt('Сколько вам лет?')
if (age >= 0 && age <= 15) {
    console.log('you are child')
}
else if (age >= 15 && age <= 19) {
    console.log(
        'Вы еще подросток'
    )
}

else if (age >= 20 && age <= 40) {
    console.log(
        'Nice вы мужик'
    )
}
else {
    console.log(
        'ЧЕ'
    )
}

let mounth = prompt('Какой сейчас месяц?')
if (mounth > 1 && mounth < 3 || mounth === 12) {
    console.log('Сейчас Холодно')
}
else if (mounth >= 3 && mounth <= 5) {
    console.log(
        'Чуть дует но видно солнце'
    )
}

else if (mounth >= 5 && mounth <= 8) {
    console.log(
        'Сейчас классно жара'
    )
}
else if (mounth >= 8 && mounth <= 11) {
    console.log('Ocень')
}
else {
    console.log(
        'Bye '
    )
}



let operator = prompt('Enter operator ( either +, -, * or / ): ');
let number1 = parseFloat(prompt('Enter first number: '));
let number2 = parseFloat(prompt('Enter second number: '));
let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
console.log(${number1} ${operator} ${number2} = ${result});

let guests = "Obama Trump Macron Biden Putin"
let nameIs = prompt('Heeeli')

if (guests.includes(nameIs)) {
console.log(
"welcome"
)
}
else {

console.log("bye")
}

let age = prompt('Сколько вам лет?')
if (age >= 0 && age <= 15) {
console.log('you are child')
}
else if (age >= 15 && age <= 19) {
console.log(
'Вы еще подросток'
)
}

else if (age >= 20 && age <= 40) {
console.log(
'Nice вы мужик'
)
}
 else 
console.log(
'ЧЕ'
)


let mounth = prompt('Какой сейчас месяц?')
if (mounth > 1 && mounth < 3 || mounth === 12) {
console.log('Сейчас Холодно')
}
else if (mounth >= 3 && mounth <= 5) {
console.log(
'Чуть дует но видно солнце'
)
}

else if (mounth >= 5 && mounth <= 8) {
console.log(
'Сейчас классно жара'
)
}
else if (mounth >= 8 && mounth <= 11) {
console.log('Ocень')
}
else {
console.log(
'Bye '
)
}


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

        if(userWithdrowAmount ){
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
    let  cashVisitor = confirm("Have you cash more $100?")
    if(cashVisitor  === true){
        alert('У вас достаточно денег')
    }
    else{
        alert('У вас мало денег')
    }

 }
 else(
    console.log("Error, please enter your name")
 )

const numbers = [5, 7, 44, 33, 12, 18, 2, 25, 1, 45, 9, 37]
const result_even = []
const resul_odd = []


const isOdd = (num) => num % 2 !== 0;
const odd = numbers.filter(isOdd).push('result_odd');

const isEven = (num) => num % 2 == 0;
const even = numbers.filter(isEven).push('result_even');


console.log(odd, even);


let students = [
    {
        name: 'Timur', 
        age: 17,
        gender: 'male'
    },
    {
        name: 'Zafar', 
        age: 17,
        gender: 'male'
    },
    {
        name: 'Nigina', 
        age: 17,
        gender: 'female'
    },
    {
        name: 'Madina', 
        age: 16,
        gender: 'female'
    },
    {
        name: 'Samir', 
        age: 14,
        gender: 'male'
    },
    {
        name: 'Aziz', 
        age: 15,
        gender: 'male'
    },
    {
        name: 'Mirjalol', 
        age: 18,
        gender: 'male'
    },
    {
        name: 'Umar', 
        age: 16,
        gender: 'male'
    },
    {
        name: 'Maxdi', 
        age: 15,
        gender: 'male'
    },
    {
        name: 'Munis', 
        age: 18,
        gender: 'male'
    },
    {
        name: 'Laziz', 
        age: 15,
        gender: 'male'
    }
]



let male = []
let female = []

students.filter(student => {
    if(student.gender === 'male') {
        male.push(student)
    } else {
        female.push(student)
    }
})
console.log(
       male, 
    female
);





    let informations = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut au`tem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
  
            "completed": false   
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "userId": 1,
   
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "userId": 1,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        },
    ]
    let a = {
        count: 0,
        arr: []
    }
   
    let b = {
        count: 0,
        arr: []
    }


informations.filter((info) => {
    if (info.completed === true) {
      a.arr.push(info);
      a.count++
    } else {
      b.arr.push(info);
      b.count++

    }
  });   