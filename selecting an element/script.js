//Get the #star-wars-characters list with id and tag selectors.
const starWars = document.querySelector('#star-wars-characters');
console.log(starWars);
//From the #star-wars-characters list, get the following:
    //Luke Skywalker with class, tag and attribute selectors
    //Yoda with class and attribute selectors
    //Darth Vader with class and attribute selectors
const lukeSkyWalker = starWars.querySelector(".luke");
console.log(lukeSkyWalker);
const yoda = starWars.querySelector('.yoda');
console.log(yoda);
const badboy = starWars.querySelector('.badboy');
console.log(badboy);
//Notice how you can’t select Yoda and Darth Vader with tags when you use querySelector.