'use strict';

import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import reactMixin from 'react-mixin';
import BindMixin from '../mixins/bind.js';

class Confirm extends Component {
  
    static propTypes = {
        buttons: PropTypes.array,
        show: PropTypes.bool,
        title: PropTypes.string,
        cancel: PropTypes.func,
        confirm: PropTypes.func.isRequired
    };

    static defaultProps = {
        buttons: [],
        show: true,
        title: '提示',
        idx1: +new Date(),
        idx2: +new Date() + 1,
        cancelLabel: '取消',
        confirmLabel: '确定'
    };

    state = {
        show: this.props.show
    };
    
    constructor(props) {
      super(props);
      
      this._bind('_handleCancel');
      this._bind('_handleConfirm');
    }

    _renderActions() {
        const {theme, label, ...others} = this.props;
        const className = classNames({
            weui_btn_dialog: true,
            default: theme === 'default',
            primary: theme === 'primary'
        });

        return (
          <div className="weui_dialog_ft">
             <a key={this.props.idx1} href="javascript:;" {...others} onClick={this._handleCancel} className={className}>{this.props.cancelLabel}</a>
             <a key={this.props.idx2} href="javascript:;" {...others} onClick={this._handleConfirm} className={className}>{this.props.confirmLabel}</a>
          </div>
        );
    }
    
    _handleCancel() {
        if (typeof(this.props.cancel) === 'function') {
          this.props.cancel.apply(null, arguments);
        } else {
          this.hide();
        }
    }
    
    _destroyNode() {
        let realDOM = ReactDOM.findDOMNode(this).parentNode.parentNode;
        if(realDOM.className === 'dialog-confirm') {
            realDOM.parentNode.removeChild(realDOM);
        }
    }
    
    _handleConfirm() {
        let self = this;
        if (typeof(this.props.confirm) === 'function') {
          this.props.confirm().then(function(res){
            self._destroyNode();
          })
        } else {
          this.hide();
        }
    }

    render() {
        const {title, children} = this.props;
        return (
            <div className="weui_dialog_confirm" style={{display: this.state.show ? 'block' : 'none'}}>
                <div className="weui_mask"></div>
                <div className="weui_dialog">
                    <div className="weui_dialog_hd">
                        <strong className="weui_dialog_title">{title}</strong>
                    </div>
                    <div className="weui_dialog_bd">
                        {children}
                    </div>
                    {this._renderActions()}
                </div>
            </div>
        );
    }

    show() {
        this.setState({show: true});
    }

    hide() {
        this.setState({show: false});
        this._destroyNode();
    }
    
}

//es6 mixin
reactMixin(Confirm.prototype, BindMixin);

export default Confirm;