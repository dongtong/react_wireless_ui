'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class RadioItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.checked || false
		}
		this._bind('_checkHandler');
		this._bind('removeSelected')
	}

	_bind(...methods) {
		methods.forEach((method) => {
			this[method] = this[method].bind(this);
		});
	}

	_checkHandler() {
		this.setState({checked: true});
		this.props.onChange(this.props.value)
	}

	removeSelected() {
		this.setState({checked: false});
	}

	render() {
			let labelStyle = {
				float: 'left',
				maxWidth: '3.6rem',
				height: '1.2rem',
				margin: '.2rem .2rem',
				position: 'relative',
				display: 'inline-block'
			}

			let radioStyle = {
				float: 'left',
				Appearance: 'none',
				WebkitAppearance: 'none',
				backgroundSize: '.48rem'
			}

			let radioTxt = {
				width: '100%',
				border: '1px solid #DEDEDE',
				padding: '.1rem .2rem',
				fontSize: '.5rem'
			}	

			let checkStyle = {
				border: '1px solid #09BB07',
				backgroundColor: '#09BB07',
				color: '#FFFFFF'
			}

		return (
			<label style={labelStyle} onChange={this._checkHandler} >
				<input name={this.props.name} type='radio' style={radioStyle} value={this.props.value} checked={this.state.checked} />
				<span style={Object.assign({}, radioTxt, this.state.checked && checkStyle)}>
				{this.props.label}
				</span>
			</label>
		);
	}
}

class RadioList extends React.Component {

	constructor(props) {
		super(props);
		this.radioItems = [];
		this._bind('_handleChange');
	}

	_bind(...methods) {
		methods.forEach((method) => {
			this[method] = this[method].bind(this);
		});
	}

	_handleChange(e) {
		this.radioItems.forEach((item, index) => {
			if(e !== item.props.value) {
				this.refs[item.ref].removeSelected()
			}
		})
	}

	static get propTypes() {
		return {
			items: React.PropTypes.array.isRequired
		}
	}

	renderRadioItems() {
		return this.props.items.map((item, index) => {
			let radio = <RadioItem ref={item.value + '_' + index} key={'raido_' + index} label={item.label} value={item.value} name={item.name} onChange={this._handleChange}/>;
			this.radioItems.push(radio)
			return radio;
		});
	}

	render() {
		return (
			<div className="weui_cells weui_cells_split" style={{padding: '.5rem'}}>
				{this.renderRadioItems()}
			</div>
		);
	}

}

export default RadioList