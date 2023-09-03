function checkPhone(myphone){
  if (myphone.length < 10 || myphone.length > 11) {  // 먼저 에러인경우를 찾아서 실행
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!"); //=> early-exit : 먼저 에러를 찾아서 일찍 종료시키는 것.
    return false;
  } else {
    return true;
  }
}

function getToken(){
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
}

function sendTokenToSMS(myphone, result){
  console.log(myphone + "번호로 인증번호 " + result + "를 전송합니다.");
}



function createTokenOfPhone(myphone) {  // myphone : 매개변수(parameter)
  // 실무에서는 복잡한 내용에만 주석을 걸고 함수명 이 자체가 주석의 역할을 해야함.
  // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  const isValid = checkPhone(myphone);
  if(isValid === false) return; // 중괄호 안에 코드가 한줄이면 중괄호 생략 가능

  // 2. 핸드폰 토큰 6자리 만들기
  const mytoken = getToken();
  // 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(myphone, mytoken);
}

createTokenOfPhone("01012345678"); 