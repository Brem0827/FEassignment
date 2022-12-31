const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const btn = document.querySelector("#bttn");

const current = document.querySelector("#current");
const Days = document.querySelector("#days");
const Hours = document.querySelector("#hours");

const today = new Date(); // 오늘 날짜 정보를 받아온다.
// getFullYear로 Date 객체의 년도를 가져온다.
// getMonth() + 1로 객체의 월 정보를 가져온다. 1월은 0으로 표현됨을 주의해야 합니다. (0~11)
// getDate()로 Date 객체의 일자 정보를 가져온다. (0~31)
// getHours()로 Date 객체의 시간 정보를 가져온다.
// getMinutes()로 Date 객체의 분 정보를 가져온다.
current.innerText = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`;

btn.addEventListener("click", () => {
    // 입력한 생년월일을 저장한다.
    const birthDay = new Date(birthYear.value, birthMonth.value - 1,  birthDate.value);

    let elapsed = today.getTime() - birthDay.getTime();
    // 날짜 계산 (Math.floor로 소수점 생략)
    let elapsedDays = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    // 시간 계산 (Math.floor로 소수점 생략)
    let elapsedHours = Math.floor(elapsed / (1000 * 60 * 60));

    //경과일 출력
    Days.innerText = `날짜로는 ${elapsedDays}일이 흐르고, `;
    Hours.innerText = `시간으로는 ${elapsedHours}시간이 흘렀습니다. `;

    // 입력한 값 초기화
    birthYear.value = "";
	birthMonth.value = "";
	birthDate.value = "";
});
