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

    // 도형이 움직이는 거리와 관련된 프로퍼티(1~10 사이의 무작위값)
    this.dx = Math.floor(Math.random() * 10) + 1;
    this.dy = Math.floor(Math.random() * 10) + 1;

    // 사각형을 그리는 draw메서드
    this.draw = function(){
      context.beginPath();
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.width, this.height);
    }
    this.animation = function(){
      this.x += this.dx;
      this.y += this.dy;

      // 원점 x 좌표에 사각형의 가로 길이를 더한값이 오른쪽 벽에 닿을때
      // 혹은 원점 x 좌표가 0보다 작을 경우
      if (this.x + this.width > canvas.width || this.x < 0) {
        this.dx = -this.dx;
      } 
      if (this.y + this.height > canvas.height || this.y < 0) {
        this.dy = -this.dy;
      }

      this.draw();
    }
}

function move(){
  // clearRect() 메서드를 이용해서 캔버스 크기만큼 지웁니다.
  context.clearRect(0, 0, canvas.width, canvas.height);
  Rect1.animation();
  Rect2.animation();
  // move 함수 반복 실행
  requestAnimationFrame(move);
}

const Rect1 = new Rect(20, 20, 100, 100, "violet");
const Rect2 = new Rect(40, 40, 60, 60, "aqua");
Rect1.draw();
Rect2.draw();
move();