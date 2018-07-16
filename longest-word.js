const longestWord = string => {
    return string && string
            .match(/[a-z0-9]+/gi)
            .sort((a, b) => b.length - a.length)[0]
}

module.exports = longestWord
