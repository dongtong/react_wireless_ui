'use strict';

import React from 'react';

class WBGrp extends React.Component {
	renderGrp() {
		var buttonsLen = this.props.buttons.length,
		    winWidth = $(window).width(),
		    buttonSpaceWidth = this.props.spaceWidth || 5,
		    usedWidth = winWidth - buttonSpaceWidth * (buttonsLen + 1),
		    buttonWidth = usedWidth / buttonsLen;

		return this.props.buttons.map((item) => {
			return (
				<button id={item.id} className={"weui_btn " + (item.disabled ? "weui_btn_disabled " : "") + (item.mini ? "weui_btn_mini " : "") + item.type } style={{display: 'inline-block', width: buttonWidth, marginLeft: buttonSpaceWidth + 'px'}}>
					{item.txt}
				</button>
			)
		});
	}
	render() {
		return (
			<div className="wbutton_group">
				{this.renderGrp()}
			</div>
		);
	}
}

export {WBGrp};