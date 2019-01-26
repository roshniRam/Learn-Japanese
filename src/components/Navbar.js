import React from 'react';
import Menu from './Menu';
import fire, {provider } from '../config/fire';

class Navbar extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {
			showMenu: false,
		}
		this.email = props.email;
		this.logOut = this.logOut.bind(this);
		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.deleteAcc = this.deleteAcc.bind(this);
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
        	alert(err);
            console.log(err);
        }
	}
	async deleteAcc(e) {
        e.preventDefault();
        var r = window.confirm("Are you sure you want to delete your account. All your data will be deleted permanently.");
        if (r == true) {
            var user = fire.auth().currentUser;
            user.delete().then(function() {
            // User deleted.
            alert('Delete successful.')
            }, function(error) {
            alert(error);
            });
        }
        else {
            alert("You pressed Cancel!");
        }
    }
	render() {
		return (
			<nav className="navbar" >
			<div className="navbar__link">
				<a href="#" onClick={this.deleteAcc}>Delete Account</a>
			</div>
			  <div className="navbar__logo">
					<a href="#"><img src = 'http://nulldefinition.com/wp-content/uploads/2016/09/null_logo-300x300.png' height="50px" width='50px'></img> App logo</a>
				</div>
				<button className="navbar__link">Welcome {this.email}!</button>
				<div class="links">
				<div className="navbar__link">
					<a href="https://roshniram.github.io/Learn-Japanese/">Start Learning</a>

					<div className="drop">
						<a href="colors">Colors</a>
						<a href="basicPhrases">Basic phrases</a>
						<a href="animals">Animals</a>
						<a href="food">Food</a>
						<a href="timeTracking">Time tracking</a>
						<a href="basicSentences">Basic Sentences</a>
						<a href="clothing">Clothing</a>
						<a href="numbers">Numbers</a>
						<div className="characters">
						<a href="https://github.com/roshniRam/Learn-Japanese/tree/master/src/components/Start%20learning/Characters">Characters</a>
						<div className="charactersLinks">
						<a href="hiragana">Hiragana</a>
						<a href="kanji">Kanji</a>
						<a href="katakana">Katakana</a>
						</div>
						</div>
					</div>
				</div>
				<div className="navbar__link">
					<a href="#" onClick={this.logOut}>LogOut</a>
				</div>
				</div>


			</nav>
		);
	}
}

export default Navbar;
