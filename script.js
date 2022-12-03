// const numbers = [5, 7, 44, 33, 12, 18, 2, 25, 1, 45, 9, 37]
// const result_even = []
// const resul_odd = []


// const isOdd = (num) => num % 2 !== 0;
// const odd = numbers.filter(isOdd).push('result_odd');

// const isEven = (num) => num % 2 == 0;
// const even = numbers.filter(isEven).push('result_even');


// console.log(odd, even);


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

// let total = students.reduce((a,b) => {
//     return a + b.age
// }, 0)

// let average = total / students.length

// console.log(average.toFixed(1));

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
    } else {
      b.arr.push(info);
    }
  });   


  informations.filter((result) => {
    if (result.completed === true) {
      a.count++
    } else {
      b.count++
    }
  }); 
 
  console.log(a, b)