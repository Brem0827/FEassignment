const canvas = document.querySelector('canvas');
const context = canvas.getContext("2d"); // 2차원 Context

context.beginPath(); // 경로가 시작됨을 알린다.
context.moveTo(80, 100); // 지정 위치로 시작점을 옮긴다.
context.lineTo(260, 100); // (260, 100)까지 경로를 만든다.
context.lineTo(100, 250); // (100, 250)까지 경로를 만든다.
context.lineTo(170, 20); // (170, 20)까지 경로를 만든다.
context.lineTo(220, 250); // (220, 250)까지 경로를 만든다.
context.lineTo(80, 100); // (80, 100)까지 경로를 만든다.
context.closePath();

// 테두리만 그리기
context.stroke();

context.fillStyle = 'rgb(204,169,221)';
context.fill();