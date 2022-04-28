const reverseString = function(word) {
    phrase = Array.from(word);
    reversed = '';
    for (let i = phrase.length - 1; i >= 0; i--) {
        reversed += phrase[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
