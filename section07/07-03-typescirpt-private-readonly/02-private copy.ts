// // public, private, protected, readonly

// // index.js
// class Monster {
//   // power = 10;                          //! => public, private, protected, readonly 중 1개라도 있으면 생략가능

//   constructor(private power: number) {
//     // this.power = power;                //! => public, private, protected, readonly 중 1개라도 있으면 생략가능
//   }

//   attack1 = () => {
//     console.log("공격하자!!");
//     console.log("내 공격력은 " + this.power + "야!!!"); // 안에서 접근 불가
//     this.power = 30; // 안에서 수정 불가
//   };
// }

// class 공중몬스터 extends Monster {
//   attack2 = () => {
//     console.log("날라서 도망가자!!");
//     this.power = 30; // 자식이 수정 불가
//   };
// }

// const mymonster1 = new 공중몬스터(20);
// mymonster1.attack1();
// mymonster1.attack2();
// console.log(mymonster1.power); // 밖에서 접근 불가
// mymonster1.power = 10; // 밖에서 수정 불가
