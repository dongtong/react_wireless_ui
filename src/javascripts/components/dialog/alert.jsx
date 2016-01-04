'use strict';

import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import reactMixin from 'react-mixin';
import BindMixin from '../mixins/bind.js';

class Alert extends Component {
  
    static propTypes = {
        show: PropTypes.bool,
        title: PropTypes.string,
        type: PropTypes.string,
        callback: PropTypes.func
    };

    static defaultProps = {
        title: '提示',
        idx: +new Date(),
        label: '确认'
    };
    
    constructor(props) {
      super(props);
      this.state = {
        show: true
      }
      
      this._bind('_handleClick');
    }

    //私有'_'
    _renderAction() {
        
        const {theme, label, ...others} =  this.props;
        const className = classNames({
            weui_btn_dialog: true,
            default: theme === 'default',
            primary: theme === 'primary'
        });

        return <a key={this.props.idx} href="javascript:;" {...others} className={className} onClick={this._handleClick}>{label}</a>
    }
    
    _handleClick () {
        if(this.props.callback) {
            this.props.callback.apply(this, arguments);
            this.hide();
        } else {
            this.hide();
        }
    }
  
    //公共
    show () {
      this.setState({show: true});
    }
    
    hide() {
      this.setState({show: false});
      let rcDOM = ReactDOM.findDOMNode(this).parentNode
      let realDOM = rcDOM.parentNode;
      ReactDOM.unmountComponentAtNode(realDOM);
      
      //类方式调用，移除创建额外的DOM
      if(realDOM.className === 'dialog-alert') {
          realDOM.parentNode.removeChild(realDOM)
      }
    }

    render() {
        const {title, show, children} = this.props;
        
        return (
            <div className="weui_dialog_alert" style={{display: this.state.show ? 'block' : 'none'}}>
                <div className="weui_mask"></div>
                <div className="weui_dialog">
                    <div className="weui_dialog_hd">
                        <strong className="weui_dialog_title">{title}</strong>
                    </div>
                    <div className="weui_dialog_bd">
                        {children}
                    </div>
                    <div className="weui_dialog_ft">
                        {this._renderAction()}
                    </div>
                </div>
            </div>
        );
    }
}

//es6 mixin
reactMixin(Alert.prototype, BindMixin);

export default Alert;