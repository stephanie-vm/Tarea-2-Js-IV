const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const square = {
    xPosition: 0,
    yPosition: 0,
    xWidth: 0,
    yHeight: 0,
    R: 0,
    G: 0,
    B: 0,
    A: .8
};

function newRandom(min, max) {
  return Math.floor(Math.random() * (min - max) + max);
}

function draw() {
ctx.fillStyle = 'rgba(' + square.R + ',' + square.G + ',' + square.B + ',' + square.A +')';
ctx.fillRect(square.xPosition,square.yPosition,square.xWidth,square.yHeight);
}

function update() {
    square.xPosition = newRandom(0, canvas.width);
    square.yPosition = newRandom(0, canvas.height);
    square.xWidth = newRandom(-15, 15);
    square.yHeight = newRandom(-15, 15);
    square.R = newRandom(0,200);
    square.G = newRandom(0,200);
    square.B = newRandom(0,200);
}

function animationSquare() {
    update();
    draw();
    window.requestAnimationFrame(animationSquare);
}

window.requestAnimationFrame(animationSquare)
