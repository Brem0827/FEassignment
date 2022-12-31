const result = document.querySelector('#result');
const button = document.querySelector('button');

const Number = {
    Count : 6,
    MaxNumber : 45,
};

button.addEventListener("click", () => {
  let{Count,MaxNumber} = Number;
  let NumberTwo = new Set(); // 중복 방지를 위해 Set() 생성
  for(let i = 0; i < Count; i++){
    NumberTwo.add(Math.floor(Math.random() * MaxNumber) + 1);
  }
  result.innerText = `${[...NumberTwo]}`;
});