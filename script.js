let modi = document.querySelector('.modi');
let gameContainer = document.querySelector('.game-container');
let ground = document.querySelector('.ground');

const modispeed=10;

document.addEventListener('keydown', (e) => {
  if(e.key == 'arrowleft') {
    modi.style.left = parseInt(modi.style.left) - modispeed + 'px';
  }
  if(e.key == 'arrowright'){
    modi.style.left += modispeed + 'px'; 
  }
});