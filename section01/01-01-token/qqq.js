/**
terminal CLI command
- mkdir 폴더명 : 폴더 생성
- cd 폴더명 : 폴더 이동
- cd .. : 상위 폴더로 이동
- ls : 폴더 내부의 파일 목록 출력
- ls -al : 숨김 파일 포함 모든 파일 목록 출력
- ls -a : 숨김 파일 목록 출력
- touch 파일명 : 파일 생성
- cp 파일명 새파일명 : 파일 복사
- cp -r 폴더명 새폴더명 : 폴더 복사
- rm 파일명 : 파일 삭제 (remove의 약자)
- rm -rf 폴더명 : 폴더 삭제 (remove, -recursive, force)
- mv 파일명 새파일명 : 파일 이동
 */

console.log('안녕하세요!!')

// 인증번호 만들기
function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
  console.log(result)
}

getToken()

// padStart(6, '0') : 6자리가 안되면 앞에 0을 붙여서 6자리로 만들어줌