'use strict';

import React from 'react';

class SheetItem extends React.Component {
	constructor(props){
		super(props);
		this._bind('_selectedItem');
	}

	_bind(...methods) {
		methods.forEach((method) => {
			this[method] = this[method].bind(this);
		});
	}

	_selectedItem() {
		let content = $(this.refs.sheetItem).text();
		this.props.onSelectItem({value: content});
		return;
	}

	render() {
		return (
			<div className="weui_actionsheet_cell" 
			     onClick={this._selectedItem}
			     ref='sheetItem'>{this.props.content}</div>
		);
	}
}

class ActionSheet extends React.Component {
	constructor(props) {
		super(props);
		this._bind('_selectItemHandler');
		this._bind('_cancelActionSheet');
	}

	_bind(...methods) {
		methods.forEach((method) => {
			this[method] = this[method].bind(this);
		});
	}

	static showAS() {
		let mask = $('#mask'),
		    wActionSheet = $('#weui_actionsheet');

		wActionSheet.addClass('weui_actionsheet_toggle');
    mask.show().addClass('weui_fade_toggle');    
    wActionSheet.unbind('transitionend').unbind('webkitTransitionEnd');
	}

	_selectItemHandler(content) {
		if(this.props.onSelected) {
			this._cancelActionSheet();
			this.props.onSelected(content.value);
		}else{
			console.error("ActionSheet component need onSelected props, it is function object")
		}
	}

	renderSheetItems() {
		return this.props.items.map((item, index) => {
			return (
				<SheetItem content={item} key={index} onSelectItem={this._selectItemHandler} />
			);
		});
	}

	_cancelActionSheet() {
		let mask = $(this.refs.actionSheetMask),
		    wActionSheet = $(this.refs.wActionSheet);

		wActionSheet.removeClass('weui_actionsheet_toggle');
    mask.removeClass('weui_fade_toggle');
    wActionSheet.on('transitionend', function () {
      mask.hide();
    }).on('webkitTransitionEnd', function () {
      mask.hide();
    });
	}

	render() {
		return (
			<div id="actionSheet_wrap">
        <div onClick={this._cancelActionSheet} ref='actionSheetMask' className="weui_mask_transition" id={this.props.id || 'mask'} style={{display: 'none'}}></div>
          <div className="weui_actionsheet" id="weui_actionsheet" ref="wActionSheet">
            <div className="weui_actionsheet_menu">
 							{this.renderSheetItems()}
            </div>
          <div className="weui_actionsheet_action">
        		<div className="weui_actionsheet_cell" id="actionsheet_cancel" onClick={this._cancelActionSheet}>取消</div>
      		</div>
        </div>
      </div>
		);
	}
}

export {ActionSheet}