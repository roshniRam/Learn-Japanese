import React from 'react';

import Navbar from './Navbar';
import Header from './Header';
import Menu from './Menu';

import '../sass/main.scss';

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Header />
			 {/* <Menu /> */} 
			</div>
		);
	}
}

export default App;
