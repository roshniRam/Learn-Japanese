import React from 'react';

class CardColors extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="card__heading">{this.props.heading}</div>
				<div className="card__content">{this.props.content}</div>
			</div>
		);
	}
}

export default CardColors;
