import React, { Component } from 'react';
import Colors from './Start\ learning/colors/colors';
import Animals from './Start\ learning/Animals/animals';
import BasicPhrases from './Start\ learning/Basic\ Phrases/basicPhrases';
import BasicSentences from './Start\ learning/Basic\ sentences/basicSentences';
import Food from './Start\ learning/Food/food';
import Numbers from './Start\ learning/numbers/numbers';
import TimeTracking from './Start\ learning/Time\ Tracking/timeTracking';
import Clothing from './Start\ learning/Characters/Clothing/clothing';
import Hiragana from './Start\ learning/Characters/Hiragana/hiragana';
import Kanji from './Start\ learning/Characters/Kanji/kanji';
import Katakana from './Start\ learning/Characters/Katakana/katakana';
import Navbar from './Navbar';
import Header from './Header';
import Menu from './Menu';
import fire from '../config/fire';
import Login from './Login.js';
import Home from './home.js';
import {BrowserRouter, Route} from 'react-router-dom';
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
		return (
			<div>
        {/* If there is an user go to home else go to Login screen */}
        {this.state.user ? (<Home email={this.state.user.email}/>) : (<Login />)}
      </div>
    );
	}
}
export default App;
