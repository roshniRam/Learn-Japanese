import React, { Component } from 'react';
import fire from '../config/fire';
import Login from './Login.js';
import Home from './home.js';
import '../sass/main.scss';

class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.authListner();
  }
  authListner() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        // if a user exist
        this.setState({ user });
      } else {
        // if no user exist
        this.setState({ user: null });
      }
    });
  }
	render() {
    var user = fire.auth().currentUser;
		return (
			<div>
        {/* If there is an user go to home else go to Login screen */}
        {user ? (user.emailVerified ? (<Home email={this.state.user.email}/>) : (<Login/>)) : (<Login />)}
      </div>
    );
	}
}
export default App;
