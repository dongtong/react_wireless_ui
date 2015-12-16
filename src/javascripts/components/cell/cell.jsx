import React from 'react';

class Cell extends React.Component {

		constructor(props) {
			super(props);
			this.state = {
				items: [],
				lazyload: {
					loadable: true,
	    		perPage: 10,
	    		totalPage: 0,
	    		pageNum: 1
				}
			};
		}

		componentDidMount() {
				$.ajax({
						type: 'GET',
						url: this.props.url,
						dataType: 'jsonp',
						cache: false,
						crossDomain: true,
						contentType: 'application/json;utf-8',
						success: function(res){
								this.setState({
									items: this.renderCellItem(res.data),
									lazyload: {
										totalPage: res.totalPage--,
										pageNum: this.state.lazyload.pageNum + 1
									}
								});
						}.bind(this)
				});
				if(this.props.lazyload){
						$('.loadmore').lazyload(function(el){
							console.log(totalPage)
							loading.hide();
							if(totalPage <= 0) {
								loading.hide();
								loaded.show();
								el.attr('data-loaded', 'done');
								return;
							}

							if(loadable) {
								loadable = false;
								loading.show();
								loaded.hide();
								$.ajax({
									type: 'GET',
									url: 'http://localhost:3000/api/v2/todos/page/' +  pageNum,
									dataType: 'jsonp',
									cache: false,
									crossDomain: true,
									jsonCallback: 'gotTodos',
									contentType: 'application/json;utf-8',
									success: function(res){
										$('#languages').append(
											res.data.map(function(item){
												return '<li id="' + item.id + '">'+item.content+'</li>';
											}).join('')
										);
										totalPage--;
										pageNum++;
									}
								})
							}

							loading.show();
						});
				}
		}

	  renderCellItem(data) {
	  	let cellItems;
	  	cellItems = data.map((item, index)=>{
	  		return <div className="weui_cell" key={index}>
          <div className="weui_cell_bd weui_cell_primary">
            <p>{item.content}</p>
          </div>
          <div className="weui_cell_ft">说明文字</div>
        </div>
	  	});
	  	if(this.props.lazyload) {
	  		cellItems.push(
	  				<div className="lazyload-bottom" key={'lazyload'}>
				    	<div className="loading">正在加载...</div>
				    	<div className="loaded" style={{display: 'none'}}>加载完成</div>
				    	<div className="loadmore" style={{height: '25px'}}></div>
			    	</div>
	  		)
	  	}
	  	return cellItems; 
	  }

		render() {
			return (
				<div className="weui_cells weui_cells_split">
					{this.state.items.length && this.state.items}
				</div>
			)
		}
}

export {Cell};