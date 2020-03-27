import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Login, Register} from "./components/login/index"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }

  changeState(){
    const { isLogginActive } = this.state;
    if(isLogginActive) {
      this.rightSlide.classList.remove("right");
      this.rightSlide.classList.add("left");
    } else {
      this.rightSlide.classList.remove("left");
      this.rightSlide.classList.add("right");
    }
    this.setState((prevState) => ({ isLogginActive: !prevState.isLogginActive }))
  }
  render(){
    const { isLogginActive} = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";

    return (
      <div className="App">
        <div className="login">
          <div className="container">
          {isLogginActive && <Login containerRef={(ref) => this.current = ref}/> }
          {!isLogginActive && <Register containerRef={(ref) => this.current = ref}/>}
          </div>
          <RightSlide current={current} containerRef={ref => this.rightSlide = ref} onClick={this.changeState.bind(this)}/>
        </div>
      </div>
    )
  }
}

const RightSlide = props => {
  return (
    <div className="right-slide" ref ={props.containerRef} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">
          {props.current}
        </div>
      </div>
    </div>

  )
}

export default App;
