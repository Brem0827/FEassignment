const quotesURL = "http://dummyjson.com/quotes"; // JSON 자료 위치

fetch(quotesURL) // json 파일을 읽어 옵니다. [fetch(위치, 옵션)]
  .then(response => response.json()) // json 파일을 객체로 변환
  .then(data =>{ // 객체를 출력 합니다.
    // #result 영역에 명언 내용과 말한사람을 표시
    const result = document.querySelector("#result");
    // 29개의 명언중 한가지 랜덤으로 표시
    const random = Math.floor(Math.random() * 30);
    // 명언 내용 표시
    result.querySelector(".quote").innerHTML = data.quotes[random].quote;
    // 명언을 말한 사람 표시
    result.querySelector(".author").innerHTML = ` - ${data.quotes[random].author}`;
    console.log(data);
  })
  .catch(error => console.log(error)); // 오류가 발생하면 오류를 보여줍니다.

