import React, { Component } from 'react';
import fire, {provider } from '../config/fire';
import './login.css'

export default class Login extends Component {
    constructor(props) {
        super(props);
        //binding the function
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
        }
    }

    async login(e) {
        e.preventDefault();

        try {
            let user = await fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            console.log(`successfully Signed In ${user}`);
        } catch (err) {
            alert(err);
            console.log(err);
        }
    }

    async signup(e) {
        e.preventDefault();

        try {
            let user = await fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            console.log(`Successfully Signed Up ${user}`);
        } catch (err) {
            alert(err);
            console.log(err);
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

componentDidMount() {
    document.body.classList.add("background-white");
}

componentWillUnmount() {
    document.body.classList.remove("background-white");
}
    render() {
        return (
                <div className="container">
                    <h1 class="form-head">Learn Japanese</h1>
                    <div className="formIn">
                    <form>
                        <div className="form-group">
                               <input value={this.state.email} onChange={this.handleChange} name="email" type="email" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <input value={this.state.password} onChange={this.handleChange} name="password" type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="button green">
                            <a href="#" onClick={this.login} type="submit">Login</a>
                        </div>
                        <div className="button blue">
                            <a href="#" onClick={this.signup} type="submit">Sign Up</a>
                        </div>
                     </form>
                     </div>
                </div>
            );
        }
}