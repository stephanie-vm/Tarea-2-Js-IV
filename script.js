const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); 

ctx.font = '50px serif';
ctx.fillText('Stephanie', 150, 170);

function draw() {
    
    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);