const rulesBtn = document.getElementById('rules-button');
const closeBtn = document.getElementById('close-button');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const brickRow = 9;
const brickColumn = 5;

let score = 0;

// create ball
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4
};

function drawBall(){
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = '#282a36';
  ctx.fill();
  ctx.closePath();
}


// paddle
const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  width: 80,
  height: 10,
  speed: 8,
  dx: 0
};

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
  ctx.fillStyle = '#282a36';
  ctx.fill();
  ctx.closePath();
}

const brickData = {
  width: 70,
  height: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true
};

const bricks = [];
  for(let i = 0; i < brickRow; i++){
    bricks[i] = [];
    for(let j = 0; j < brickColumn; j++){
      const x = i * (brickInfo.width + brickInfo.padding) + brickInfo.offsetX;
      const y = j * (brickInfo.height + brickInfo.padding) + brickInfo.offsetY;
      bricks[i][j] = { x, y, ...brickInfo };
    }
  }

function drawBricks() {
  bricks.forEach(column => {
    column.forEach(brick => {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visible ? '#282a36' : 'transparent';
      ctx.fill();
      ctx.closePath();
    });
  });
}



function drawScore() {
  ctx.font = '25px Montserrat';
  ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

function draw(){
  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
}

draw();



rulesBtn.addEventListener('click', () => rules.classList.add('show'));
closeBtn.addEventListener('click', () => rules.classList.remove('show'));
