import React from 'react';
import loginImg from "../../login.png";

export class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username: </label>
                            <input type="text" name="username" placeholder="Please enter your username"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password: </label>
                            <input type="text" name="password" placeholder="Please enter your password"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="role">Sign In As: </label>
                            <select>
                                <option value="client">Client</option>
                                <option value="instructor">Instructor</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn">Log In</button>
                </div>
            </div>
        )
    }
}

