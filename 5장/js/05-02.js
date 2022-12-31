const k = document.querySelector("#number1");
const j = document.querySelector("#number2");
const button = document.querySelector("button");
let result = document.querySelector("#result");

button.onclick = function() {
    // innerText 프로퍼티 사용
    result.innerText = getGCD(k.value, j.value);
}

function getGCD(k, j) {
    let max = k > j ? k : j;
    let GCD = 0;
    for (let i = 1; i <= max; i++) {
      if (k % i === 0 && j % i === 0) {
        GCD = i;   // 최대공약수
      }
    }
    return GCD;
  }