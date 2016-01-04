## 针对移动端React UI组件

### TODOS
- [x] Dialog
- [x] LazyLoad
- [x] Cell
- [x] WButton
- [x] WBGrp
- [x] Switch
- [x] CheckBox
- [x] LabelGrp
- [x] LabelInput
- [x] ActionSheet
- [x] Icon
- [x] Article
- [x] Progress
- [x] Mask
- [x] Stepper
- [x] RadioList
- [x] GoToTop
- [ ] Loading
- [ ] swiper
- [ ] Tab
- [ ] Timeline
- [ ] Stick
- [ ] Menu
- [ ] Navbar
- [ ] Datepicker

#### Dialog

`Dialog`组件分为`Alert`和`Confirm`两种类型。
`Alert`作用类似于网页原生的`window.alert`方法，用于提示信息，只有一个`确认`关闭按钮；
`Confirm`作用则类似于网页原生的`window.confirm`，用于让用户确认某些信息，有`关闭`和`取消`按钮。


属性 | 类型 | 默认值 | 可选值 | 备注
-----|------|--------|-------|------|
show | bool| true |    | 默认显示dialog
type | string|   | alert, confirm| dialog分为两种类型,必填
title| string| 提示  | | alert弹框标题
theme| string|   | default, primary |
callback| func|   | |  alert类型的回调函数，如果不提供，默认关闭对话框
confirm| func|   | |  confirm类型的回调函数，如果是'confirm'类型，必填


##### 示例

    import React from 'react';
    import ReactDOM from 'react-dom';
    import Dialog from './components/dialog/dialog.jsx';

    //显示Alert
    let alertDialog;              
    $('#showAlert').on('click', function () {
      if($('#alert').children().length){
        alertDialog.showAlert();
      }else{
        alertDialog = ReactDOM.render(
          <Dialog type='alert'
                  theme='primary'
                  >这里是提示内容</Dialog>, 
          document.querySelector('#alert'));
      }
    });

    //显示Confirm Dialog
    let confirmDialog; 
    $('#showConfirm').on('click', function () {
      if($('#confirm').children().length){
        confirmDialog.showConfirm();
      }else{
        confirmDialog = ReactDOM.render(
          <Dialog type='confirm'
                  confirm={function() {
                      alert('confirmed');
                      setTimeout(function(){
                          confirmDialog.hideConfirm();
                      }, 3000);
                  }}>这里是确认内容</Dialog>, 
          document.querySelector('#confirm'));
      }
    });

