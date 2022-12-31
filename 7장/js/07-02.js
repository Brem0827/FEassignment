const btn = document.querySelector('#btn'); // 버튼 정보
const btnBox = document.querySelector('#btnbox'); // div 정보

btn.addEventListener('click', () => { // 버튼을 클릭할 경우
  const noti = document.createElement('div'); // 요소 노드 만들기
  noti.classList.add('noti'); // classList 프로퍼티 이용해서 추가
  noti.innerText = "알림 내용이 표시됩니다.";
  btnBox.appendChild(noti);

  setTimeout(() => { // 3초 후에 noti에 저장된 값을 제거한다.
    noti.remove();
  }, 3000);
});