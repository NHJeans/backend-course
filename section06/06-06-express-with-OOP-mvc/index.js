// const express = require('express') // 옛날방식 => commonjs 방식
import express from "express"; // 요즘방식 => module 방식
import { ProductController } from "./mvc/controllers/product.controller.js";

const app = express();
const port = 3000;

const ProductController = new ProductController();
app.post("/products/buy", ProductController.buyProduct); // 상품 구매하기 API
app.get("/products/refund", ProductController.refundProduct); // 상품 환불하기 API

// 게시판 API
// app.get("/board/...")

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
