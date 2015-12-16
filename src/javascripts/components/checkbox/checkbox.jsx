'use strict';
import React from 'react';

let styles = {
	chk: {
		appearance: 'none',
		MozAppearance: 'none',
		WebkitAppearance: 'none',
		WebkitTapHighlightColor: 'trasparent',
		verticalAlign: 'middle',
		width: '0.88rem',
		height: '0.88rem',
		borderRadius: '0.08rem',
		borderWidth: '1px',
		borderColor: '#DCDCDC',
		borderStyle: 'solid'
	},
	chked: {
		background: "url(data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAARBAMAAAA4SAFEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURQAAAP///////////////////////////////////////////7QJjekAAAAMdFJOUwD+jrvwDD1UbCga4AzsdzgAAAB8SURBVBjTY2BABpwKKFyGEnEULpOgKTKX1VCCgYE9AM6fLZLAwKAIV8LuaAUkVwvD+IpCIKWcjlA7Fgs2gOkUITDFtnEbRJwNIt4ovACqrxDkiCBBuNM4BBMYuAzdEe5QdGNIkZ6A5EyRGagONXQUQvFHsEgBCp9VE84EABN5EA+ig9/6AAAAAElFTkSuQmCC) center no-repeat #04BE02",
		backgroundSize: '80%',
		borderColor: '#04BE02'
	}
}

class CheckBox extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			checked: false,
			chkStyle: styles.chk
		}
		this._bind('_clickHandler');
	}

	_bind(...methods) {
		methods.forEach((method) => {
			this[method] = this[method].bind(this);
		});
	}

	_clickHandler() {
		this.setState({
			checked: !this.state.checked,
			chkStyle: this.state.checked ? styles.chk : Object.assign(JSON.parse(JSON.stringify(styles.chk)), styles.chked)
		});
		this.props.clickCallback('#'+this.props.id)
	}

	render() {
		return (<input type="checkbox" id={this.props.id} style={this.state.chkStyle} checked={this.state.checked} onClick={this._clickHandler}/>);
	}

	componentDidMount() {

	}
}

CheckBox.defaultProps = {
	id: (+new Date()) + '_chk'
}

export {CheckBox};