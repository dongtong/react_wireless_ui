import React from 'react';
import ReactDOM from 'react-dom';
import {LoadingToast} from '../toast/loading_toast.jsx';
import {Toast} from '../toast/toast.jsx';

class Dialog extends React.Component {
		constructor(props) {
			super(props);
		}

		componentWillMount() {
			this.dialogId = this.props.id || +new Date() + '_dialog'
		}

		componentWillReceiveProps(nextProps) {
			console.log(nextProps)
		}

		cancelHandler() {
			$('#' + this.dialogId).hide();
		}

		confirmHandler() {
			$('#' + this.dialogId).hide();
			if(this.props.url) {
				var mountNode = document.getElementById('toast')
				ReactDOM.render(<LoadingToast />, mountNode);

				$.ajax({
					type: 'POST',
					url: this.props.url,
					dataType: 'json',
					success: function(){
						  ReactDOM.unmountComponentAtNode(mountNode);
						  ReactDOM.render(<Toast />, mountNode);
						  setTimeout(function(){
						  	ReactDOM.unmountComponentAtNode(mountNode);
						  }, 1000);
					},
					error: function(){
						setTimeout(function(){
							ReactDOM.unmountComponentAtNode(mountNode);
						}, 3000)
					}
				});
			}
		}

		render() {
				return (
						<div className={this.props.type == 'confirm' ? 'weui_dialog_confirm' : 'weui_dialog_alert'} id={this.dialogId}>
						    <div className="weui_mask"></div>
						    <div className="weui_dialog">
						        <div className="weui_dialog_hd"><strong className="weui_dialog_title">{this.props.title || '提示'}</strong></div>
						        <div className="weui_dialog_bd">{this.props.content || ''}</div>
						        <div className="weui_dialog_ft">
						            {this.props.type == 'confirm' && <a href="javascript:;" className="weui_btn_dialog default" onClick={this.cancelHandler.bind(this)}>取消</a>}
						            <a href="javascript:;" className="weui_btn_dialog primary" onClick={this.confirmHandler.bind(this)}>确定</a>
						        </div>
						    </div>
						</div>
				);
		}
}

export {Dialog};