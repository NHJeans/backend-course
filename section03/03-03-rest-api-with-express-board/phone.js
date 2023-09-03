export function checkPhone(myphone){
  if (myphone.length < 10 || myphone.length > 11) {  // 먼저 에러인경우를 찾아서 실행
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!"); //=> early-exit : 먼저 에러를 찾아서 일찍 종료시키는 것.
    return false;
  } else {
    return true;
  }
}

export function getToken(){
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
}

export function sendTokenToSMS(myphone, result){
  console.log(myphone + "번호로 인증번호 " + result + "를 전송합니다.");
}

