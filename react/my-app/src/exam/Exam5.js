// props 응용
// 전개 연산자(...) : 객체 내부의 모든 값을 props로 전달하는 방법

// 자식
function MyComponent(props) {
    const { name, age } = props;
    const greeting = `안녕하세요 제 이름은 ${name} 이고, 나이는 ${age} 세 입니다.`;
    return <div>{greeting}</div>;
}

// 부모
function Exam5() {
    const userData = { name: '홍길동', age: 30 };
    return <MyComponent {...userData} />;
}

export default Exam5;