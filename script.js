let hotel = [
   [
      {
         room: 1,
         price: 300,
         brand: "Luxe",
         children: false,
      },
      {
         room: 2,
         price: 4000,
         brand: "Deluxe",
         children: true,
      },
      {
         room: 3,
         price: 1000,
         brand: "Deluxe",
         children: false,
      },
      {
         room: 4,
         price: 900,
         brand: "Luxe",
         children: true,
      },
   ],
   [
      {
         room: 5,
         price: 700,
         brand: "Luxe",
         children: true,
      },
      {
         room: 6,
         price: 79000,
         brand: "President",
         children: true,
      },
      {
         room: 7,
         price: 600,
         brand: "Luxe",
         children: false,
      },
      {
         room: 8,
         price: 950,
         brand: "Luxe",
         children: true,
      },
   ],
   [
      {
         room: 9,
         price: 1900,
         brand: "Deluxe",
         children: false,
      },
      {
         room: 10,
         price: 5000,
         brand: "Deluxe",
         children: true,
      },
      {
         room: 11,
         price: 1000,
         brand: "Deluxe",
         children: false,
      },
      {
         room: 12,
         price: 250,
         brand: "Luxe",
         children: false,
      },
   ],
   [
      {
         room: 13,
         price: 10000,
         brand: "President",
         children: true,
      },
      {
         room: 11,
         price: 8000,
         brand: "President",
         children: false,
      },
   ],
];

let rooms = {
   all_roms: [],
   rooms: 0,
};
let brands = {
   president: [],
   deluxe: [],
   luxe: [],
};

let room_level = {
   perviy: 0,
   vtoroy: 0,
   tretiy: 0,
   chetvertiy: 0,
};
//1 отфильтровать по категориям
//2 добавить ключ eting с буленовым значением в каждый номер
//3 посчитать и красиво раставить все команты переменную rooms
//4 найти самую дорогую комнату
//5 посчитать сколько стоит каждый этаж
//6 посчитать сколько стоят все комнаты вместе взятые
//7 найти все комнаты в которых живут дети

// Task 1 
for (let i = 0; i < hotel.length; i++) {
   for (let j = 0; j < hotel[i].length; j++) {
      if (hotel[i][j].brand == 'Deluxe') {
         brands.deluxe.push(hotel[i][j])
      } else if (hotel[i][j].brand == 'Luxe') {
         brands.luxe.push(hotel[i][j])
      } else if (hotel[i][j].brand == 'President')
         brands.president.push(hotel[i][j])
   }
}

// Task 2 
for (let i = 0; i < hotel.length; i++) {
   for (let j = 0; j < hotel[i].length; j++) {
      hotel[i][j].eating = true, false;
   }
}

// Task 4
let expensiveRoom = hotel.reduce((max, min) => max.price > min.price ? max : min);

//task 7 
let allChildRooms = [];
for (let i = 0; i < hotel.length; i++) {
   for (let j = 0; j < hotel[i].length; j++) {
      if (hotel[i][j].children === true) {
         allChildRooms.push(hotel[i][j]);
      }

   }
}


console.log('Brands =>', brands)
console.log('Max room price =>', expensiveRoom)
console.log('Rooms with children', allChildRooms)

