// 백엔드 api를 꼭 거쳐야만 하는 이유
// 1. 인증
// 2. 권한
// 3. 로그
// 4. 성능
// 5. 통계
// 6. 기타 등등
//

// API 만들기
// 안좋은 예시
// function createTokenOfPhone(qqq) { // qqq : 매개변수(parameter)
//   // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
//   if (qqq.length >= 10) {
//     if (qqq.length <= 11) {

//       // 2. 핸드폰 토큰 6자리 만들기
//       const result = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
//       console.log(result)
//       // 3. 핸드폰번호에 토큰 전송하기
//       console.log(qqq + '번호로 인증번호 ' + result + '를 전송합니다.')

//     } else {
//       console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
//     }
//   } else {
//     console.log("휴대폰 번호 자릿수가 맞지 않습니다.");
//   }
// }

// 좋은 예시
function createTokenOfPhone(qqq) {  // qqq : 매개변수(parameter)
  // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  if (qqq.length < 10 || qqq.length > 11) {  // 먼저 에러인경우를 찾아서 실행
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!"); //=> early-exit : 먼저 에러를 찾아서 일찍 종료시키는 것.
    return; // 에러인 경우에는 함수를 종료시키기 위해 return을 사용.
  }

  // 2. 핸드폰 토큰 6자리 만들기
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  // 3. 핸드폰번호에 토큰 전송하기
  console.log(qqq + "번호로 인증번호 " + result + "를 전송합니다.");
}

createTokenOfPhone("01012345678"); // 01012345678 : 인자(argument)
