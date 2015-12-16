'use strict';

import React from 'react';

class WButton extends React.Component {
	constructor(props){
		super(props);
		this._bind('_handleClick')
	}

	_bind(...methods) {
		methods.forEach((method) => {
			this[method] = this[method].bind(this);
		});
	}

	_handleClick () {
		if(this.props.click) {
			this.props.click();
		}else{
			console.error('WButton component need click props, and it is function object.')
		}
	}

	render() {
		return (
			<button 
				id={this.props.id} 
				className={"weui_btn " + (this.props.disabled ? "weui_btn_disabled " : "") + (this.props.mini ? "weui_btn_mini " : "") + this.props.type }
				onClick={this._handleClick}>
				{this.props.txt}
			</button>
		);
	}
}

export {WButton};
