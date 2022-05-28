const add1 = document.querySelector('.add');
add1.classList.add('red');

const removeClass = document.querySelector('.remove');
removeClass.classList.remove('remove');

const contains1 = document.querySelector('.contains1');
console.log(contains1.classList.contains('blue'));

const contains2 = document.querySelector('.contains2');
console.log(contains2.classList.contains('blue'));

const toggle = document.querySelector('.toggle');
if(toggle.classList.contains('red')) {
    toggle.classList.remove('red');
} else {
    toggle.classList.add('red');
}