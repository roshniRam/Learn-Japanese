import React from 'react';
import Menu from './Menu';

class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar">
				<div className="navbar__logo">
					<a href="#"><img src = 'http://nulldefinition.com/wp-content/uploads/2016/09/null_logo-300x300.png' height="50px" width='50px'></img> App logo</a>
				</div>				
				<div className="navbar__link">
					<a href="#">Start Learning</a>
				</div>
				<div className="navbar__link">
					<a href="#">Login</a>
				</div>
			</nav>
		);
	}
}

export default Navbar;
