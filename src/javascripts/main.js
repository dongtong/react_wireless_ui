import React from 'react';
import ReactDOM from 'react-dom';
//------------------Components---------------------
import {Dialog} from './components/dialog/dialog.jsx';
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


// ReactDOM.render(<Cell url='http://localhost:3000/api/v2/todos/page/1' lazyload={true}/>, 
// document.getElementById('container'));

//ReactDOM.render(<WButton id="showConfirm" type="weui_btn_primary" txt="确认"/>, document.getElementById('buttonExample'))
//ReactDOM.render(<WButton id="showAlert" type="weui_btn_warn" txt="提示"/>, document.getElementById('buttonExample'))

ReactDOM.render(<WBGrp buttons={[{
	id: 'showConfirm',
	type: 'weui_btn_primary',
	txt: '确认'
}, {
	id: 'showAlert',
	type: 'weui_btn_warn',
	txt: '提示'
}]} />, document.getElementById('buttonExample'))

$('#showConfirm').click(function(){
	if($('#dialogContent').find('.weui_dialog_confirm').length) {
		$('#dialogContent').find('.weui_dialog_confirm').show();
	}else{
		ReactDOM.render(<Dialog 
			title="确认" 
			type="confirm" 
			content="确认dialog" 
			url="http://localhost:3000/v2/todos" />, 
			document.getElementById('dialogContent').hasChildNodes() ? document.getElementById('dialogContent').appendChild(document.createElement('div')) : document.getElementById('dialogContent'));	
	}
});

$('#showAlert').click(function(){
	if($('#dialogContent').find('.weui_dialog_alert').length) {
		$('#dialogContent').find('.weui_dialog_alert').show();
	}else{
		ReactDOM.render(React.createElement(Dialog, {
			content: "提示dialog",
			type: "alert",
			title: "提示"
		}), document.getElementById('dialogContent').hasChildNodes() ? document.getElementById('dialogContent').appendChild(document.createElement('div')) : document.getElementById('dialogContent'));	
	}
});

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