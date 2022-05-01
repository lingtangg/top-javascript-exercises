const fibonacci = function(member) {
    let nMember = parseInt(member);
    if (member < 0) {
        return 'OOPS';
    }
    let sequence = [1, 1];
    for (let i = 2; i < nMember; i++) {
        let num = sequence[i-2] + sequence[i-1];
        sequence.push(sequence[i-2] + sequence[i-1]);
    }
    return sequence[nMember - 1];
};

// Do not edit below this line
module.exports = fibonacci;
