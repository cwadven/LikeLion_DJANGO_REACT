import React from 'react';
import logo from './logo.svg';
import './App.css';

// function WorldClock(props){
//   return(
//       <div className={"WorldClock"}>
//         <h2>도시 : {props.city}</h2> 
//         <p>시간 : {props.time} 시</p>
//       </div>
//   );
// }

class WorldClock extends React.Component {
  constructor(props){ //constructor은 init과 같은 맨처음에 넣어주는 녀석! 1장에서 보면 알 것임!!
      super(props) //WorldClock이라는 상위 클래스에 상속을 받을 때! 물려 받고 싶을때 사용하는 녀석! 즉 React.Component에서 받는 것! 이러면 React.Component라는 녀석의 기능을 고스란히 쓸 수 있다!
      this.state = {
          hour: this.props.time,
          minute: 0,
          stop: false,
      } //상태를 저장할 수 있다!!

      
    console.log("  Child) 시작합니다.")

  }

  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState((state)=>(
          state.minute === 59 ? state.hour === 23 ? {hour:-1} : {hour: state.hour + 1,minute: 0,} : {minute: state.minute+1} // 삼항연산자!!
        )
      ) //1초마다 1분씩 늘어나게 만든다!! 일단 애매한게 (state)는 감싼다고 치자! 근데 왜 ({minute:state.minute+1})을 또 감쌈?
  }, 5000)
    console.log("  Child) 마운트되었습니다.")
  }

  componentDidUpdate(){
    console.log("  Child) 업데이트")
  }

  componentWillUnmount(){
    console.log(" Child) 언마운트!!")
    clearInterval(this.timer)
  }

  handlingClick = (event) => {
    console.log(event.target.value)
    this.setState({stop: event.target.value})
    clearInterval(this.timer)
  }

  render(){ //하나의 약속된 함수!! React.Component가 읽어서 보여줄 것이다!! 라는 함수!! python에 render 같은 느낌!!
      return(
    <div className={"WorldClock"}>
      <h2>도시 : {this.props.city}</h2> 
      <p>시간 : {this.state.hour}시 {this.state.minute}분</p>
      <button value={true} onClick={this.handlingClick}>멈춰!</button>
    </div>
  );
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.cityTimeDate = [ //변하는 녀석을 이렇게 만들어서 처리를 한다
      ['서울', 10],
      ['부산', 10],
      ['베이징', 9],
      ['시드니', 12],
      ['LA', 17]
    ]
  this.state = {
    content: '',
    show: true,
  }
  console.log("Parent) 시작합니다.")
}

componentDidUpdate(){
  console.log("Parent) 업데이트")
}

componentDidMount(){
  console.log("Parent) 마운트되었습니다.")
}

handlingChange = (event) => {
  this.setState({content: event.target.value})
}

handlingClick = (event) => {
  this.setState((prevState)=>({show: !prevState.show}))
}

render(){
  return (
  <div className="App">
  <h1 className={'myStyle'}>안녕하세요</h1> 
      <div className={'post'}>
      첫 게시글 입니다!
      <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
      </div>
      <button onClick={this.handlingClick}>손가락 튕기기</button>
      
      {this.state.show && this.cityTimeDate.map((citytime, index)=><WorldClock city={citytime[0]} time={citytime[1]} key={index}/>)}
  </div>
  );
}
}

//컴포넌트 수출!!
export default App;
