const firstFactorial = number => {
    const factors = []
    while (number > 0) {
        factors.push(number)
        number -= 1
    }

    return factors.length > 0
        ? factors.reduce((a, b) => a * b)
        : undefined
}

module.exports = firstFactorial
