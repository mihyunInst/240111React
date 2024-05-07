import { useState } from "react";
// State & Props 1

// State lifting up : 상태 끌어올리기
// 리액트에서는 부모 컴포넌트가 자식 컴포넌트의 상태를 직접 변경할 수 없음!!!
// 자식에서 발생한 이벤트를 부모에서 처리하도록 하는 상태 끌어올리키 패턴을 이용함.

/*
해당 예제에서는 컴포넌트가 총 3개가 존재함.

Id 컴포넌트
Pw 컴포넌트
Exam3 컴포넌트 : 해당 파일에서 내보낼 기본 컴포넌트가 됨.
*/

// Id 컴포넌트 (자식)
const Id = ({ onChangeId }) => {
  //const [id, setId] = useState(""); // 상태 중 'id'를 생성하고 초기값 "" 으로 설정
  
  return (
    // JSX를 사용한 html 구문 작성부는 무조건 최상위 부모 하나로 감싸져 있어야함!!!
    <> 
      <div className="wrapper">
        <label htmlFor="id">ID: </label>
        <input id="id" onChange={onChangeId}/> 
        {/* onChange 이벤트핸들러에 onChangeId를 전달함 */}
      </div>
    </>
  );
};

// Pw 컴포넌트 (자식)
const Pw = ({ onChangePw }) => {
  //const [pw, setPw] = useState(""); // 상태 중 'pw'를 생성하고 초기값 "" 으로 설정

  return (
    <>
      <div className="wrapper">
        <label htmlFor="pw">PW: </label>
        <input type="password" id="pw" onChange={onChangePw}/>
         {/* onChange 이벤트핸들러에 onChangePw를 전달함 */}
      </div>
    </>
  );
};

// Exam3 컴포넌트 (부모)
const Exam3 = () => {
  
  // 자식의 상태를 부모에서 정의
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 자식의 상태를 변경할 함수 정의
  const onChangeId = (event) => {
    setId(event.target.value);
  };

  const onChangePw = (event) => {
    setPw(event.target.value);
  };
  

  return (
    <>
      {/* 컴포넌트 중 Id를 불러 렌더링함 (Id가 Exame3의 자식이 됨) */}
      <Id onChangeId={onChangeId}/>

      {/* 컴포넌트 중 Pw를 불러 렌더링함 (Pw가 Exame3의 자식이 됨) */}
      <Pw onChangePw={onChangePw}/>

      <div className="wrapper">
          {/* button의 disabled 속성 : 비활성화 속성(비활성true/활성false) 
            -> id와 pw 둘 다 작성되어야 활성화
          */}
          <button disabled={id.length === 0 || pw.length === 0}> 
          {/* 자식컴포넌트의 상태 id와 pw의 상태를 부모컴포넌트가 알 수 없음!!
            -> 어떻게 해야할까? 자식이 사용할 상태를 부모에게 끌어올려 사용함.
          */}
              Login
          </button>
      </div>
    </>
  );
};

export default Exam3;