const longestWord = string => {
    /*
    let longest
    string.split(' ').forEach((word, i) => {
        word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        if (i === 0) longest = word
        if (longest.length < word.length) longest = word
    })
    return longest
    */
    return string
        .match(/[a-z0-9]+/gi)
        .sort((a, b) => b.length - a.length)[0]
}

module.exports = longestWord
