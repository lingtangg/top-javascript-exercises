const removeFromArray = function(array, ...moreArgs) {
    for (let i = 0; i < moreArgs.length; i++) {
        index = array.indexOf(moreArgs[i]);
        if (index == -1) {
            continue
        }
        array.splice(index, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
