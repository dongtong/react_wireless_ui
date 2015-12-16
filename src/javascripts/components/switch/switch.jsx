'use strict';

import React from 'react';

class Switch extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			switchId: (+new Date()) + '_switch'
		}
		this._bind('_clickSwitch')
	}

	_bind(...methods) {
		methods.forEach((method) => {
			this[method] = this[method].bind(this);
		});
	}

	_clickSwitch() {
		if($('#'+this.state.switchId).attr('checked')){
			this.props.callback.checkedFn();
		}else{
			this.props.callback.uncheckedFn();
		}
	}

	render() {
		return (
			<input className="weui_switch" type="checkbox" id={this.state.switchId} onClick={this._clickSwitch} />
		);
	}
}

export {Switch};