import { getToday } from "./utils.js";


export function checkEmail(email) {
  // 1. 이메일이 정상인지 확인(1.존재여부ㅡ 2-"@"포함여부)
  if (email === undefined || email.includes("@") === false) {
    console.log("이메일이 잘못되었습니다.");
    return false;
  } else {
    return true;
  }
}
// 2. 가입환영템플릿 만들기
export function getWelcomeTemplate({ name, age, school }) {
  // (name, age, school, createdAT) : 매개변수(parameter)
  const mytemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${getToday()}</div>
            </body>
        </html>
    `;
  // console.log(mytemplate);
  return mytemplate;
}
// 3. 이메일에 가입환영 템플릿 전송하기
export function sendTemplateToEmail(myemail, result) {
  console.log(
    myemail + "이메일로 가입환영템플릿 " + result + "를 전송합니다!!!"
  );
}