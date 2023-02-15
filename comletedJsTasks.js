// // First homework
// let username = "Jaks"
// username  = "Tom"
// let balance = 25000
// let car = 4480
// let food = 890
// let invoice = 5500
// let stock = 4200

// let totalBalance = balance - car - food + invoice + stock

// console.log(totalBalance);

// //Task 1

// let strOne = "aaa@bbb@ccc"

// console.log(
//    strOne.split('@').join('!')
// )

// //Task 2

// let strTwo = "HELLOWORLD"
// let a = strTwo.split(' ')

// console.log(
//    strTwo[0].toUpperCase() + strTwo.toLowerCase().slice(1)
// )

// //Task 3

// let strThree = "Hello, it is HTML"
// console.log(
//    strThree.split('Hello, it is HTML').join('Hello, it is not JS')

// )

// //Task 4

// let name = "alex"
// console.log(
//    name[0].toUpperCase() + name.toLowerCase().slice(1)

// )

// //Task 5

// Math.random().toString

// //Task 6

// let strFour = "Lex Luter has a big suit"


// console.log(
//    strFour.split('Lex Luter has a big suit').join('Alex')
// )

// // # */ Second Lesson */
// const number = prompt("Enter to check number: ")

// if (number % 2 == 0){
//    console.log("The number is even")
// }
// else{
//    console.log("The number is odd")
// }

// const userName = prompt("Waht is your name?")

// if (userName.length % 2 == 0 ){
//    console.log("Your name even, Nice!")
// }
// else{
//    console.log("Very bad, your name odd!")
// }

// const userAge = prompt('how old are you' ,'19')
// if (userAge >= 18){
//    console.log("Welcome!")
// }
// else{
// console.log("Bye man!")
// }



// let guests = "Obama Trump Macron Biden Putin"
// let nameIs = prompt('Heeeli')

// if (guests.includes(nameIs)) {
//    console.log(
//        "welcome"
//    )
// }
// else {

//    console.log("bye")
// }

// let age = prompt('Сколько вам лет?')
// if (age >= 0 && age <= 15) {
//    console.log('you are child')
// }
// else if (age >= 15 && age <= 19) {
//    console.log(
//        'Вы еще подросток'
//    )
// }

// else if (age >= 20 && age <= 40) {
//    console.log(
//        'Nice вы мужик'
//    )
// }
// else {
//    console.log(
//        'ЧЕ'
//    )
// }

// let mounth = prompt('Какой сейчас месяц?')
// if (mounth > 1 && mounth < 3 || mounth === 12) {
//    console.log('Сейчас Холодно')
// }
// else if (mounth >= 3 && mounth <= 5) {
//    console.log(
//        'Чуть дует но видно солнце'
//    )
// }

// else if (mounth >= 5 && mounth <= 8) {
//    console.log(
//        'Сейчас классно жара'
//    )
// }
// else if (mounth >= 8 && mounth <= 11) {
//    console.log('Ocень')
// }
// else {
//    console.log(
//        'Bye '
//    )
// }



// let operator = prompt('Enter operator ( either +, -, * or / ): ');
// let number1 = parseFloat(prompt('Enter first number: '));
// let number2 = parseFloat(prompt('Enter second number: '));
// let result;

// if (operator == '+') {
//    result = number1 + number2;
// }
// else if (operator == '-') {
//    result = number1 - number2;
// }
// else if (operator == '*') {
//    result = number1 * number2;
// }
// else {
//    result = number1 / number2;
// }
// console.log(${number1} ${operator} ${number2} = ${result});

// let guests = "Obama Trump Macron Biden Putin"
// let nameIs = prompt('Heeeli')

// if (guests.includes(nameIs)) {
// console.log(
// "welcome"
// )
// }
// else {

// console.log("bye")
// }

// let age = prompt('Сколько вам лет?')
// if (age >= 0 && age <= 15) {
// console.log('you are child')
// }
// else if (age >= 15 && age <= 19) {
// console.log(
// 'Вы еще подросток'
// )
// }

// else if (age >= 20 && age <= 40) {
// console.log(
// 'Nice вы мужик'
// )
// }
// else
// console.log(
// 'ЧЕ'
// )


// let mounth = prompt('Какой сейчас месяц?')
// if (mounth > 1 && mounth < 3 || mounth === 12) {
// console.log('Сейчас Холодно')
// }
// else if (mounth >= 3 && mounth <= 5) {
// console.log(
// 'Чуть дует но видно солнце'
// )
// }

// else if (mounth >= 5 && mounth <= 8) {
// console.log(
// 'Сейчас классно жара'
// )
// }
// else if (mounth >= 8 && mounth <= 11) {
// console.log('Ocень')
// }
// else {
// console.log(
// 'Bye '
// )
// }


// // variables
// const userName = "Mirjalol"
// const password = 7777
// const money = 10000

// // start our logic
// let userLogin = prompt("What is your name?")

// if(userLogin === userName){
//    let userPassword = prompt("Enter your password please")

//    if(userPassword){
//        let userWithdrowAmount = prompt("how much money do you want to withdraw?")

//        if(userWithdrowAmount ){
//            let remainingMoney = money - userWithdrowAmount
//            alert('Remained money $' + remainingMoney )
//        }else{
//            alert("Error, please enter money to withdraw")
//        }
//    }else{
//        alert("Error, please enter your password")
//    }
// }
// else{
//   alert("Error, please enter your name")
// }

// //  Task 2
// let visitorName = prompt("What is your name visitor?")


// if( visitorName[0] === "A" ||  visitorName[0] ===  "a" ){
//    let ageVisitor = prompt("How old are you visitor")

//    if(ageVisitor < 20 ){
//        alert('возраст подходит')
//    }
//    else if(ageVisitor =>40){
//        alert('возраст подходит')
//    }
//    else{
//        alert('Возраст не подходит')
//    }
//    let  cashVisitor = confirm("Have you cash more $100?")
//    if(cashVisitor  === true){
//        alert('У вас достаточно денег')
//    }
//    else{
//        alert('У вас мало денег')
//    }

// }
// else(
//    console.log("Error, please enter your name")
// )

// const numbers = [5, 7, 44, 33, 12, 18, 2, 25, 1, 45, 9, 37]
// const result_even = []
// const resul_odd = []


// const isOdd = (num) => num % 2 !== 0;
// const odd = numbers.filter(isOdd).push('result_odd');

// const isEven = (num) => num % 2 == 0;
// const even = numbers.filter(isEven).push('result_even');


// console.log(odd, even);


// let students = [
//    {
//        name: 'Timur',
//        age: 17,
//        gender: 'male'
//    },
//    {
//        name: 'Zafar',
//        age: 17,
//        gender: 'male'
//    },
//    {
//        name: 'Nigina',
//        age: 17,
//        gender: 'female'
//    },
//    {
//        name: 'Madina',
//        age: 16,
//        gender: 'female'
//    },
//    {
//        name: 'Samir',
//        age: 14,
//        gender: 'male'
//    },
//    {
//        name: 'Aziz',
//        age: 15,
//        gender: 'male'
//    },
//    {
//        name: 'Mirjalol',
//        age: 18,
//        gender: 'male'
//    },
//    {
//        name: 'Umar',
//        age: 16,
//        gender: 'male'
//    },
//    {
//        name: 'Maxdi',
//        age: 15,
//        gender: 'male'
//    },
//    {
//        name: 'Munis',
//        age: 18,
//        gender: 'male'
//    },
//    {
//        name: 'Laziz',
//        age: 15,
//        gender: 'male'
//    }
// ]



// let male = []
// let female = []

// students.filter(student => {
//    if(student.gender === 'male') {
//        male.push(student)
//    } else {
//        female.push(student)
//    }
// })
// console.log(
//       male,
//    female
// );





//    let informations = [
//        {
//            "userId": 1,
//            "id": 1,
//            "title": "delectus aut au`tem",
//            "completed": false
//        },
//        {
//            "userId": 1,
//            "id": 2,
//            "title": "quis ut nam facilis et officia qui",
//            "completed": false
//        },
//        {
//            "userId": 1,
//            "id": 3,
//            "title": "fugiat veniam minus",
//            "completed": false
//        },
//        {
//            "userId": 1,
//            "id": 4,
//            "title": "et porro tempora",

//            "completed": false
//        },
//        {
//            "userId": 1,
//            "id": 5,
//            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//            "completed": false
//        },
//        {
//            "userId": 1,
//            "id": 6,
//            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//            "completed": false
//        },
//        {
//            "userId": 1,
//            "id": 7,
//            "title": "illo expedita consequatur quia in",
//            "completed": false
//        },
//        {
//            "userId": 1,
//            "id": 8,
//            "title": "quo adipisci enim quam ut ab",
//            "completed": true
//        },
//        {
//            "userId": 1,

//            "id": 9,
//            "title": "molestiae perspiciatis ipsa",
//            "completed": false
//        },
//        {
//            "userId": 1,
//            "id": 10,
//            "title": "illo est ratione doloremque quia maiores aut",
//            "completed": true
//        },
//    ]
//    let a = {
//        count: 0,
//        arr: []
//    }

//    let b = {
//        count: 0,
//        arr: []
//    }


// informations.filter((info) => {
//    if (info.completed === true) {
//      a.arr.push(info);
//      a.count++
//    } else {
//      b.arr.push(info);
//      b.count++

//    }
//  });


// // variables
// const userName = "Mirjalol"
// const password = 7777
// const money = 10000

// // start our logic
// let userLogin = prompt("What is your name?")

// if (userLogin === userName) {
//     let userPassword = prompt("Enter your password please")

//     if (userPassword) {
//         let userWithdrowAmount = prompt("how much money do you want to withdraw?")

//         if (userWithdrowAmount) {
//             let remainingMoney = money - userWithdrowAmount
//             alert('Remained money $' + remainingMoney)
//         } else {
//             alert("Error, please enter money to withdraw")
//         }
//     } else {
//         alert("Error, please enter your password")
//     }
// }
// else {
//     alert("Error, please enter your name")
// }

// let guests = "Obama Trump Macron Biden Putin"
// let nameIs = prompt('Heeelo')

// if (guests.includes(nameIs)) {
//     console.log(
//         "welcome"
//     )
// }
// else {

//     console.log("bye")
// }

// let age = prompt('Сколько вам лет?')
// if (age >= 0 && age <= 15) {
//     console.log('you are child')
// }
// else if (age >= 15 && age <= 19) {
//     console.log(
//         'Вы еще подросток'
//     )
// }

// else if (age >= 20 && age <= 40) {
//     console.log(
//         'Nice вы мужик'
//     )
// }
// else {
//     console.log(
//         'ЧЕ'
//     )
// }

// let mounth = prompt('Какой сейчас месяц?')
// if (mounth > 1 && mounth < 3 || mounth === 12) {
//     console.log('Сейчас Холодно')
// }
// else if (mounth >= 3 && mounth <= 5) {
//     console.log(
//         'Чуть дует но видно солнце'
//     )
// }

// else if (mounth >= 5 && mounth <= 8) {
//     console.log(
//         'Сейчас классно жара'
//     )
// }
// else if (mounth >= 8 && mounth <= 11) {
//     console.log('Ocень')
// }
// else {
//     console.log(
//         'Bye '
//     )
// }



// let operator = prompt('Enter operator ( either +, -, * or / ): ');
// let number1 = parseFloat(prompt('Enter first number: '));
// let number2 = parseFloat(prompt('Enter second number: '));
// let result;

// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }
// console.log(`${number1} ${operator} ${number2} = ${result}`);

// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

// let discount = prompt('Какая скидка?')

// let totalSale = Number

// let total = Number

// let max = Object

// let min = Object

// let average = Number

// let arr = [

//     {

//         name: 'Milk',

//         price: 3.25

//     },

//     {

//         name: 'Coffee',

//         price: 1.5

//     },

//     {

//         name: 'Ice Cream',

//         price: 7.85

//     },

//     {

//         name: 'Tomatos',

//         price: 4.14

//     },

//     {

//         name: 'Onion',

//         price: 2.25

//     }

// ]

// let arr_sale = []

// 1. Сохранить самый дорогой товар в переменную`max`*

// 2. Сохранить самый дешевый товар в переменную`min`

// 3. Сохранить общую цену без скидок в переменную`total`

// 4. Сохранить общую цену со скидкой в переменную`totalSale`

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок

//  Писать весь код в функции `setup()`

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА

// const setup = (arguments) => {

//     // first task
//     let maxPrice = 0
//     let indexMax = 0
//     arr.filter((item) => {
//         if (item.price > maxPrice) {
//             maxPrice = item.price
//             indexMax++
//         }

//     })
//     max = arr[indexMax]


//     // second task
//     let minPrice = arr[0].price
//     let indexMin = 0
//     arr.filter((item, index, arr) => {
//         if (index < arr.length - 2 && arr[index + 1].price < minPrice) {
//             minPrice = item.price
//             indexMin++
//         }
//     })
//     min = arr[indexMin]


//     // third task
//     total = 0
//     arr.filter((item) => {
//         total += item.price
//     })


//     // fourth task
//     let realDiscount = 0
//     if (+discount > 0 && +discount <= 100) {
//         realDiscount = Math.round(+discount)
//     }
//     totalSale = 0
//     arr.filter((item) => {
//         totalSale += item.price * realDiscount / 100
//     })


//     arr_sale = arr.map((item) => {
//         return item = {
//             name: item.name,
//             price: item.price * realDiscount / 100
//         }
//     })


//     average = (arr.reduce((a, b) => a + b.price, 0))



//     console.log('Задание 1 ответ ->', max)
//     console.log('Задание 2 ответ ->', min)
//     console.log('Задание 3 ответ ->', total)
//     console.log('Задание 4 ответ ->', totalSale)
//     console.log('Задание 5 ответ ->', arr_sale)
//     console.log('Задание 6 ответ ->', average)
// }

// setup(arr)

// // ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

// let successful = []

// let unSuccessful = []

// let taxes = Number

// let taxesMax = {}

// let taxesMin = {}

// /// Реальные данные 2021*

// let bank = [

//     {

//         name: 'Apple',

//         budget: 1000000,

//         tax: 28,

//         expensesPerYear: [

//             { title: 'Salaries', total: 125000 },

//             { title: 'Utilites', total: 18000, },

//             { title: 'Rent', total: 258000 }

//         ]

//     },

//     {

//         name: 'Microsoft',

//         budget: 988000,

//         tax: 21,

//         expensesPerYear: [

//             {

//                 title: 'Salaries',

//                 total: 148000

//             },

//             {

//                 title: 'Utilites',

//                 total: 124000,

//             },

//             {

//                 title: 'Rent',

//                 total: 314000

//             }

//         ]

//     },

//     {

//         name: 'HP',

//         budget: 609000,

//         tax: 14,

//         expensesPerYear: [

//             {

//                 title: 'Salaries',

//                 total: 414000

//             },

//             {

//                 title: 'Utilites',

//                 total: 19000,

//             },

//             {

//                 title: 'Rent',

//                 total: 114400

//             }

//         ]

//     },

//     {

//         name: 'Xiomi',

//         budget: 889500,

//         tax: 17,

//         expensesPerYear: [

//             {

//                 title: 'Salaries',

//                 total: 318000

//             },

//             {

//                 title: 'Utilites',

//                 total: 14000,

//             },

//             {

//                 title: 'Rent',

//                 total: 169000

//             }

//         ]

//     },

//     {

//         name: 'Samsung',

//         budget: 889500,

//         tax: 12,

//         expensesPerYear: [

//             {

//                 title: 'Salaries',

//                 total: 650400

//             },

//             {

//                 title: 'Utilites',

//                 total: 29000,

//             },

//             {

//                 title: 'Rent',

//                 total: 212000

//             }

//         ]

//     },

// ]

// // 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах

// // 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ procent в объектах. Например компания в месяц зарабатывает 100,000, а тратит 25,000, значит ее ключ procent = 25%

// // 3. Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax

// // 4. Сохранить в переменной taxes общее количество налогов со всех компаний. Например все платят по 20,000 в месяц. В итоге taxes = 100,000

// // 5. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги

// // 6. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег в компании после вычета всех налогов и трат

// //  Писать весь код в функции `setup()`

// // ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА

// const setup1 = (arg) => {
//     let taxes = 0
//     let arr = []
//     for (let item of arg) {
//         item.expensesPerYear = 0
//         for (let item of item.expensesPerYear) {
//             item.expensesPerYear += item.total / 12
//         }
//         item.procent = item.expensesPerYear * 100 / (item.budget / 12)
//         let tax = item.tax * (item.budget / 12) / 100
//         let total = (item.budget / 12) + (item.expensesPerYear + tax)

//         item.procentTax = item.procent + item.tax

//         item.totalMoney = budget.mounth - item.procentTax * (budget / 12)

//         if (total < 100) {
//             successful.push(item.name)
//         } else {
//             unSuccessful.push(item.name)
//         }
//         // item.totalMoney = item.budget
//         for (i = 0; i < arr.length; i++) {
//             taxes = taxes + arr[i]
//         }

//     }


// }
// console.log(bank);
// console.log(taxes);
// console.log(successful)
// console.log(unSuccessful)

// setup1(bank)

// let hotel = [
//     [
//         {
//             room: 1,
//             price: 300,
//             brand: "Luxe",
//             children: false,
//         },
//         {
//             room: 2,
//             price: 4000,
//             brand: "Deluxe",
//             children: true,
//         },
//         {
//             room: 3,
//             price: 1000,
//             brand: "Deluxe",
//             children: false,
//         },
//         {
//             room: 4,
//             price: 900,
//             brand: "Luxe",
//             children: true,
//         },
//     ],
//     [
//         {
//             room: 5,
//             price: 700,
//             brand: "Luxe",
//             children: true,
//         },
//         {
//             room: 6,
//             price: 79000,
//             brand: "President",
//             children: true,
//         },
//         {
//             room: 7,
//             price: 600,
//             brand: "Luxe",
//             children: false,
//         },
//         {
//             room: 8,
//             price: 950,
//             brand: "Luxe",
//             children: true,
//         },
//     ],
//     [
//         {
//             room: 9,
//             price: 1900,
//             brand: "Deluxe",
//             children: false,
//         },
//         {
//             room: 10,
//             price: 5000,
//             brand: "Deluxe",
//             children: true,
//         },
//         {
//             room: 11,
//             price: 1000,
//             brand: "Deluxe",
//             children: false,
//         },
//         {
//             room: 12,
//             price: 250,
//             brand: "Luxe",
//             children: false,
//         },
//     ],
//     [
//         {
//             room: 13,
//             price: 10000,
//             brand: "President",
//             children: true,
//         },
//         {
//             room: 11,
//             price: 8000,
//             brand: "President",
//             children: false,
//         },
//     ],
// ];

// let rooms = {
//     all_roms: [],
//     rooms: 0,
// };
// let brands = {
//     president: [],
//     deluxe: [],
//     luxe: [],
// };

// let room_level = {
//     perviy: 0,
//     vtoroy: 0,
//     tretiy: 0,
//     chetvertiy: 0,
// };
// //1 отфильтровать по категориям
// //2 добавить ключ eting с буленовым значением в каждый номер
// //3 посчитать и красиво раставить все команты переменную rooms
// //4 найти самую дорогую комнату
// //5 посчитать сколько стоит каждый этаж
// //6 посчитать сколько стоят все комнаты вместе взятые
// //7 найти все комнаты в которых живут дети

// // Task 1
// for (let i = 0; i < hotel.length; i++) {
//     for (let j = 0; j < hotel[i].length; j++) {
//         if (hotel[i][j].brand == 'Deluxe') {
//             brands.deluxe.push(hotel[i][j])
//         } else if (hotel[i][j].brand == 'Luxe') {
//             brands.luxe.push(hotel[i][j])
//         } else if (hotel[i][j].brand == 'President')
//             brands.president.push(hotel[i][j])
//     }
// }

// // Task 2
// for (let i = 0; i < hotel.length; i++) {
//     for (let j = 0; j < hotel[i].length; j++) {
//         hotel[i][j].eating = true, false;
//     }
// }

// // Task 4
// let expensiveRoom = hotel.reduce((max, min) => max.price > min.price ? max : min);

// //task 7
// let allChildRooms = [];
// for (let i = 0; i < hotel.length; i++) {
//     for (let j = 0; j < hotel[i].length; j++) {
//         if (hotel[i][j].children === true) {
//             allChildRooms.push(hotel[i][j]);
//         }

//     }
// }






// console.log('Brands =>', brands)
// console.log('Max room price =>', expensiveRoom)
// console.log('Rooms with children', allChildRooms)


// const cards_block = document.querySelector('.cards');
// const cards = document.querySelectorAll('.cards > div');

// function start() {
//     const random = Math.floor(Math.random() * 15); // От 1 до 15
//     cards_block.style.left = -random * 100 + 'px';
//     setTimeout(function () {
//         random++;
//         cards[random].style.background = '#7B90F7';
//         cards[random].style.color = 'white';
//     }, 5000)
// }

// const userLogin1 = document.getElementById("userLogin");
// const userPassword = document.getElementById("userPassword");
// const btnShowName = document.getElementById("btnGetName")
// //create new h2 element
// const responseContent = document.getElementById('response')
// const userNameText = document.createElement('h2')
// const userAgeText = document.createElement('h2')

// btnShowName.onclick = function () {

//     if (userLogin.value == "admin" && userPassword.value == "1234567") {
//         userNameText.innerText = "you successfully logged in our website"
//     } else {
//         userNameText.innerText = "please try again. Username or password is wrong"
//         userNameText.className = 'error'
//     }

//     responseContent.appendChild(userNameText)
// }


