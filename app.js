// Modules

// commonjs every file is a module by default
// Modules -> Encapsulated Code (only share minimum)

const { john, peter } = require('./4-names')
const sayHi = require('./utils')

sayHi(john);
sayHi(peter);
sayHi('Susan');
