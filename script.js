
const numbers = [5, 7, 44, 33, 12, 18, 2, 25, 1, 45, 9, 37]
const result_even = []
const resul_odd = []


const isOdd = (num) => num % 2 !== 0;
const odd = numbers.filter(isOdd).push('result_odd');

const isEven = (num) => num % 2 == 0;
const even = numbers.filter(isEven).push('result_even');


console.log(odd, even);


