const {readFileSync, writeFileSync} = require('fs')
console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')

const second = readFileSync('./content/second.txt', 'utf8')

console.log('done with this task')

//console.log(first, second)

writeFileSync('./content/subfolder/new.txt',
`The contents in the file are : ${first} and ${second}`,
{flag : 'a' }
);

console.log('starting the next task')