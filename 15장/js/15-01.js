const canvas = document.querySelector('canvas');
const context = canvas.getContext("2d"); // 2차원 Context

context.beginPath(); // 경로가 시작됨을 알린다.
// 글꼴을 굵게, 두께는 300px, sans-serif로 지정
context.font = "bold 300px sans-serif";
// 텍스트를 (100,320) 좌표에 그립니다.
context.fillText("GOOD", 100, 320);