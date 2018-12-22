import React, { Component } from 'react';
import fire from '../config/fire';
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
import {BrowserRouter, Route} from 'react-router-dom';
import '../sass/main.scss';


export default class Home extends Component {
	constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        }

    async logOut(e) {
        e.preventDefault();
        try {
            await fire.auth().signOut()
            .then(() => {
              this.setState({
                user: null
              });
            });
            console.log("Signot Successful");
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        return (
            <BrowserRouter>
            <div>
            <Route exact={true} path='/' render={() => (
            <div>
                <Navbar />
                <Header />
             {/* <Menu /> */}
            </div>
            )}/>
            <Route exact={true} path='/colors' render={() => (
            <div>
                <Colors />
            </div>
            )}/>
            <Route exact={true} path='/animals' render={() => (
            <div>
                <Animals />
            </div>
            )}/>
            <Route exact={true} path='/basicPhrases' render={() => (
            <div>
                <BasicPhrases />
            </div>
            )}/>
            <Route exact={true} path='/basicSentences' render={() => (
            <div>
                <BasicSentences />
            </div>
            )}/>
            <Route exact={true} path='/food' render={() => (
            <div>
                <Food />
            </div>
            )}/>
            <Route exact={true} path='/numbers' render={() => (
            <div>
                <Numbers />
            </div>
            )}/>
            <Route exact={true} path='/timeTracking' render={() => (
            <div>
                <TimeTracking />
            </div>
            )}/>
            <Route exact={true} path='/clothing' render={() => (
            <div>
                <Clothing />
            </div>
            )}/>
            <Route exact={true} path='/hiragana' render={() => (
            <div>
                <Hiragana />
            </div>
            )}/>
            <Route exact={true} path='/kanji' render={() => (
            <div>
                <Kanji />
            </div>
            )}/>
            <Route exact={true} path='/katakana' render={() => (
            <div>
                <Katakana />
            </div>
            )}/>
            </div>
            </BrowserRouter>
        );
    }



    }