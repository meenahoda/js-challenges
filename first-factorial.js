const firstFactorial = number => {
    const factors = []
    while (number > 0) {
        factors.push(number)
        number -= 1
    }

    return factors.reduce((a, b) => a * b)
}

module.exports = firstFactorial
