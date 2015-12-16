'use strict';

import React from 'react';

class Input extends React.Component {
	render() {
		return (
			<input className="weui_input" type="{this.props.type || 'text'}" placeholder="{this.props.placeholder}" />
		);
	}
}
