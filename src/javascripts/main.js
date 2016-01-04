import React from 'react';
import ReactDOM from 'react-dom';
//------------------Components---------------------
import Dialog from './components/dialog/dialog.jsx';
import {LazyLoad} from './components/lazyload/lazyload.jsx';
import {Cell} from './components/cell/cell.jsx';
import {WButton} from './components/button/wbutton.jsx';
import {WBGrp} from './components/button/wbutton_grp.jsx';
import {Switch} from './components/switch/switch.jsx';
import {CheckBox} from './components/checkbox/checkbox.jsx';
import {LabelGrp} from './components/label/label_grp.jsx';
import {LabelInput} from './components/input/label_input.jsx';
import {ActionSheet} from './components/action_sheet/action_sheet.jsx';
import {Icon} from './components/icon/icon.jsx';
import {Article} from './components/article/article.jsx';
import {Progress} from './components/progress/progress.jsx';
import Mask from './components/mask/mask.js';
import Stepper from './components/stepper/stepper.jsx';
import RadioList from './components/radio_list/radio_list.jsx';
import GotoTop from './components/gototop/gototop.jsx';

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

//开关
ReactDOM.render(<Switch callback={{
	checkedFn: function(){console.log('checked...')},
	uncheckedFn: function(){console.log('unchecked...')}
}}/>, document.getElementById('switch'));


ReactDOM.render(<LabelGrp labels={[
		{
			type: 'success',
			txt: '成功'
		},{
			type: 'warning',
			txt: '警告'
		},{
			type: 'important',
			txt: '重要'
		},{
			type: 'disable',
			txt: '禁止'
		}, {
			type: 'primary',
			txt: '主要'
		}
	]}/>, document.getElementById('label'));

//ReactDOM.render(<LabelInput labelTxt="姓名" placeholder="用户名" />, document.getElementById('label_input'));

ReactDOM.render(<CheckBox clickCallback={function(el){console.log($(el).attr('checked'))}}/>, document.getElementById('checkbox'));

//------------------------------------------
//ActionSheet Component
ReactDOM.render(<WButton 
	id="showActionSheet" 
	type="weui_btn_primary" 
	txt="显示ActionSheet"
	click={function(){ActionSheet.showAS();}}/>, document.querySelector('#show_actionsheet'));

var items = ['React', 'Angular', 'Ember', 'Backbone', 'Meteor'];
ReactDOM.render(<ActionSheet 
	items={items} 
	onSelected={function(item){
		alert(item);
	}}/>,
document.querySelector('#action_sheet'))

//------------------------------------------
//Icon Component
ReactDOM.render(<div><Icon big={true} type="success" /><Icon type="success" /></div>, document.querySelector('#icons'))

//------------------------------------------
//Article Component
var article = {
	parts: [
		{
			title: '第一部分',
			chapters: [
				{
					title: '第一章',
					sections: [
						{
							title: '1.1 节',
							content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute'
						},{
							title: '1.2 节',
							content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute'
						}
					]
				}
			]
		}
	]
}

ReactDOM.render(<Article pageTitle={"文章"} parts={article.parts} />, document.querySelector('#article'))

//------------------------------------------
//Progress Component
var percent = 0;
function generateProgressPercent() {
	var percentInterval = setInterval(function(){
		percent = percent + 10;
		Progress.setPercent(percent);
	}, 1000);
	if(percent == 100) {
		clearInterval(percentInterval);
	}	
}
ReactDOM.render(<Progress percent={percent} />, document.querySelector('#progress'))
generateProgressPercent();

//------------------------------------------
//Mask Component
ReactDOM.render(<WButton 
	id="showMask" 
	type="weui_btn_primary" 
	txt="显示Mask"
	click={function(){
		// after first time render later, no more creating?
		var	maskDiv = ReactDOM.render(<Mask />, document.querySelector('#maskDiv'));
		if(document.querySelector('#maskDiv').hasChildNodes) {	
			maskDiv.show();
		}
		setTimeout(function(){
			maskDiv.hide();
		}, 5000);
	}}/>, document.querySelector('#mask'));

//------------------------------------------
//Stepper Component
ReactDOM.render(<Stepper label="购买数量" maxValue={10} minValue={2}/>, document.querySelector('#stepper'))

//------------------------------------------
//RadioList Component
ReactDOM.render(<RadioList items={[
	{label: 'React', value: 'React', name: 'fw'},
	{label: 'Angular', value: 'Angular', name: 'fw'},
	{label: 'Ember', value: 'Ember', name: 'fw'},
	{label: 'Backbone', value: 'Backbone', name: 'fw'},
	{label: 'Meteor', value: 'Meteor', name: 'fw'}
]}/>, document.querySelector('#radios'));


//------------------------------------------
//Gototop Component

ReactDOM.render(<GotoTop />, document.querySelector('#goToTop'))


