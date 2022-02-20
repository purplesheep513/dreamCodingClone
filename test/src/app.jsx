import React from 'react';
import './app.css';
//<React.Fragment> 는 다수의 태그를 리턴할 때 사용한다.(<></>도 가능) 예전엔 div를 대신 사용했지만 굳이 감싸줄 필요가 없다면 <React.Fragment>를 쓴다.
function App() {
  const name = 'bora'
  return (
    <>
      <h1>welcome</h1>
      {
        name && <h1>Hello {name} :)</h1>
      }
      {['❤️', '🍎'].map(item => (
        <h1>{item}</h1>
      ))}
    </>
  );
}

export default App;
