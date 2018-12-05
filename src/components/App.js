import React, { Component } from 'react';
import Colors from './Start\ learning/colors/colors';
import Navbar from './Navbar';
import Header from './Header';
import Menu from './Menu';
import {BrowserRouter, Route} from 'react-router-dom';
import '../sass/main.scss';

class App extends React.Component {
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
			</div>
			</BrowserRouter>
		);
	}
}

export default App;
