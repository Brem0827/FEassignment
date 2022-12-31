const canvas = document.querySelector('canvas');
const context = canvas.getContext("2d"); // 2차원 Context

canvas.width = window.innerWidth;    // 캔버스의 너비
canvas.height = window.innerHeight;  // 캔버스의 높이

function Rect(x,y, width, height, color){
    this.x = x; // 중점 좌표 x
    this.y = y; // 중점 좌표 y
    this.width = width;   // 사각형의 가로
    this.height = height; // 사각형의 세로
    this.color = color;   // 사각형의 색깔

    // 사각형을 그리는 draw메서드
    this.draw = function(){
      context.beginPath();
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.width, this.height);
    }
}

const Rect1 = new Rect(20, 20, 100, 100, "violet");
const Rect2 = new Rect(40, 40, 60, 60, "aqua");
Rect1.draw();
Rect2.draw();