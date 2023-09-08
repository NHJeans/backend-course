// index.js
class Monster {
  power = 10;

  constructor(qqq) {
    this.power = qqq;
  }

  attack = () => {
    console.log("공격하자!!");
    console.log("내 공격력은 " + this.power + "야!!!");
  };

  run = () => {
    console.log("도망가자!!");
  };
}

class 공중몬스터 extends Monster {
  constructor(aaa) {
    super(aaa);
  }
  // 오버라이딩(부모의 run을 덮어쓰기)
  run = () => {
    console.log("날라서 도망가자!!");
  };
}

class 지상몬스터 extends Monster {
  constructor(bbb) {
    super(bbb);
  }
  // 오버라이딩(부모의 run을 덮어쓰기)
  run = () => {
    console.log("뛰어서 도망가자!!");
  };
}

const mymonster1 = new 공중몬스터(20);
mymonster1.attack();
mymonster1.run();

const mymonster2 = new 지상몬스터(50);
mymonster2.attack();
mymonster2.run();


//! - 공통 기능들을 Monster 클래스로 묶어주었습니다.
//! - 공통 기능들을 `extends`를 통해서 공중몬스터와 지상몬스터에 상속해 줌으로써 사용 가능하게 됩니다.
//! - `super` : 생성자 constructor는 공중몬스터와 지상몬스터에서 동일하게 사용할 수 있지만, 
//! 현재 power 변수는 상속해 준 Monster 내부에 존재하므로, Monster class 내부에 있는 constructor로 **인수를 넘겨 주기 위해 사용합니다.