let num = parseInt(prompt("숫자를 입력 해주세요"));

if(!isNaN(num)){
    if(num > 0){
      alert(`${num}은 양수입니다.`);
    }
    else if(num < 0){
      alert(`${num}은 음수입니다.`);
    }
    else{
      alert(`${num}은 0입니다.`);
    }
}