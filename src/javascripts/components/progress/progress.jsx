'use strict';

import React from 'react';

class Progress extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			percent: 0
		}
	}

	static setPercent(percent) {
		if(percent <= 100) {
			$('.weui_progress_inner_bar').width(percent + '%')	
		}
	}

	render() {
		return (
			<div className="weui_progress">
				<div className="weui_progress_bar">
					<div className="weui_progress_inner_bar" style={{width: this.state.percent + '%'}}></div>
				</div>
			</div>
		);
	}

	// componentDidMount() {
	// 	this.Interval = setInterval(() => {
	// 		this.setState({
	// 			percent: this.props.percent
	// 		})
	// 	}, 1000);
	// }

	// componentWillUnmount() {
	// 	clearInterval(this.Interval);
	// 	this.Interval = null;
	// }
}

export {Progress}