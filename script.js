let types = {
   string: [],
   number: [],
   object: [],
   boolean: [],
}


bankUser = {
   name: 'Mark',
   age: 22,
   street: 'Amira Timura 32',
   married: false,
   clever: true,
   famaly: {
      mother: 'Marya',
      father: 'Jack',
      brother: 'Linkoln',
      sister: 'Sofya',
      grandmother: 'Neli'
      
   }
}
bankAccount = {
   cash: [120120, 121212, 1321313, 1313133, 1313, 343444, 222],
   credit: '12212910$',
   investments: '21212121212122$'     
}

let newObj = Object.assign({}, bankUser, bankAccount)
let allKeys = Object.keys(newObj)
let allvalues = Object.values(newObj)
let allAssigin = Object.assign({}, allKeys, allvalues)


allAssigin.filter(valueTypes => {
   if(typeof (valueTypes) === 'number'){
      allAssigin.push(types.number)
   }else if(typeof (valueTypes) === 'string'){
       allAssigin.push(types.string)
   }else if(typeof (valueTypes) === 'boolean'){
            allAssigin.push(types.boolean)
   }
   else{
      console.log(bye)
   }
})



console.log(allAssigin);
console.log(types);
 






