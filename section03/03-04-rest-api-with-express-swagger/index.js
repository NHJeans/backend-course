// const express = require('express') // 옛날방식 => commonjs 방식
import express from 'express'         // 요즘방식 => module 방식
import { checkPhone, getToken, sendTokenToSMS } from './phone.js' // export 가져오기
//import express from 'express'                                   // export default 가져오기
//import dfjlkaj from 'express'                                   // export default 이름 바꿔서 가져오기
//import qqqqqqq, {checkPhone, getToken} from './phone.js'        // export default와 export를 함께 쓰기

// import * as ttt from './phone.js'                              // export 한방에 다 가져오기
// ttt.checkPhone                                                 // export 한방에 다 가져오기
// ttt.getToken                                                   // export 한방에 다 가져오기

import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import {options} from './swagger/config.js'



const app = express()
const port = 4000

app.use(express.json()) // 브라우저가 보내주는 데이터를 json으로 변환, // 옛날에는 bodyParser 사용
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.get('/boards', (req, res) => {
  // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
  const result = [
    {  
      "data": 
      [    
      {      
      "postId": "62d6d12cd88cadd496a9e54e",      
      "user": "Developer",      
      "title": "안녕하세요",      
      "createdAt": "2022-07-19T15:43:40.266Z"    
      },  
       {      
      "postId": "62d6cc66e28b7aff02e82954",      
      "user": "Developer",      
      "title": "안녕하세요",      
      "createdAt": "2022-07-19T15:23:18.433Z"   
       }  
      ]
      }
  ]
  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
  res.send(result)
})

app.post('/boards', (req, res) => { // get 방식의 api를 만들겠다. endpoint는 '/qqq'이다.
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req)
  console.log("================")
  console.log(req.body)
  
  // 2. DB에 접속 후, 데이터를 저장 => 데이터를 저장했다고 가정

  // 3. DB에 저장한 결과를 브라우저에 응답(response) 주기
  res.send({ "message": "게시글을 생성하였습니다." })
})

app.post("/tokens/phone", function (req, res) {
  const myphone = (req.body.qqq)
  // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  const isValid = checkPhone(myphone);
  if(isValid === false) return; 
  // 2. 핸드폰 토큰 6자리 만들기
  const mytoken = getToken();
  // 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(myphone, mytoken);

  res.send("인증완료!!!")
})


app.listen((port), () => {
  console.log(`Example app listening on port ${port}`) 
})

