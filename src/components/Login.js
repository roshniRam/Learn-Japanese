import React, { Component } from 'react';
import fire, {provider } from '../config/fire';
import './login.css'

export default class Login extends Component {
    constructor(props) {
        super(props);
        //binding the function
        this.login = this.login.bind(this);
        this.authUser = this.authUser.bind(this);
        this.signup = this.signup.bind(this);
        this.loginGoogle = this.loginGoogle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
            Name: '',
        }
    }
    async login(e) {
        e.preventDefault();
        try {
            let user = await fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            if(user.emailVerified)
                console.log(`successfully Signed In ${user}`);
            else
            {
                alert("Email Not Verified");
            }
        } catch (err) {
            alert(err);
            console.log(err);
        }
    }
    async loginGoogle(e) {
        e.preventDefault();
        
        try {
            let user = await fire.auth().signInWithPopup(provider) 
                .then((result) => {
                  const user = result.user;
                  this.setState({
                    user
                  });
                  if(user.emailVerified)
                  console.log(`Successfully Signed In using Google${user}`);
                    else
                    {
                        alert("Email Not Verified");
                    }
                });
        } catch (err) {
            alert(err);
            console.log(err);
        }
    }
    async signup(e) {
        e.preventDefault();

        try {
            let user = await fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            alert("Please click on the link sent on your email to verify it to continue using this app and refresh this page after that.");
            var ref = fire.database(this.state.user.uid).ref("user");
            var obj = {
               Name: this.state.Name,
            };
            ref.push(obj);
            if(user.emailVerified)
                console.log("Email Verified");
            else
            {
                let res = this.authUser();
                console.log("Email Not Verified");
            }
        } catch (err) {
            alert(err);
            console.log(err);
        }
    }
    async authUser()
    {
        let user = fire.auth().currentUser;
        await user.sendEmailVerification().then(function(){
            console.log("Email sent");
        }).catch(function(err){
            console.log(err.message);
        });
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
                        <div className="button red">
                            <a href="#" onClick={this.loginGoogle} type="submit">Sign In with Google</a>
                        </div>
                     </form>
                     </div>
                </div>
            );
        }
}