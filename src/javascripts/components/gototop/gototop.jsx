'use strict';

import React from 'react';

class GotoTop extends React.Component {
  
  constructor(props) {
    super(props);
    
    this._bind('_scrollTop');
  }
  
  _bind(...methods) {
		methods.forEach((method) => {
			this[method] = this[method].bind(this);
		});
	}
  
  //ref to zepto scrollTop function
  _scrollTop(){
    let hasScrollTop = 'scrollTop' in window;
    //if (value === undefined) return hasScrollTop ? node.scrollTop : node.pageYOffset
    hasScrollTop ? () => {window.scrollTop = 0}() : () => { window.scrollTo(window.scrollX, 0) }();
  }
  
	render() {
    const style = {
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
}

export default GotoTop