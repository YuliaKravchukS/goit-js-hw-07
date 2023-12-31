'use strict';

const listUl = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${listUl.length}`);

const firstListItem = listUl.firstElementChild;

listUl.forEach(element => {
    const listName = element.querySelector('h2').textContent
    
    const listItems = element.querySelectorAll('li')

    console.log(`Category: ${listName} \nElements: ${listItems.length}`);
});

