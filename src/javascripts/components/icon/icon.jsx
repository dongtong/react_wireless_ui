'use strict';

import React from 'react';

class Icon extends React.Component {
	render() {
		return (
			<i className={this.props.big ? "weui_icon_msg weui_icon_" + this.props.type : "weui_icon_" + this.props.type}></i>
		);
	}
}

export {Icon}