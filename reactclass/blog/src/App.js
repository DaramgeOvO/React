/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState(0);

  let posts = "강남 고기 맛집";

  // function 제목바꾸기() {
  //   let newArray = [...글제목];
  //   newArray[0] = "여자코트 추천";
  //   글제목변경(newArray);
  // }
  /* 
  <Array, Object state 데이터 수정방법>
  - 변경함수 써야함
  - 변경함수(대체할 데이터)
  state는 직접 건들지말고 deep copy 해서 그걸 건들여라
  */
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            💛
          </span>
          {따봉}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr />
      </div>
      <Modal></Modal>
    </div>
  );
}
/* 
Component 만드는법
1. 함수 만들고 이름짓기 
2. 축약을 원하는 HTML 넣고
3. 원하는 곳에서 <함수명 />
Componet 유의사항
1. 이름은 대괄호
2. return() 안에 있는건 태그 하나로 묶어야됨
 - return() 내부를 묶을 때 의미없는 <div> 쓰기 싫으면 <></>
*/
function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
