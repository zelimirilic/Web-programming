const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);


const section = document.querySelector('section');
const button = document.querySelector('button');

section.className = 'visible selected';

button.addEventListener('click', () => {
    /*if (section.className === 'visible selected') {
        section.className = 'invisible';
    } else {
        section.className = 'visible selected';
    } this code can be replaced with another below */
    section.classList.toggle('invisible');
});