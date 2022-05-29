const people = [
    { firstName: 'Benjamin', lastName: 'Franklin', yearOfDeath: 1790 },
    { firstName: 'Thomas', lastName: 'Edison', yearOfDeath: 1931 },
    { firstName: 'Franklin', lastName: 'Roosevelt', yearOfDeath: 1945 },
    { firstName: 'Napolean', lastName: 'Bonaparte', yearOfDeath: 1821 },
    { firstName: 'Abraham', lastName: 'Lincoln', yearOfDeath: 1865 },
    { firstName: 'Mother', lastName: 'Theresa', yearOfDeath: 1962 },
    { firstName: 'Mahatma', lastName: 'Gandhi', yearOfDeath: 1948 },
    { firstName: 'Winston', lastName: 'Churchill', yearOfDeath: 1965 },
    { firstName: 'Charles', lastName: 'Darwin', yearOfDeath: 1882 },
    { firstName: 'Albert', lastName: 'Einstein', yearOfDeath: 1955 },
    { firstName: 'Pablo', lastName: 'Picasso', yearOfDeath: 1973 },
    { firstName: 'Ludwig', lastName: 'Beethoven', yearOfDeath: 1827 },
    { firstName: 'Walt', lastName: 'Disney', yearOfDeath: 1966 },
    { firstName: 'Henry', lastName: 'Ford', yearOfDeath: 1947 },
    { firstName: 'Steve', lastName: 'Jobs', yearOfDeath: 2012 }
  ];

//console.log the first name of each person in the array.
people.forEach(fName => {
    console.log(fName.firstName);
})
//Make a second array that contains only the first name of each person.
const array2 = [];
people.forEach(fname => {
    array2.push(fname.firstName);
})
console.log(array2);
//Make a third array that contains people that have died after 1950.
const array3 = [];
people.forEach(person => {
    if(person.yearOfDeath > 1950) {
        array3.push(person);
    }
})
console.log(array3);

//Find index of Charles Darwin in the array.
let darwinIndex = -1;
people.forEach((person, index) => {
    if(person.lastName === 'Darwin') {
        darwinIndex = index;
    }
});

console.log(darwinIndex);