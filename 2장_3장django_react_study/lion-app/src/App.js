import React from 'react';
import logo from './logo.svg';
import './App.css';

function WorldClock(props){
  return(
      <div className={"WorldClock"}>
        <h2>도시 : {props.city}</h2> 
        <p>시간 : {props.time} 시</p>
      </div>
  );
}

function App() { 
  const cityTimeDate = [ //변하는 녀석을 이렇게 만들어서 처리를 한다
      ['서울', 10],
      ['부산', 10],
      ['베이징', 9],
      ['시드니', 12],
      ['LA', 17]
  ]
  
  const WorldClockList = cityTimeDate.map((citytime, index)=><WorldClock city={citytime[0]} time={citytime[1]} key={index}/>)
  
  return (
  <div className="App">
  <h1 className={'myStyle'}>안녕하세요</h1> 
      <div className={'post'}>
      첫 게시글 입니다!
      </div>
      {WorldClockList}
  </div>
  );
}


//컴포넌트 수출!!
export default App;
