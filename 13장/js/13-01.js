const quotesURL = "http://dummyjson.com/quotes"; // JSON 자료 위치

fetch(quotesURL) // json 파일을 읽어 옵니다. [fetch(위치, 옵션)]
  .then(response => response.json()) // json 파일을 객체로 변환
  .then(data =>{ // 객체를 출력 합니다.
    console.log(data);
  })
  .catch(error => console.log(error)); // 오류가 발생하면 오류를 보여줍니다.