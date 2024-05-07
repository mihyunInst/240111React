import './App.css';
import {useState, useEffect, useMemo} from "react";

function App() {

  const [message, setMessage]= useState([]);
  const [message2, setMessage2]= useState();

  useEffect(() => {
    fetch("/test1")
    .then(res => res.json())
    .then(data => {
        setMessage(data);
    });

  
},[]);


const handleClick = () => {
  
  fetch("/test2", {
    method: 'post',
    headers : {               
      'Content-Type': 'application/json'
    },
    body : JSON.stringify({
      name : "홍길동",
      age : 15
    })
  })
  .then(res => res.text())
  .then(data => setMessage2(data));

}
  
  return (
    <ul>
      {message.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)}
      <hr/>
      <button onClick={handleClick}>서버 통신</button>
      <br/>
      <h1>{message2}</h1>
    </ul>
  );
}

export default App;
