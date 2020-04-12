import React, { Component } from "react";
import fire from "./config/fire";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }

        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {

        }).catch(error => {
            console.log(error);
        })
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className='col-md-6'>
                <form>
                    <div className='form-group'>
                        <input value={this.state.email} onChange={this.handleChange} type='email' name='email' placeholder='Enter email'/>
                    </div>
                    <div className='form-group'>
                        <input value={this.state.password} onChange={this.handleChange} type='password' name='password' placeholder='Password'/>
                    </div>
                    <button type='submit' onClick={this.login} className='btn btn-primary'>Login</button>
                    <button type='submit' onClick={this.signup} className='btn'>Signup</button>
                </form>
            </div>
        )
    }
}

export default Login;
