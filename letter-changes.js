// Replace letters with next in alphabet & capitalize vowels

const PUNCTUATION = '.,\/#!$%\^&\*;:{}=\-_`~() '.split('')
const VOWELS = 'aeiou'.split('')

const letterChanges = string => {
    return string
        .toLowerCase()
        .split('')
        .map((char, i) => {
            if (PUNCTUATION.includes(char)) {
                return char
            } else if (!isNaN(char)) {
                return char
            } else {
                const newChar = String.fromCharCode(string.charCodeAt(i) + 1)
                return VOWELS.includes(newChar) ? newChar.toUpperCase() : newChar
            }
        })
        .join('')
}

module.exports = letterChanges
