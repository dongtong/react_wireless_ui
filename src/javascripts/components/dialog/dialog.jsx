'use strict';

import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Alert from './alert.jsx';
import Confirm from './confirm.jsx';

class Dialog extends Component {

  renderDialog () {
    if (this.props.type === 'alert') {
      return <Alert {...this.props} ref='alert'>{this.props.children}</Alert>;
    } else {
      return <Confirm {...this.props} ref='confirm'>{this.props.children}</Confirm>;
    }
  }
  
  showAlert () {
    this.refs.alert.show();
  }
  
  hideAlert () {
    this.refs.alert.hide();
  } 
  
  hideConfirm () {
    this.refs.confirm.hide();
  }
  
  showConfirm () {
    this.refs.confirm.show();
  }
  
  render () {
    return (
      <div className='dialog'>
         { this.renderDialog() }
      </div>
    );
  }
}

//Dialog.alert({ ... })
Dialog.alert = function (props) {
  let div = document.createElement('div');
  document.body.appendChild(div);
  div.className = 'dialog-alert';
  
  return ReactDOM.render(<div className='dialog'><Alert {...props}>{props.content}</Alert></div>, div);
}

//Dialog.confirm({ ... })
Dialog.confirm = function (props) {
  let div = document.createElement('div');
  document.body.appendChild(div);
  div.className = 'dialog-confirm';

  return ReactDOM.render(<div className='dialog'><Confirm {...props}>{props.content}</Confirm></div>, div);
}



export default Dialog;