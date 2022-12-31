const userNumber = document.querySelector("#user-number");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let n = userNumber.value;
  try{
    if((n === "")||(isNaN(n))){
        throw "숫자를 입력 해 주세요";
    }
    n = parseInt(n);
    if(n <= 10){ // 10 이하일 경우 n값 출력
        document.querySelector("#result").innerText = n;
    }
    if(n > 10){
        throw "10보다 작은 숫자를 입력 해 주세요";
    }
  }
  catch(err){ // 오류가 날 경우
    alert(err);
  }
  finally{
    userNumber.value = " ";
  }
});