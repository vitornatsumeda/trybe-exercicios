const whereAreYou = document.getElementById ('where-are-you');
whereAreYou.parentNode.style.color = "green";

whereAreYou.firstElementChild.innerText = 'Primeiro filho do filho';

const parent = whereAreYou.parentElement;

const firstChild = parent.firstElementChild; 

const primeiroFilho2 = whereAreYou.previousElementSibling;

const textElement = whereAreYou.nextSibling;

const thirdChild = whereAreYou.nextElementSibling;

const thirdChild2 = parent.lastElementChild.previousElementSibling;