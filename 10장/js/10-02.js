const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let array = [2, 4, 6, 8, 10];

// slice 내장함수를 이용하여 길이가 1보다 클시 첫번째 요소 제거
const tail = arr => ( arr.length > 1 ? arr.slice(1) : arr );

origin.innerText = array;
result.innerText = tail(array);