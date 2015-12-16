'use strict';

import React from 'react';
import {Label} from './label.jsx';

class LabelGrp extends React.Component {
	generateLabels() {
		return this.props.labels.map((item, index) => {
			return (
				<Label type={item.type}>{item.txt}</Label>
			);
		});
	}

	render() {
		return (
			<div className="labelGrp">
				{this.generateLabels()}
			</div>
		);
	}
}

export {LabelGrp};