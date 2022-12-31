const raffle = document.querySelector("#raffle");

raffle.addEventListener("click", (i) => {
  i.preventDefault();  

  const seed = document.querySelector("#seed");
  const total = document.querySelector("#total");
  const result = document.querySelector("#result");
  let winner = " ";

  for(let i = 0; i < total.value; i++){ // 선택한 인원수 까지 for문 돌린다.
    // 1과 입력한 값 사이 숫자중에서 랜덤 값 반환 ( 소수점 이하 생략 )
    let win = Math.floor((Math.random() * seed.value) + 1);
    winner += `${win}번, `; // 결과 값을 winner에 저장
  }

  result.innerText = `당첨자는 ${winner} 입니다.`;
  result.classList.add("show");
});