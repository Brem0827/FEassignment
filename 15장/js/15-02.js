const canvas = document.querySelector('canvas');
const context = canvas.getContext("2d"); // 2차원 Context

context.beginPath(); // 경로가 시작됨을 알린다.
// 글꼴을 굵게, 두께는 300px, sans-serif로 지정
context.font = "bold 300px sans-serif";
// 텍스트를 (100,320) 좌표에 그립니다.
context.fillText("GOOD", 100, 320);

context.beginPath(); // 경로가 시작됨을 알린다.
// destination 그래픽과 겹쳐진 부문만 표시하고 나머지는 투명하게 처리
context.globalCompositeOperation = "source-in";
let image = new Image();
image.onload = function(){
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
}
image.src="images/text-bg.jpg";