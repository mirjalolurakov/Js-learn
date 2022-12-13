const cars = [


   {
      car_name: "Amg",
      price: 84900,
      made: "Germany",
      id: 9,
      country__code: "29",
   },
   {
      car_name: "Volkswagen",
      price: 31224,
      made: "Germany",
      id: 9,
      country__code: "29",
   },
   {
      car_name: "Bmw",
      price: 89032,
      made: "Germany",
      id: 9,
      country__code: "29",
   },
   {
      car_name: "Toyta",
      price: 75349,
      made: "Japan",
      id: 9,
      country__code: "29",
   },
   {
      car_name: "Lada",
      price: 33990,
      made: "Russia",
      id: 9,
      country__code: "29",
   },
   {
      car_name: "Nissan",
      price: 29400,
      made: "Japan",
      id: 9,
      country__code: "29",
   },
   {
      car_name: "Laborgini",
      price: 20,
      made: "Italy",
      id: 9,
      country__code: "29",
   },

   {
      car_name: "Ford",
      price: 99999,
      made: "Germany",
      id: 9,
      country__code: "29",
   },

   {
      "color": ["Long Beach Blue", "Boat Tail Brown", " Amplify Orange", "Platinum Jubilee Silver", " Frozen Berry", "ow Gray", "Thundernight Metallic"]

   }


]

let cheap = []

//forEach
cars.forEach(car => {
   if (car.price < 35000) {
      cheap.push(car)

   }
})

console.log(cheap)

// map
// cars.map(carTwo => {
//    if (carTwo.price < 35000) {
//       cheap.push(carTwo)
//    }
// })

// console.log(cheap);

// cars.filter(car => {
//    if (car.price < 35000) {
//       cheap.push(car)
//    }
// })
// console.log(cheap);

// JS 4

// let checkIndex = prompt('Enter')
// let userName = ['Aleksey', 'Usman', 'Abu', 'Ali', 'Xasan']

// const mapUsername = userName.map((item, index) => {
//    if (checkIndex !== index) {
//       userName[index]
//    } else {
//       userName.splice()
//    }
// })

// console.log(mapUsername)


// userName.filter(item, index => {
//    if (index !== userName[checkIndex]) {
//       return userName
//    }
// })

// console.log(userName);

// // JS 5

const arr = [20, 35, 44]

const sum = arr.reduce(function (firstValue, secondValue) {
   return firstValue + secondValue;
});
console.log(sum)


