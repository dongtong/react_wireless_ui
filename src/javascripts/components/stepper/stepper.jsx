'use strict';

import React from 'react';

class Stepper extends React.Component {
	constructor(props){
		super(props);
		this._bind('_increase');
		this._bind('_decrease');
		this._perStep = this.props.perStep || 1;
		this.state = {
			value: this.props.minValue || 0
		}
	}

	static get propTypes() {
 		return {
	    value: React.PropTypes.number,
	    maxValue: React.PropTypes.number,
	    minValue: React.PropTypes.number
	  }
 	}

	_bind(...methods) {
		methods.forEach((method) => {
			this[method] = this[method].bind(this);
		});
	}

	_increase() {
		let deltaValue = this.state.value + this._perStep;
		if(deltaValue <= this.props.maxValue) {
			this.setState({
				value: deltaValue
			})
		}else{
			console.error('max value is: ' + this.props.maxValue)
			return;
		}
	}

	_decrease() {
		let deltaValue = this.state.value - this._perStep;
		if(deltaValue >= this.props.minValue) {
			this.setState({
				value: deltaValue
			})
		}else{
			console.error('min value is: ' + this.props.minValue)	
		}
	}

	render() {
		let stepper_input = {
			display: 'inline-block',
			WebkitAppearance: 'none',
			backgroundColor: 'transparent',
			fontSize: 'inherit',
			color: 'inherit',
			height: '1.41176471em',
			lineHeight: '1.41176471em',
			float: 'left',
			width: '2rem',
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: '#DEDEDE'
		}

		let inlineEl = {
			display: 'inline-block',
			float: 'left',
			width: '2rem',
			fontSize: '1.5rem',
			textAlign: 'center',
			verticalAlign: 'middle'
		}

		return (
			<div className="weui_cells weui_cells_split">
				<div className="weui_cell">
					<div className="weui_cell_bd weui_cell_primary">
	          <p>{this.props.label}:</p>
	        </div>
	        <div className="weui_cell_ft">
	        	<a className="weui_btn weui_btn_mini weui_btn_default inline-el" href="javascript:;" style={inlineEl} onClick={this._increase}>+</a>
							<input type="text" value={this.state.value} style={stepper_input} />
						<a className="weui_btn weui_btn_mini weui_btn_default" href="javascript:;" style={inlineEl} onClick={this._decrease}>-</a>
	        </div>
					
				</div>
			</div>
		);
	}
}

export default Stepper