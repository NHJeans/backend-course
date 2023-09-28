# 컴퓨터 만드는 설명서

# 1. 운영체제 및 프로그램 설치(하나하나 입력하는 방식)
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn

# 1. 운영체제 설치(node 14버전과 npm과 yarn이 모두 설치되어있는 리눅스)
FROM node:18.17.1
# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
COPY ./index.js /index.js

# 3. 도커안에서 index.js 실행시키기
CMD node index.js
# CMD는 저장할때 1,2만 저장되고 3은 저장되지 않는다. 3은 실행할때 실행된다.