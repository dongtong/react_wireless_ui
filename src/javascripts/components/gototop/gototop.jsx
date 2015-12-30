'use strict';

import React from 'react';

class GotoTop extends React.Component {
  
  constructor(props) {
    super(props);
    this.scrollElement  = document.documentElement;
    this.clientElement = document.documentElement;
    this.compatMode = document.compatMode;
    this.isChrome = window.navigator.userAgent.toLowerCase().indexOf('chrome') == -1;
    //不同模式和chrome处理
    if(this.compatMode === 'BackCompat' && isChrome) {
      if(document.documentElement.scrollTop == 0) {
        this.scrollElement = document.body;
      } 
    }else{
      this.scrollElement = document.body;
    }
    
    if(this.compatMode === 'BackCompat') {
      this.clientElement = document.body;
    }
    
    this._bind('_scrollTop');
  }
  
  _bind(...methods) {
		methods.forEach((method) => {
			this[method] = this[method].bind(this);
		});
	}
  
  get scrollTop() {
    return this.scrollElement.scrollTop;
  }
  
  set scrollTop(value) {
    this.scrollElement.scrollTop = value;
  }
  
  //获取当前网页的展示高度（第一屏高度）
  _getClientHeight() {
    return this.clientElement.clientHeight;  
  }
  
  //ref to zepto scrollTop function
  _scrollTop(){
    let self = this;
    
    if(this.props.speed == 'fast') {
      let hasScrollTop = 'scrollTop' in window;
      //if (value === undefined) return hasScrollTop ? node.scrollTop : node.pageYOffset
      hasScrollTop ? () => {window.scrollTop = 0}() : () => { window.scrollTo(window.scrollX, 0) }();
    }else{
      function moveScroll(){  
        self.scrollTop = self.scrollTop / 1.2;  
        if(self.scrollTop === 0){  
          clearInterval(moveInterval);  
          moveInterval = null;
        }  
      }  
      let moveInterval = setInterval(moveScroll, 10); 
    }     
  }
  
	render() {
    const style = {
      display: 'none',
      position: 'fixed',
      bottom: '1rem',
      right: '.5rem',
      borderRadius: '1.6rem',
      width: '1.6rem',
      height: '1.6rem',
      color: '#FFFFFF',
      background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC90lEQVRYR+2VS2gTURSG/3OnDysIgogLF7rQjRsVcSPFF9jSKigWuqnUF2qTmEkQVGwmktqZim7amTQzXSgoiiARxSqK+KA+cONGXIiLIt2IKBQsvgjO3COTYm1rk0yqGyF3Ncy9578f//3PvYS/GBFVs5jQDuZm2zKez0aKZlPk14TVzj5AxPxvT8pPQsEGx+x5Va7erADCavIMwMembCbxAdVKvd3bNVwORNkAYVU7BSAJwhiY3wK02pN4qQisgscjsgb1A73Gu6AQZQGEVS0BQIeHzyy4gYgOA2gDoxGE/QBaCfQanrs+kzk9GgQiMEAkqh1lwlmW+AqiJifd/TSsapd9AGZs8XIfHyu1C28RUSNYvoBXs9m2U19KQQQCCKuaH7Y+KfEdwLaBfv3ReBB/Azhp/cHBg6m5VXPc+wDWEeGRkGPN6XQ6VwyiJEBITXYQ2JFArorE9n7z1L1fgtMB/P/xeGp+Tv4YItBKCbo5+v5NSzab9QpBFAWIRJP7mPgcAJcIOzOmfnuy0EwA/nws1rkoJ+mZIFpGEhcz/fpeADwTREGAUCy5iz3vIgCpCGrNWMaN6QKFAPx1HfHUUuG6zyCwGJCmbfXEAwNE1GQrg6/kC4jbbNO4OlNxMQB//aHoiRVEyhMBLACQsi29a7rOHw6E4toOdmUWgFAE7clYxqVC51cKIB/UWHItXH4IBfMYUB1LT0/WmwIQinZuFYzrLEQ1CAdsUz9fLMFBAMa75eQmCXlXADVM1O6Y3X77jhs8keio1iAJgwKoJUY4k9adUj0cFMDXiaiJ7Z7ka/lNFdHimPrgBMDhuLbRdXFHCNT5nWRbullq85nugVI14VjSfzkvADInhGjq79OH8g50qNqIAJYAfNy2jLOlhCZcm3YRBamLRBMqE5mSeXggbSzPA/ipl5B1jmX4bRd4lHMEk0VDamI3CN8c08iWvAn/RQiLaVQAKg5UHKg4UHGg4sD/7UBITRwRkhNeVc2agb7USOB3fNLCn/XmtTDjsCodAAAAAElFTkSuQmCC) no-repeat #09BB07 center',
      backgroundSize: '.5rem .65rem',
      zIndex: 1000,
    }
    
    return <div id='gototop' onClick={this._scrollTop} style={style} ref='gototop'/>
	}
  
  componentDidMount() {
    
    window.onscroll = function() {
      const node = this.refs.gototop;
      let display = node.style.display;

      //大于半屏高度显示
      if(this.scrollTop > this._getClientHeight() / 2) {
        if(display === 'none' || display === '') {
          node.style.display = 'block';
        }
      }else{
        if(display === 'block' || display === '') {
          node.style.display = 'none';
        }  
      }
      
    }.bind(this);
  }
  
  componentWillUnmount() {
    window.onscroll = null;
  }
}

export default GotoTop