// const express = require('express') // 옛날방식 => commonjs 방식
import express from "express"; // 요즘방식 => module 방식
import { CashService } from './cash.js'
import { ProductService } from "./product.js";
import { cashService } from './cash';
import { ProductService } from './product';

const app = express();
const port = 3000;

// 상품 구매하기 API
app.post("/products/buy", (req, res) => {
  // 1. 가진돈 검증하는 코드 (대략 10줄 정도)
  const cashService = new CashService(); //new를 통해 class cashService를 객체화하여 사용할 수 있다.
  const hasMoney = cashService.checkValue();
 
  // 2. 판매여부 검증하는 코드 (대략 10줄 정도)
  const productService = new ProductService();
  const isSoldout = productService.checkSoldout();


  // 3. 상품 구매하는 코드
  if (hasMoney && !isSoldout) {
    res.send("상품 구매 성공!!!")
  }
});

// 상품 환불하기 API
app.get("/products/refund", (req, res) => {
  // 1. 판매여부 검증하는 코드 (대략 10줄 정도)
  const productService = new ProductService();
  const isSoldout = productService.checkSoldout();
  
  // 2. 상품 환불하는 코드
  if (isSoldout) {
    res.send("상품 환불 성공!!!");
  }
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
