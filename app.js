// Modules

// commonjs every file is a module by default
// Modules -> Encapsulated Code (only share minimum)

const { john, peter } = require('./4-names')
const sayHi = require('./5-utils')
// const { items, singlePerson } = require('./6-alternative-module')
const data = require('./6-alternative-module')
require('./7-mind-granade');

// console.log(data.items);
// console.log(data.singlePerson);

// sayHi(john);
// sayHi(peter);
// sayHi('Susan');
