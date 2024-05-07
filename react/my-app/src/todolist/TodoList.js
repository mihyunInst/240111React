import React, { useState, useContext } from 'react';

const TodoContext = React.createContext(); // createContext() 를 이용하여 TodoContext 생성

function TodoList() {

    // 상태
    const [todos, setTodos] = useState([]); // todos의 상태
    const [inputValue, setInputValue] = useState(''); // 입력 필드의 상태

    // 함수

    // 할일 추가 함수
    const handleAddTodo = () => {
        // 현재의 todos 배열과 새로운 할 일을 이어붙여서 새로운 배열을 만든 후, 
        // 이를 setTodos 함수를 사용하여 다시 설정함.
        setTodos([...todos, { title: inputValue, isDone: false }]);
        setInputValue(''); // 입력 필드에 있는 값을 초기화
    };

    // 할일 삭제 함수
    const handleDeleteTodo = (index) => {
        const newTodos = todos.slice(); // 깊은 복사를 수행하여 새로운 배열 생성
        // 배열을 복사하는 이유는 원본 배열에 직접적인 변화를 가하지 않기 위함
        // React에서는 상태(state)를 직접적으로 수정하는 것을 권장하지 않기 때문에 이러한 방식을 사용해야함.
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    // 할일 토글 함수
    const handleToggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isDone = !newTodos[index].isDone;
        setTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            todos, handleAddTodo, handleDeleteTodo, handleToggleTodo
        }}>
            <div>
                <h1>Todo List</h1>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={handleAddTodo}>Add Todo</button>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>

                                {todo.title}</span>

                            <button onClick={() => handleToggleTodo(index)}>{todo.isDone ? '미완료' :

                                '완료'}</button>

                            <button onClick={() => handleDeleteTodo(index)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
        </TodoContext.Provider>
    );
}
export default TodoList;
