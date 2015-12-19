'use strict';

import React from 'react';
import classNames from 'classnames';

class Mask extends React.Component {

	constructor(props) {
		super(props);
		this._bind('show')
		this._bind('hide')
	}

	_bind(...methods) {
		methods.forEach((method) => {
			this[method] = this[method].bind(this);
		});
	}

 	static get propTypes() {
 		return {
	    transparent: React.PropTypes.bool
	  }
 	}

  static get defaultProps() {
  	return {
	    transparent: false
	  }
  }

  show() {
  	this.refs.mask.className = 'weui_mask';
  }

  hide() {
  	this.refs.mask.className = '';
  }

  render() {
    const {transparent, ...others} = this.props;
    const className = classNames({
      'weui_mask': !transparent,
      'weui_mask_transparent': transparent
    });

    return (
      <div ref="mask" className={className} {...others}></div>
    );
  }
	
}

export default Mask