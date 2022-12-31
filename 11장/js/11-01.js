class Lecture {
    constructor(hasTutor, lectID, members){
        this.hasTutor = hasTutor;
        this.lectID = lectID;
        this.members = members;
    }
}
function getStudents(classRoom){
    let {hasTutor, lectID, members} = classRoom; // 객체 구조 분해
    let tutor, students; // 강사이름 과 학생이름 저장할 변수 선언
    // 구조 분해하여 members에서 값을 꺼내와서 student 변수에 할당
    hasTutor ? [tutor, ...students] = members : [...students] = members;
    return students;
}

let classone = new Lecture(false, 'L001', ["Ahn", "Han", "Park"]);
let classtwo = new Lecture(true, 'L002', ["Lee", "Choi", "Kim"]);

console.log(` 강의 : ${classone.lectID}, 수강생 : ${getStudents(classone)}`);
console.log(` 강의 : ${classtwo.lectID}, 수강생 : ${getStudents(classtwo)}`);