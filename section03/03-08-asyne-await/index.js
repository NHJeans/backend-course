import axios from "axios";


//1. 비동기 방식
function fetctAsync() {
  const result = axios.get("https://koreanjson.com/posts/1");
  console.log("비동기방식:", result); // Promise { <pending> }
}
fetctAsync()

// //2. 동기 방식
// async function fetctsync() {     => 함수 중복 선언 문제를 피하자!!! (화살표 함수로 변경)
//   const result = await axios.get("https://koreanjson.com/posts/1");
//   console.log("동기방식:", result); // 제대로된 결과 => { title: "..."}
//   console.log("동기방식:", result.data.tilte); // 제대로된 결과 => { title: "..."}
// }
// fetctsync()

const fetctsync = async () => {     
  const result = await axios.get("https://koreanjson.com/posts/1");
  console.log("동기방식:", result); // 제대로된 결과 => { title: "..."}
  console.log("동기방식:", result.data.tilte); // 제대로된 결과 => { title: "..."}
}
fetctsync()