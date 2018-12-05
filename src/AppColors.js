import React from 'react';

import Navbar from './Navbar';
import ColorsHeader from './ColorsHeader';
import Menu from './Menu';
import './colors.scss';

class AppColors extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<ColorsHeader />
			 {/* <Menu /> */}
			</div>
		);
	}
}

export default AppColors;
