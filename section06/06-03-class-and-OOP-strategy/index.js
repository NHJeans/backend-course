// index.js
class 공중부품 {
  run = () => {
    console.log("날아서 도망가자!!");
  }
}

class 지상부품 {
  run = () => {
    console.log("뛰어서 도망가자!!");
  }
}

class Monster {
  power = 10;
  부품;

  constructor(qqq) {
    this.부품 = qqq;
  }

  attack = () => {
    console.log("공격하자!!");
    console.log("내 공격력은 " + this.power + "야!!!");
  };

  run = () => {
    this.부품.run();
  };
}

// const aaa = new 공중부품(); //! new 공중부품()은 공중부품 클래스의 새로운 인스턴스를 생성합니다. 그리고 이 인스턴스를 aaa 변수에 할당합니다.
// aaa.run();

const mymonster1 = new Monster(new 공중부품());
mymonster1.attack();
mymonster1.run();

const mymonster2 = new Monster(new 지상부품());
mymonster2.attack();
mymonster2.run();

//! - 공통 기능들을 Monster 클래스로 묶어주었습니다.
//! - 공통 기능들을 `extends`를 통해서 공중몬스터와 지상몬스터에 상속해 줌으로써 사용 가능하게 됩니다.
//! - `super` : 생성자 constructor는 공중몬스터와 지상몬스터에서 동일하게 사용할 수 있지만,
//! 현재 power 변수는 상속해 준 Monster 내부에 존재하므로, Monster class 내부에 있는 constructor로 **인수를 넘겨 주기 위해 사용합니다.
