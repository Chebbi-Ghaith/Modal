'use strict';
var btns = document.querySelectorAll('.show-modal');

var close = document.querySelector('.close-modal');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btns.length; i++) {
    
  btns[i].addEventListener('click', open);
  
}

close.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
