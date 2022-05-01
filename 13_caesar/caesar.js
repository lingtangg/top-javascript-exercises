const caesar = function(word, cipher) {
    let letters = Array.from(word);
    let ciphered = [];
    let unicode = 0;
    if (Math.abs(cipher) > 26) {
        cipher = cipher % 26;
    }
    for (let i = 0; i < letters.length; i++) {
        unicode = letters[i].charCodeAt(0);
        console.log(unicode)
        if ((unicode + cipher > 122 && unicode < 123) || (unicode + cipher > 90 && unicode < 91)) {
            unicode = unicode + cipher - 26;
        }
        else if ((unicode + cipher < 65 && unicode > 64) || (unicode + cipher < 97 && unicode > 96)) {
            unicode = unicode + cipher + 26;
        }
        else if (unicode < 65 || (unicode > 90 && unicode < 97) || unicode > 122) {
        }
        else {
            unicode = unicode + cipher;
        }
        ciphered.push(String.fromCharCode(unicode));
    }
    return ciphered.join('');
};

// Do not edit below this line
module.exports = caesar;
