const canvas = document.querySelector('canvas');
const context = canvas.getContext("2d"); // 2차원 Context

let cat = new Image();
cat.onload = function(){
  context.drawImage(cat, 0, 0, canvas.width, canvas.height);
}
cat.src="images/cat.jpg";

context.beginPath();
context.ellipse(260, 200, 180, 200, 0 , 0, 2 * Math.PI);
context.clip();
