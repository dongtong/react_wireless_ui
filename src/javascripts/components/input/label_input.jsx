'use strict';

import React from 'react';

let styles = {
	inputDiv: {
		flex: 1,
		WebkitFlex: 1,
		MozFlex: 1,
		wordWrap: 'break-word',
		wordBreak: 'break-all'
	}
}

class LabelInput extends React.Component {
	render() {
		return (
			<div>
				<label className="weui_label">{this.props.labelTxt}</label>
				<div style={styles.inputDiv} >
					<input type={this.props.type || 'text'} placeholder={this.props.placeholder || ''} />	
				</div>
			</div>
			
		);
	}
}

export {LabelInput};