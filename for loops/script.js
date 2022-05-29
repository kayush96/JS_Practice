const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6];
//Loop through the numbers and console.log each number within
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//Loop through the numbers. If the numbers are greater than 5, console.log them
console.log("-------------------------");
for(let j = 0; j < numbers.length; j++) {
    if(numbers[j] > 5) {
        console.log(numbers[j]);
    }
}
//Create a new array. Add all numbers that are greater than 10 into this new array.
// (Hint: You have to loop through the numbers array first)
const greaterThanTen = [];
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 10) {
        greaterThanTen.push(numbers[i]);
    }
}

console.log(greaterThanTen);
//Create a new array. Multiply all numbers by 5 and put them into the new array. 
//(Hint: You have to loop through the numbers array first)

const multipleOfFive = [];

for(let i = 0; i < numbers.length; i++) {
    multipleOfFive.push(numbers[i]*5);
}

console.log(multipleOfFive);