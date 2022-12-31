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

const cheese = new Pet("치즈","yellow");
cheese.run();