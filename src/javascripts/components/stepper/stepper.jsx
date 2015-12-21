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
	    minValue: React.PropTypes.number,
	    label: React.PropTypes.string.isRequired
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
			borderColor: '#DEDEDE',
			textAlign: 'center'
		}

		let inlineEl = {
			display: 'inline-block',
			float: 'left',
			textAlign: 'center',
			verticalAlign: 'middle',
			borderStyle: 'solid',
			borderWidth: '1px',
			borderColor: '#DEDEDE',
			backgroundColor: '#F7F7F7',
			width: '30px',
			height: '1.41176471em',
			lineHeight: '1.41176471em',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: '.7rem'
		}

		let plusIcon = {
			backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAQMAAAAB/jzhAAAAAG5wVGOkIJ/OAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURQAAAJCQkNk6GGEAAAACdFJOUwD8wphzDwAAABhJREFUCNdjYGBmAAJKif////+BEFQxDwBtaQhHTrkzcQAAAABJRU5ErkJggg==)',
			borderLeftWidth: 0
		}

		let minIcon = {
			backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAACAQMAAAB16v4BAAAAAG5wVGOkIJ/OAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURZCQkNsnnHQAAAALSURBVAjXY2CAAQAACgAB5/ja+gAAAABJRU5ErkJggg==)',
			borderRightWidth: 0
		}

		return (
			<div className="weui_cells weui_cells_split">
				<div className="weui_cell">
					<div className="weui_cell_bd weui_cell_primary">
	          <p>{this.props.label}:</p>
	        </div>
	     <a href="javascript:;" style={plusIcon} />	
	        <div className="weui_cell_ft">
	        	<a href="javascript:;" style={Object.assign({}, inlineEl, minIcon)} onClick={this._decrease}></a>
							<input type="text" value={this.state.value} style={stepper_input} />
						<a href="javascript:;" style={Object.assign({}, inlineEl, plusIcon)} onClick={this._increase}></a>
	        </div>
					
				</div>
			</div>
		);
	}
}

export default Stepper