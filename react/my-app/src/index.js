import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 렌더링할 최상위 컴포넌트
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); 
// 'root'라는 id를 가진 DOM 요소를 찾아 그것을 루트로 사용하도록 설정함.(public폴더의 index.html에 존재)

root.render( // 루트를 통해 React 요소를 렌더링함.
            // 즉, <App /> 컴포넌트가 렌더링되어 DOM에 삽입됨.
  <React.StrictMode> 
    <App />
  </React.StrictMode>

  // <React.StrictMode> :
  // React의 Strict Mode를 사용하여 앱을 감싸는 것. 
  // Strict Mode는 개발 중에 일부 문제를 검사하고 경고를 표시하여 개발자에게 앱의 잠재적인 문제를 알려줌.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
