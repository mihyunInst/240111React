import logo from './logo.svg';
import './App.css';
import Exam1 from './exam/Exam1';
import Exam2 from './exam/Exam2';
import Exam3 from './exam/Exam3';
import Exam4 from './exam/Exam4';
import Exam5 from './exam/Exam5';
import Exam6_1, { Exam6_2, Exam6_3 } from './exam/Exam6';
import Exam7, { UserContext } from './exam/Exam7';
import TodoList from './todolist/TodoList';

function App() {

  // 최상위 App 컴포넌트에서 user 라는 객체를 생성
  const user = {
    name : "홍길동",
    email : "gildong@kh.or.kr",
    age : 30
  }

  return (
    <div className="App">
      {/* <Exam1 /> */}
      {/* <Exam2 /> */}
      {/* <Exam3 /> */}
      {/* <Exam4 /> */}
      {/* <Exam5 /> */}
      {/* <Exam6_1 isLogin={true}/> */}
      {/* <Exam6_2 /> */}
      {/* <Exam6_3 label="클릭해봐"/> */}

      {/* Context API의 Provider : 부모컴포넌트에서 자식컴포넌트로 데이터 전달하는 역할
      -> 감싸진 컴포넌트(Exam7)부터 Exam7의 모든 자식 컴포넌트에서 user객체 데이터를 사용할 수 있음 */}
      {/* <UserContext.Provider value={user}> 
        <Exam7 />
      </UserContext.Provider> */}
        
      <TodoList />
    </div>
  );
}

export default App;
