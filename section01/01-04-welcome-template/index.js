// // index.js

// const apple = 3;
// const banana = 2;

// console.log("철수는 사과를 " + apple + "개, " + "바나나를 " + banana + "개 가지고 있습니다.");
// console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`);  // 템플릿 리터럴


function getWelcomeTemplate({name, age, school, createdAT}){ // (name, age, school, createdAT) : 매개변수(parameter)
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
  `
  console.log(mytemplate)
}

const name = '현재'
const age = 9
const school = '오태초등학교'
const createdAT = '2000-08-01'

getWelcomeTemplate({name, age, school, createdAT}) // getWelcomeTemplate : 브라우저 버튼, 
                                                 // ('현재', 9, '오태초등학교', '2000-08-01') : 인자(argument)

const profile = {name, age, school, createdAT}