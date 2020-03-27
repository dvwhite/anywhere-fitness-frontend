import React from "react";
import "./../../App.scss";
import { Login, Register } from "./index";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: props.isLoginActive
    };
  }

  changeState() {
    const { isLogginActive } = this.state;
    if (isLogginActive) {
      this.rightSlide.classList.remove("right");
      this.rightSlide.classList.add("left");
      this.props.history.push("/register");
    } else {
      this.rightSlide.classList.remove("left");
      this.rightSlide.classList.add("right");
      this.props.history.push("/login");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }
  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";

    return (
      <div className="login">
        <div className="container">
          {isLogginActive && (
            <Login containerRef={ref => (this.current = ref)} />
          )}
          {!isLogginActive && (
            <Register containerRef={ref => (this.current = ref)} />
          )}
        </div>
        <RightSlide
          current={current}
          containerRef={ref => (this.rightSlide = ref)}
          isLogin={this.state.isLogginActive}
          onClick={this.changeState.bind(this)}
        />
      </div>
    );
  }
}

const RightSlide = props => {
  return (
    <div
      className={`right-slide${props.isLogin ? " right" : " left"}`}
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default LoginContainer;
