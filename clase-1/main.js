// In primitive values only copy per value
var name = 'Carlos';
var nameBkp = name;
console.log(name);
console.log(nameBkp);

// In objects only copy per reference
var elem1 = ['Joseph'];
var elem2 = elem1;
elem1[0] = 'John';
console.log(elem2);

// Behavior into a function
var names = ['Jorge', 'Carlos'];

function greeting(arg){
  arg[0] = 'Hello ' + arg[0];
  return arg;
}

console.log(greeting(names));

// DOM - API Web thought document element
console.log(window.document.getElementById('title'));
console.log(window.document.getElementsByClassName('title'));
console.log(window.document.getElementsByTagName('h1'));

// CSS selectors
console.log(window.document.querySelector('#title'));
console.log(window.document.querySelectorAll('.subtitle'));
console.log(window.document.querySelector('h1'));

// Allows handle elements
var title = document.getElementById('title');
title.innerText += '(modified)'
title.style.color = 'blue'

// Add new elements
var p = document.createElement('p')
p.innerText = 'This is a new paragraph ...'
var body = document.getElementsByTagName('body')[0]
body.appendChild(p)

var paragraph = document.querySelector('p')
paragraph.style.backgroundColor = 'green'