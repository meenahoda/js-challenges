// https://coderbyte.com/challenges

const longestWord = require('./longest-word')
const firstFactorial = require('./first-factorial')
const firstReverse = require('./first-reverse')
const letterChanges = require('./letter-changes')
const simpleAdding = require('./simple-adding')
const letterCapitalise = require('./letter-capitalise')

const NUM = 8
const SHORT_SENTENCE = 'Hello world!'
const LONG_SENTENCE = 'Hello world, this is a very long sentence, but is it the longest in the world?'

const longestWordOutput = longestWord(LONG_SENTENCE)
const firstFactorialOutput = firstFactorial(NUM)
const firstReverseOutput = firstReverse(SHORT_SENTENCE)
const letterChangesOutput = letterChanges(SHORT_SENTENCE)
const simpleAddingOutput = simpleAdding(NUM)
const letterCapitaliseOutput = letterCapitalise(LONG_SENTENCE)

console.log('\nLongest Word:')
console.log(`> '${LONG_SENTENCE}'`)
console.log(`= '${longestWordOutput}'`)

console.log('\nFirst Factorial:')
console.log(`> '${NUM}'`)
console.log(`= '${firstFactorialOutput}'`)

console.log('\nFirst Reverse:')
console.log(`> '${SHORT_SENTENCE}'`)
console.log(`= '${firstReverseOutput}'`)

console.log('\nLetter Changes:')
console.log(`> '${SHORT_SENTENCE}'`)
console.log(`= '${letterChangesOutput}'`)

console.log('\nSimple Adding:')
console.log(`> '${NUM}'`)
console.log(`= '${simpleAddingOutput}'`)

console.log('\nLetter Capitalise')
console.log(`> '${LONG_SENTENCE}'`)
console.log(`= '${letterCapitaliseOutput}'`)
