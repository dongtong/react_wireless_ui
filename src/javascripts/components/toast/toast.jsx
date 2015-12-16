import React from 'react';

class Toast extends React.Component {
	render() {
		return (
			<div id="toast">
        <div className="weui_mask_transparent"></div>
        <div className="weui_toast">
          <i className="weui_icon_toast"></i>
          <p className="weui_toast_content">已完成</p>
        </div>
      </div>
		);
	}
}

export {Toast};