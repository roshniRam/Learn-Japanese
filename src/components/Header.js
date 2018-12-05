import React from 'react';

import Card from './Card';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<h1 className="header__tagline">Learn Japanese</h1>
				<div className="header__learn">
					<Card
						heading="Japan lovers"
						content="VBecome a japanese language hero. Lorem ipsum dolor sit amet, an putent fabellas signiferumque qui, magna tractatos contentiones cum ei,"
					/>
					<Card
						heading="Learn smart"
						content="Learn different japanese characters, local speaking style. Lorem ipsum dolor sit amet, an putent fabellas signiferumque qui"
					/>
					<Card
						heading="Learn anywhere, anytime"
						content="A learning adventure that will help you enhance your skills. Lorem ipsum dolor sit amet, an putent fabellas signiferumque qui"
					/>
					<button className="header__start-learning" >Start Learning</button>
				</div>
			</header>
		);
	}
}

export default Header;
