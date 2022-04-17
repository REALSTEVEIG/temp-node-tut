//Every file is a module by default

const allNames = require('./4-names')

const sayHi = require('./5-utils')
//sayHi('sam')

const data = require('./6-alternative')

console.log(data)

console.log(data.singlePerson.name)

require('./7-mind-greenade')

//sayHi(allNames.steve)
//sayHi(allNames.joe)
//sayHi(allNames.secret)