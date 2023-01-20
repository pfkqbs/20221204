import React from 'react';
import ReactDOM from 'react-dom/client';//React 18暴露出来的
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';//性能测试的包

class App extends React.Component {
  render(){
      return null
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));//createRoot  在 React 18 暴露出来的
//StrictMode 严格模式  
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
