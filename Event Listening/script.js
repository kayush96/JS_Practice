//Write an click event listener. Log something into the console so you know the listener works.
document.addEventListener('click', () => {
    console.log("You clicked");
});
//Check the existence of the listener with Firefox’s devtools.

//Check the existence of the listener with Chrome Devtools.

//Add a class to the element when it is clicked. Remove a class from the element when it
//is clicked again.

const button = document.querySelector("button");

button.addEventListener('click', () => {
    button.classList.toggle('clicked');
});