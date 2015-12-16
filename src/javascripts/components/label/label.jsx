'use strict';

import React from 'react';

let styles = {
	labelSuccess: {
		background: '#04BE02',
		padding: '.1rem .2rem',
		color: '#fff',
		fontSize: '.5rem'
	},
	labelWarning: {
		background: 'rgb(255,215,64)',
		padding: '.1rem .2rem',
		color: '#fff',
		fontSize: '.5rem'
	},
	labelDefault: {
		background: '#04BE02',
		padding: '.1rem .2rem',
		color: '#fff',
		fontSize: '.5rem'
	},
	labelImportant: {
		background: 'rgb(255,87,34)',
		padding: '.1rem .2rem',
		color: '#fff',
		fontSize: '.5rem'
	},
	labelPrimary: {
		background: 'rgb(0,188,212)',
		padding: '.1rem .2rem',
		color: '#fff',
		fontSize: '.5rem'
	},
	labelDisable: {
		background: 'rgb(189,189,189)',
		padding: '.1rem .2rem',
		color: '#fff',
		fontSize: '.5rem'
	}
}

class Label extends React.Component {
	render() {
		let labelType = this.props.type.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase()})
		return (
			<label style={styles['label' + labelType]}>
				{this.props.children}
			</label>
		);
	}
}

export {Label};