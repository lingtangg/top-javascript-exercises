const palindromes = function (word) {
    let reversedWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").toLowerCase();
    return (reversedWord.split("").reverse().join("") == reversedWord)
};

// Do not edit below this line
module.exports = palindromes;
