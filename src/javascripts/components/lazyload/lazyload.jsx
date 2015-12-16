import React from 'react';

class LazyLoad extends React.Component {
		constructor(props){
				super(props);
				this.state = {
	    		loadable: true,
	    		perPage: 10,
	    		totalPage: 0,
	    		pageNum: 1
				};
		}

		componentDidMount() {

		}

		render() {
			return (
				<div className="lazyload-container">
					<div className="lazyload-content">
						{this.props.children}
					</div>
					<div className="lazyload-bottom">
			    	<div className="loading">正在加载...</div>
			    	<div className="loaded" style={{display: 'none'}}>加载完成</div>
			    	<div className="loadmore" style={{height: '25px'}}></div>
			    </div>
				</div>
			)
		}
}

export {LazyLoad};