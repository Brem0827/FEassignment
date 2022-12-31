const url = "https://reqres.in/api/products/10" // JSON 자료 위치
const result = document.querySelector("#result");

let xml = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xml.open('GET',url,true); // open(방식, 자료위치, 비동기 여부);
xml.send(); // 요청을 초기화 한 후 서버로 해당 요청을 전송

// readystatechange 이벤트
xml.onreadystatechange = function(){
  // readtState는 요청이 성공했을 경우, status는 HTTP 상태코드 이다.
  if(xml.readyState === 4 && xml.status === 200){
    // responseText는 요청에 대한 응답이 문자열 형태로 저장
    let product = JSON.parse(xml.responseText);
    console.log(product); // JSON자료를 가져와서 출력
    result.innerHTML=`
      <p>상품명 : ${product.data.name}</p>
      <p>생산년도 : ${product.data.year}</p>
    `;
  }
}
