let num = parseInt(prompt("1보다 더 큰 숫자를 입력해주세요"));
let number = 0;

if((num !== null) && (num > 1)){
  for(let i = 1; i <= num; i++ ){
    if(i % 2 == 1){
        continue;
    }
    number += i;
    document.write(`${i} ------ ${number}<br>`);
  }
}