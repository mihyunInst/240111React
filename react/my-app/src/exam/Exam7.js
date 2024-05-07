import { createContext, useContext } from 'react';

export const UserContext = createContext(); 
// UserContext 객체를 createContext() 함수를 사용하여 생성하여 내보냄.(전역에서 필요한 곳에서 불러다 씀)

export function Test() {
    const user = useContext(UserContext); // useContext Hook을 사용하여 UserContext에서 데이터를 가져와 user에 저장함.

    return <h1>{user.name}</h1>
}

export default function Exam7() {
  const user = useContext(UserContext); // useContext Hook을 사용하여 UserContext에서 데이터를 가져와 user에 저장함.

  return (
    <>
        <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.age}</li>
        </ul>

        <Test />
    </>
  );
}