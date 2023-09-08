// const express = require('express') // 옛날방식 => commonjs 방식
import express from "express"; // 요즘방식 => module 방식

const app = express();
const port = 3000;

// 상품 구매하기 API
app.post("/products/buy", (req, res) => {
  // get 방식의 api를 만들겠다. endpoint는 '/qqq'이다.
  // 1. 가진돈 검증하는 코드 (대략 10줄 정도)
  // ...
  // ...
  // ...
  // ...
  // ...
  // 2. 판매여부 검증하는 코드 (대략 10줄 정도)
  // ...
  // ...
  // ...
  // ...
  // 3. 상품 구매하는 코드
  // if (돈있음 && !판매완료) {
  //   res.send("상품 구매 성공!!!")
  // }
});

// 상품 환불하기 API
app.get("/products/refund", (req, res) => {
  // 1. 판매여부 검증하는 코드 (대략 10줄 정도)
  // ...
  // ...
  // ...
  // ...
  // 2. 상품 환불하는 코드
  if(판매완료) {
    res.send("상품 환불 성공!!!")
  }
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});