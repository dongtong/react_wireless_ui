'use strict';

import React from 'react';

class NavLink extends React.Component {
	render() {
		return
	}
}

class Navbar extends React.Component {
	renderItems() {
		return this.props.items.map((item, index) => {
      
		});
	}

	render() {
		let bottomFixed = {
			left: 0,
			bottom: 0,
			width: '100%',
			display: 'block'
		}

		return (
			<div style={bottomFixed}>
				<footer>

				</footer>
			</div>
		);
	}
}

export default Navbar

