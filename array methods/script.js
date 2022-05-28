let people = [
    'Benjamin Franklin',
    'Thomas Edison',
    'Franklin Roosevelt',
    'Mahatma Gandhi',
    'Napoleon Bonaparte',
    'Abraham Lincoln'
  ]

//What is the index of Mahatma Gandhi in this list of people? Use indexOf.
const indexMG = people.indexOf('Mahatma Gandhi');
console.log(indexMG);
//Add Winston Churchill and Albert Einstein to the start of the list.

    //With unshift
        // people.unshift('Windston Churchill', 'Albert Einstein');
        // console.log(people);
    //With splice
        people.splice(0, 0, 'Winston Churchill', 'Albert Einstein');
        console.log(people);
//Add Charles Darwin and Walt Disney to the end of the list.

    //With push
        // people.push('Charles Darwin', 'Walt Disney');
        // console.log(people);
    //With splice
        people.splice(people.length, 0, 'Charles Darwin', 'Walt Disney');
        console.log(people);
//Add Pablo Picasso and Ludwig van Beethoven after Mahatma Gandhi. Use splice.
        people.splice(people.indexOf('Mahatma Gandhi') + 1, 0, 'Pablo Picasso', 'Ludwig van Beethoven');
        console.log(people);
//Remove Benjamin Franklin and Thomas Edison

    //With shift
    const arr1 = people.slice();
        arr1.shift();
        arr1.shift();
        console.log(arr1);
    //With splice

//Remove Napoleon Bonaparte and Abraham Lincoln

    //With pop
    people.pop();
    //With splice

//Remove Mahatma Gandhi with splice
    people.splice(people.indexOf('Mahatma Gandhi'), 1);
    console.log(people);