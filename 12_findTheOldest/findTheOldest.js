const findTheOldest = function(people) {
    let age1 = 0;
    let age2 = 0;
    let index = 0;
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < people.length; i++) {
        if (!people[i].hasOwnProperty("yearOfDeath")) {
        people[i].yearOfDeath = currentYear;
        }
        age2 = people[i].yearOfDeath - people[i].yearOfBirth;
        if (age2 > age1) {
        age1 = age2;
        index = i;
        }
    }
    return people[index];
    };

// Do not edit below this line
module.exports = findTheOldest;
