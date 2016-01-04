'use strict';

export default {
   _bind: function(...methods) {
      methods.forEach((method) => {
        this[method] = this[method].bind(this);
      });
   }
}