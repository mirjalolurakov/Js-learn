let people = [
   {
      id: Math.random(),
      name: 'Timur',
      info: {
         school: '235',
         faculity: 'SMM'
      },
   },
   {
      id: Math.random(),
      name: 'Imran',
      info: {
         school: 'ne izvestno',
         faculity: 'programming'
      },
   },
   {
      id: Math.random(),
      name: 'Aminjon',
      info: {
         school: '444',
         faculity: 'Dizayn'
      },
   },
   {
      id: Math.random(),
      name: 'Maxmud',
      info: {
         school: '777',
         faculity: '3dsmax'
      },
   },
   {
      id: Math.random(),
      name: 'Muxammad',
      info: {
         school: '5555',
         faculity: 'Backend'
      },
   },
   {
      id: Math.random(),
      name: 'Timur',
      info: {
         school: '235',
         faculity: 'SMM'
      },
   },
   {
      id: Math.random(),
      name: 'Imran',
      info: {
         school: 'ne izvestno',
         faculity: 'programming'
      },
   },
   {
      id: Math.random(),
      name: 'Aminjon',
      info: {
         school: '444',
         faculity: 'Dizayn'
      },
   },
   {
      id: Math.random(),
      name: 'Maxmud',
      info: {
         school: '777',
         faculity: '3dsmax'
      },
   },
   {
      id: Math.random(),
      name: 'Maxmud',
      info: {
         school: '777',
         faculity: '3dsmax'
      },
   },
   {
      id: Math.random(),
      name: 'Muxammad',
      info: {
         school: '5555',
         faculity: 'Backend'
      },
   },
]


let categories = [
   {
      course: ' SMM',
      count: 0
   },
   {
      course: 'PROGRAMMING',
      count: 0
   },
   {
      course: '     3DSMAX',
      count: 0
   },
   {
      course: 'DIZAYN',
      count: 0
   },
   {
      course: '   BACKEND',
      count: 0
   },
]





for (const person of people) {
   let transformDizaynText = categories[3].course[0].toUpperCase() + categories[3].course.toLowerCase().slice(1)
   if (person.info.faculity === categories[0].course.trim()) {
      categories[0].count = categories[0].count + 1
   } else if (person.info.faculity === categories[1].course.toLocaleLowerCase()) {
      categories[1].count = categories[1].count + 1
   } else if (person.info.faculity === categories[2].course.trim().toLowerCase()) {
      categories[2].count = categories[2].count + 1
   } else if (person.info.faculity === categories[3].course === transformDizaynText) {
      categories[3].count = categories[3].count + 1
   } else if (person.info.faculity === categories[4].course.trim().toLowerCase) {
      categories[4].count = categories[4].count + 1
   }
}
console.log(categories)


