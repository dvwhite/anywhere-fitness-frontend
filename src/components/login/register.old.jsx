import React from 'react';
import loginImg from "../../login.png";

export class Register extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
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
                            <label htmlFor="firstname">First Name: </label>
                            <input type="text" name="firstname" placeholder="Please enter your first name"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastname">Last Name: </label>
                            <input type="text" name="lastname" placeholder="Please enter your last name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input type="text" name="email" placeholder="Please enter your email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="role">Register As: </label>
                            <select>
                                <option value="client">Client</option>
                                <option value="instructor">Instructor</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn">Register</button>
                </div>
            </div>
        )
    }
}