const view = document.querySelector('#view');
const detail = document.querySelector("#detail");

view.onclick = function(){
    // classList프로퍼티와 toggle()함수 이용
    detail.classList.toggle("hidden");
}