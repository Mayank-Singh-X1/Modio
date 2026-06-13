let modi = document.querySelector('.modi');
let gameContainer = document.querySelector('.game-container');
let ground = document.querySelector('.ground');

const groundTop = 535;

const player = {
  x: 50,
  y: 535,
  width: 70,
  height: 70,
  speed: 12,
  vy: 0,
  jump: -15,
  gravity: 0.4,
  isgrounded: true,
}
modi.style.width = player.width + 'px';
modi.style.height = player.height + 'px';

modi.style.left = player.x + 'px';
modi.style.top = player.y + 'px';


window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'd') {
    player.x += player.speed;
    modi.style.transform = 'scaleX(-1)';
  }
  if (e.key === 'ArrowLeft' || e.key === 'a') {
    player.x -= player.speed;
    modi.style.transform = 'scaleX(1)';
  }

  if ((e.key === 'ArrowUp' || e.key === 'w' || e.key === ' ') && player.isgrounded) {
    player.vy = player.jump;
    player.isgrounded = false;
  }

  if (player.x < 0) player.x = 0;
  if (player.x > 2920) player.x = 2920;

  modi.style.left = player.x + 'px';
  modi.style.top = player.y + 'px';
});


setInterval(() => {

  if (!player.isgrounded) {
    player.vy += player.gravity;
  }

  player.y += player.vy;

  if (player.y >= groundTop) {
    player.y = groundTop;
    player.vy = 0;
    player.isgrounded = true;
  }

  modi.style.left = player.x + 'px';
  modi.style.top = player.y + 'px';

  const halfWidth = window.innerWidth / 2;
  const scrollLeft = player.x - halfWidth ;

  if (scrollLeft < 0) {
    scrollLeft = '0px';
  } 

  gameContainer.style.transform = `translateX(-${scrollLeft}px)`;
}, 1000/60);


