// JSX 사용하기

// 조건문
function Exam6_1(props) {
    const isLogin = props.isLogin; // 부모에게 전달받은 props 중 isLogIn 값을 변수에 담음

    if (isLogin) {
        return <h1>Welcome back!</h1>;
    } else {
        return <h1>Please sign up.</h1>;
    }
}

// 반복문
export function Exam6_2() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => <li>{number}</li>);
    // <li>태그가 5개 만들어지고, 내부에 1~5까지 값이 들어가있음
  
    return <ul>{listItems}</ul> // 위에서 만든 listItems 배열을 ul태그에서 jsx {} 표현식을 사용하여 렌더링함
}

// 이벤트 처리하기
export function Exam6_3(props) {
    const handleClick = () => {
      alert('버튼 클릭됨!');
    }
  
    return (
      <button onClick={handleClick}>
        {props.label}
      </button>
    );
}

export default Exam6_1;