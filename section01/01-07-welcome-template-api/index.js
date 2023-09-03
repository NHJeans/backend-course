// API(함수) createUser(이름,나이,학교,이메일,가입일)
// 1. @ 여부(검증부분) 또는 비어있는지?
// 2. 가입환영템플릿 만들기
// 3. 이메일에 템플릿 전송하기

function checkEmail(email) {
  // 1. 이메일이 정상인지 확인(1.존재여부ㅡ 2-"@"포함여부)
  if (email === undefined || email.includes("@") === false) {
    console.log("이메일이 잘못되었습니다.");
    return false;
  } else {
    return true;
  }
}
// 2. 가입환영템플릿 만들기
function getWelcomeTemplate({ name, age, school, createdAT }) {
  // (name, age, school, createdAT) : 매개변수(parameter)
  const mytemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAT}</div>
            </body>
        </html>
    `;
  // console.log(mytemplate);
  return mytemplate;
}
// 3. 이메일에 가입환영 템플릿 전송하기
function sendTemplateToEmail(myemail, result) {
  console.log(
    myemail + "이메일로 가입환영템플릿 " + result + "를 전송합니다!!!"
  );
}

function createUser({ name, age, school, email, createdAT }) {
  const isValid = checkEmail(email);
  if (isValid === false) return;
  // 2. 가입환영템플릿 만들기
  const mytemplate = getWelcomeTemplate({ name, age, school, createdAT });

  sendTemplateToEmail(email, mytemplate);
  // 3. 이메일에 가입환영 템플릿 전송하기
  
}

const name = "현재";
const age = 9;
const school = "오태초등학교";
const email = "nhj1013@naver.com";
const createdAT = new Date().toISOString();
createUser({ name, age, school, email, createdAT });
