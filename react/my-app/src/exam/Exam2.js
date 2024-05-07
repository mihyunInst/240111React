// Component 예제 2
import React, { useState } from "react";

// 함수형 컴포넌트
function Exam2() {
    // 함수형 컴포넌트에서 상태를 사용하는 방법
    // const [name, setName] = React.useState("Mihyun!");
    const [name, setName] = useState("Mihyun!"); // 초기값으로 "Mihyun!" 을 설정.

    return ( // 함수형 컴포넌트는 render() 를 제외하고 바로 return 이 있어야 함.
      <div>
        <h1>Hello, {name}</h1> 
      </div>
    );
  }
  
export default Exam2; // Exam2 라는 컴포넌트를 내보내겠다