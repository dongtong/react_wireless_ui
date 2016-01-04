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

export default Dialog;