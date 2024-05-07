import { Component } from 'react';

// Component 예제 1

/* Component : 
    React 애플리케이션의 구성 요소로, 재사용 가능하도록 만들어져 있으며
    UI를 작은 조각으로 나누어 관리함.
	컴포넌트명은 보통 대문자로 작성함.

    컴포넌트는 아래와 같이 두가지로 나뉨.
    1. 클래스형 컴포넌트 : React.Component 클래스를 상속받아 구현
    2. 함수형 컴포넌트 : 함수형태로 구현

	* state와 props
	React 컴포넌트는 두 종류의 데이터를 다룸
	1. props(속성) : 부모 컴포넌트로부터 전달되는 읽기 전용 데이터
	2. state(상태) : 컴포넌트의 내부에서 관리되며 컴포넌트의 동작 및 UI 렌더링을 제어하는 데 사용(내부 상태를 관리하는 데 사용되는 객체)
*/

// 클래스형 컴포넌트
class Exam1 extends Component { // 컴포넌트의 선언부

	// 컴포넌트 정의

	// 생성자
	constructor(props) { // props : 부모에게 받은 속성(property)
		super(props);
		this.state = { count: 0 }; // state : 컴포넌트의 내부 상태를 관리하는 데 사용되는 객체
		// count 는 state 중 하나의 속성이며 초기값은 0으로 설정됨.
	}

	// 함수(메서드)
	handleClick = () => { // handleClick 이라는 이름의 함수를 정의함
		this.setState({ count: this.state.count + 1 });
		// 이 컴포넌트의 state 중 count를 현재 상태에 +1 한 값으로 다시 상태를 변경함.
	}
	
	// render 함수
	render() { // 클래스형 컴포넌트는 render 함수 안에 return 구문을 넣어줘야함. 
							// return에는 무엇을 렌더링할지 작성하면됨.
		return ( 
			<div>
				{/* JSX 주석 : ctrl + / */}
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleClick}>Increment</button>
			</div>
		);
	}
}
  
export default Exam1; // 컴포넌트 내보내기
                        // 해당 Exam.js 파일에서 기본으로 내보내는 컴포넌트의 이름은 Exam1 임.