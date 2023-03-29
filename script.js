const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const radius = 140;
const height = window.innerHeight;
const width = window.innerWidth;

// var newImg = new Image()
// newImg.src ="imgs/test.png";
// newImg.onload = function(){
//   ctx.drawImage(newImg, 0,0);
// }



const cutoutCircle = (cx, cy, radius) => {
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
  ctx.clip();
  ctx.clearRect(0, 0, width, height);
  ctx.restore();
}

canvas.height = height;
canvas.width = width/1.5;
ctx.fillStyle = '#111111';
// how do i get an image to draw instead of the canvas? nah too much work 



ctx.fillRect(0, 0, width, height);
// 2x3
// cutoutCircle(180, 250, 130, 130);
// cutoutCircle(465, 250, 130, 130);
// cutoutCircle(750, 250, 130, 130);

// cutoutCircle(180,600, 130, 130);
// cutoutCircle(465, 600, 130, 130);
// cutoutCircle(750, 600, 130, 130);

// 2x2
cutoutCircle(250, 207, 159, 159);
cutoutCircle(720, 207, 159, 159);

cutoutCircle(250, 570, 159, 159);
cutoutCircle(720, 570, 159, 159);


//chris testing out the image backg
// canvas.style.background = "imgs/test.png"

document.addEventListener('mousemove', e => {
  cutoutCircle(e.x, e.y, radius);
});


//making the x-ray filter
let button = document.querySelector('button')

button.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode')
})