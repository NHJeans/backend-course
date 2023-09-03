// // 구조분해할당 예제
// const profile = {
//   name: '철수',
//   age: 12,
//   school: '사자초등학교'
// }
// const {name, school} = profile
// console.log(name)
// console.log(school)

// // 1. 일반변수 전달하기
// function zzz(aaa){ //const aaa = '사과' <- 이렇게 생각하는게 좋다.
//   console.log(aaa)
// }
// zzz('사과')

// // 2. 객체 전달하기
// function zzz(aaa){ // const aaa = bascket
//   console.log(aaa) // 객체
//   console.log(aaa.apple) // 3
//   console.log(aaa.banana) // 10
// }

// const bascket = {
//   apple: 3,
//   banana: 10,
// }
// zzz(bascket)


// 3. 객체 전달하기 => 구조분해할당 방식으로 전달하기
function zzz({apple, banana}){ // const { apple, banana} = bascket
  console.log(apple) // 3
  console.log(banana) // 10
}

const bascket = {
  apple: 3,
  banana: 10,
}
zzz(bascket)