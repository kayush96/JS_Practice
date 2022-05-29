//Select all good guys with attributes
const goodGuys = document.querySelectorAll('[data-type="good-guy"]');
console.log(goodGuys);
//Give good guys a yay class
Array.from(goodGuys).forEach(ele => ele.classList.add('yay'));
//Select all villains with attributes
const villains = document.querySelectorAll('[data-type="villain"]');
console.log(villains);
//Give villains a nay class
Array.from(villains).forEach(elem => elem.classList.add('nay'));
//Select all characters through the character class
const characters = document.querySelectorAll('.character');
console.log(characters);
//Give all characters a star-wars class
Array.from(characters).forEach(elem => elem.classList.add('star-wars'));