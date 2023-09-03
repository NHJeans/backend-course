// const express = require('express') // 옛날방식 => commonjs 방식
import express from 'express'         // 요즘방식 => module 방식

const app = express()
const port = 3000

app.get('/qqq', (req, res) => { // get 방식의 api를 만들겠다. endpoint는 '/qqq'이다.
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`) 
})