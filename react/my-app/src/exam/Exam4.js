import { useState } from "react";
// State & Props 2
// Props Drilling : 상태 내리꽂기
// props를 통해 데이터를 전달할 때, 자식컴포넌트에서 필요하지 않은 props를 계속해서 전달하는 행위
// -> 코드의 가독성 및 유지보수성을 떨어뜨림..
// -> React Context 나 Redux 같은 상태관리 라이브러리를 사용함

// 자식 컴포넌트
function MyComponent(props) {
  // props를 통해 부모컴포넌트가 전달한 데이터를 전달받음.
  return (
    <>
     {/* 이 부분에 출력될 내용을 변경하고 싶어도
      자식 컴포넌트에서 props를 변경할 수 없음! 
      -> 해당 값을 전달한 부모 컴포넌트에서 변경해야함 */}
      <div>{props.name}</div>
      <div>{props.age}</div>
    </>
  );
}

// 부모 컴포넌트
function Exam4() {

  const [name, setName] = useState("홍길동"); // name이란 상태의 초기값을 "홍길동"으로 설정

  const handleClick = () => {
    setName("고길동");
  };

  //return <MyComponent name="홍길동" age={30} />;
  // 부모 컴포넌트에서 자식컴포넌트에 name="홍길동"을 전달함.

  return (
    <>
      <MyComponent name={name} />
      <button onClick={handleClick}>이름 변경</button>
    </>
  );
}

export default Exam4;