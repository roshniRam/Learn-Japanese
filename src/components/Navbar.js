import React from 'react';
import Menu from './Menu';

class Navbar extends React.Component {
	constructor()
	{
		super();
		this.state = {
			showMenu: false,
		}
		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}
	showMenu(event) {
		event.preventDefault();
		this.setState({ showMenu: true}, () => {
			document.addEventListener('click', this.closeMenu);
		});
	}
	closeMenu() {
		this.setState({ showMenu: false}, () => {
			document.removeEventListener('click', this.closeMenu);
		});
	}
	render() {
		return (
			<nav className="navbar" >
				<div className="navbar__logo">
					<a href="#"><img src = 'http://nulldefinition.com/wp-content/uploads/2016/09/null_logo-300x300.png' height="50px" width='50px'></img> App logo</a>
				</div>
				<div class="links">
				<div className="navbar__link">
					<a onMouseEnter={this.showMenu} href="https://roshniram.github.io/Learn-Japanese/">Start Learning</a>
					{
						this.state.showMenu
						? (

					<div className="navbar__link">
						<a href="https://kstheking.github.io/Learn-Japanese/src/components/Start%20learning/colors/colors.html">Colors</a>
						<a href="https://github.com/roshniRam/Learn-Japanese/tree/master/src/components/Start%20learning/Basic%20Phrases">Basic phrases</a>
						<a href="https://github.com/roshniRam/Learn-Japanese/tree/master/src/components/Start%20learning/Animals">Animals</a>
						<a href="https://github.com/roshniRam/Learn-Japanese/tree/master/src/components/Start%20learning/Food">Food</a>
						<a href="https://github.com/roshniRam/Learn-Japanese/tree/master/src/components/Start%20learning/Time%20Tracking">Time tracking</a>
						<a href="https://github.com/roshniRam/Learn-Japanese/tree/master/src/components/Start%20learning/Basic%20sentences">Basic Sentences</a>
						<a href="https://github.com/roshniRam/Learn-Japanese/tree/master/src/components/Start%20learning/Clothing">Clothing</a>
						<a href="https://github.com/roshniRam/Learn-Japanese/tree/master/src/components/Start%20learning/numbers">Numbers</a>
						<a href="https://github.com/roshniRam/Learn-Japanese/tree/master/src/components/Start%20learning/Characters">Characters</a>
					</div>
				)
				: (
					null
				)
			}
				</div>
				<div className="navbar__link">
					<a href="#">Login</a>
				</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
