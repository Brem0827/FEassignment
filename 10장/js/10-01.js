const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let arr = [2, 4, 6, 8, 10];
array(origin,arr);

let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}

arr.push(sum);
array(result,arr);

function array(area,arr){
  let str;
  str = "<table><tr>";
  for(let i = 0; i < arr.length; i++){
    str += "<td>" + arr[i] + "</td>";
  }
  str += "</tr></table>";
  area.innerHTML = str;
}