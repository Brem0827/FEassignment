// 클래스
class Pet{
    constructor(name, color){ // 생성자 함수 정의
      this.name = name;
      this.color = color;
    }
    run = function(){
        alert(`${this.name} is running`);
      }
    }    
class Cat extends Pet{
  constructor(name, color, breed){
    super(name,color);
    this.breed = breed;
  } 
  viewInfo() {
    alert(`이름 : ${this.name}, 품종 : ${this.breed}, 색깔 : ${this.color} `);
  }
}
const bori = new Cat("보리","흰색","코숏");
bori.viewInfo();