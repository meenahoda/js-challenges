const letterCapitalise = string => {
    return string && string
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
        .join(' ')
}

module.exports = letterCapitalise
