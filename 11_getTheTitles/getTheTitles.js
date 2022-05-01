const getTheTitles = function(array) {
    // let titles = [];
    // for (let i = 0; i < array.length; i++) {
    //     titles.push(array[i].title);
    // }
    // return titles;

    return array.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
