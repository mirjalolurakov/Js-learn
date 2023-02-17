const counters = document.querySelectorAll('.value')
const speed = 300;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('num');
        const data = +counter.innerText;

        const time = value / speed;


        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);

        }
    }
    animate();
});
// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let successful = []

let unSuccessful = []

let taxes = Number

let taxesMax = {}

let taxesMin = {}

/// Реальные данные 2021*

let bank = [

    {

        name: 'Apple',

        budget: 1000000,

        tax: 28,

        expensesPerYear: [

            { title: 'Salaries', total: 125000 },

            { title: 'Utilites', total: 18000, },

            { title: 'Rent', total: 258000 }

        ]

    },

    {

        name: 'Microsoft',

        budget: 988000,

        tax: 21,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 148000

            },

            {

                title: 'Utilites',

                total: 124000,

            },

            {

                title: 'Rent',

                total: 314000

            }

        ]

    },

    {

        name: 'HP',

        budget: 609000,

        tax: 14,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 414000

            },

            {

                title: 'Utilites',

                total: 19000,

            },

            {

                title: 'Rent',

                total: 114400

            }

        ]

    },

    {

        name: 'Xiomi',

        budget: 889500,

        tax: 17,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 318000

            },

            {

                title: 'Utilites',

                total: 14000,

            },

            {

                title: 'Rent',

                total: 169000

            }

        ]

    },

    {

        name: 'Samsung',

        budget: 889500,

        tax: 12,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 650400

            },

            {

                title: 'Utilites',

                total: 29000,

            },

            {

                title: 'Rent',

                total: 212000

            }

        ]

    },

]

// 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах

// 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ procent в объектах. Например компания в месяц зарабатывает 100,000, а тратит 25,000, значит ее ключ procent = 25%

// 3. Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax

// 4. Сохранить в переменной taxes общее количество налогов со всех компаний. Например все платят по 20,000 в месяц. В итоге taxes = 100,000

// 5. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги

// 6. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег в компании после вычета всех налогов и трат

//  Писать весь код в функции `setup()`

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА

const setup = (arg) => {
    let taxes = 0
    let arr = []
    for (let item of arg) {
        item.expensesPerYear = 0
        for (let item of item.expensesPerYear) {
            item.expensesPerYear += item.total / 12
        }
        item.procent = item.expensesPerYear * 100 / (item.budget / 12)
        let tax = item.tax * (item.budget / 12) / 100
        let total = (item.budget / 12) + (item.expensesPerYear + tax)

        item.procentTax = item.procent + item.tax

        item.totalMoney = budget.mounth - item.procentTax * (budget / 12)

        if (total < 100) {
            successful.push(item.name)
        } else {
            unSuccessful.push(item.name)
        }
        // item.totalMoney = item.budget
        for (i = 0; i < arr.length; i++) {
            taxes = taxes + arr[i]
        }

    }


}
console.log(bank);
console.log(taxes);
console.log(successful)
console.log(unSuccessful)

setup(bank)
