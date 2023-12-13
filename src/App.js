import logo from './logo.svg';
import './App.css';

function App() {
  return (
      //JSX 能够像写html一样写页面
      <div className="box">
        <h1>Hello</h1>
        <button onClick={() => {alert("Hello")}}>按钮</button>
      </div>
  );
}

export default App;
