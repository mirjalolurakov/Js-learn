let discount = prompt('Какая скидка?')

let totalSale = Number

let total = Number

let max = Object

let min = Object

let average = Number


let arr = [

    {

        name: 'Milk',

        price: 3.25

    },

    {

        name: 'Coffee',

        price: 1.5

    },

    {

        name: 'Ice Cream',

        price: 7.85

    },

    {

        name: 'Tomatos',

        price: 4.14

    },

    {

        name: 'Onion',

        price: 2.25

    }

]

const setup = (arg) => {
    // first task find max total

    let maxPrice = 0
    let maxIndex = 0

    arr.filter((item) => {
        if (item.price > maxPrice) {
            maxPrice = item.price
            maxIndex++
        }
    })
    max = arr[maxIndex]


    // second task find min price

    let minPrice = arr[0].price
    let minIndex = 0
    arr.filter((item, index, arr) => {
        if (index < arr.length - 2 && arr[index + 1].price < minPrice) {
            minPrice = item.price
            minIndex++
        }
    })
    min = arr[minIndex]

    // third task find total price
    total = 0
    arr.filter((item) => {
        total += item.price
    })

    // thourt task find total Sale
    
    let realDiscount = 0
    if (+discount > 0 && +discount <= 100) {
        realDiscount = Math.round(+discount)
    }
    totalSale = 0
    arr.filter((item) => {
        totalSale += item.price * realDiscount / 100
    })



    console.log('Task 1 max price ->', max)
    console.log('Task 2 min price ->', min)
    console.log('Task 3 total price', total)
    console.log('Task 5 discount', totalSale)
}


setup(arr)
