const username = document.querySelector("#name"); // 이름 정보
const usermajor = document.querySelector("#major"); // 학과 정보
const btn = document.querySelector("form > button");

btn.addEventListener("click", (i) => { // 버튼을 클릭할 경우
    // 폼의 버튼을 클릭 했을 시 서버로 보내지 않게 합니다.
    i.preventDefault();
    let tbody = document.querySelector("#information > tbody");
    let tr = document.createElement("tr");

    // 요소 노드 추가
    let nametd = document.createElement("td");
    nametd.innerText = username.value;
    username.value = "";

    // 요소 노드 추가
    let majortd = document.createElement("td");
    majortd.innerText = usermajor.value;
    usermajor.value = "";

    // 자식 노드 연결 하기
    tr.appendChild(nametd);
    tr.appendChild(majortd);

    tbody.appendChild(tr);
});