// Start writing JavaScript here!
// const firstAccordion = document.querySelector('.accordion');
// const firstAccordionHeader = firstAccordion.querySelector('.accordion__header');
// console.log(firstAccordionHeader);
// firstAccordionHeader.addEventListener('click', event => {
//     firstAccordion.classList.toggle('is-open');
// });

const accordions = Array.from(document.querySelectorAll('.accordion'));
accordions.forEach(accordion => {
    const accordionHeader = accordion.querySelector('.accordion__header');

    accordionHeader.addEventListener('click', event => {
        accordion.classList.toggle('is-open');
    });
});