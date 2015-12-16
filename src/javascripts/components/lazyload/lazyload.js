;(function(root, factory){
		if(typeof module !== 'undefined' && module.exports) { //CommonJS
 				module.exports = factory();
		} else if(typeof define === 'function' && define.amd) { //AMD
				define(factory);
		} else {
			root.lazyload = factory.call(root);
		}
})(this, function(){
	'use strict';
	function lazyload(el, callback) {
		var delay = null;
		$(el).find('img').each(function(){
				!$(el).hasClass('lazyimg') && $(el).addClass('lazyimg');

				var _this = $(this)[0];
				if(_this.getAttribute('data-src') == null) {
					return;
				}

				if($(this).offset().top < window.innerHeight && _this.getAttribute('data-src') != 'done') {
					_this.onerror = function() {
						this.src = 'data:image/gif;base64,'
					}
					_this.src = _this.getAttribute('data-src');
					$(this).removeClass('opa0').addClass('opa1');
					if($.isWebp) {
						_this.src += '?from=mobile';
					}
					_this.setAttribute('data-src', 'done');
				}
		});

		window.addEventListener('scroll', function(){
			delay = setTimeout(function(){
				$(el).find('img').each(function(){
					!$(el).hasClass('lazyimg') && $(el).addClass('lazyimg');
					var _this = $(this)[0];
					if(_this.getAttribute('data-src') == null) {
						return;
					}

					var top = $(this).offset().top;
					var h = window.innerHeight || window.screen.height;
					if(window.pageYOffset > top + h || window.pageYOffset < top - h && _this.getAttribute('data-loaded') != 'done') {
						clearTimeout(delay);
						return;
					}

					if(window.pageYOffset > top - h - 30 && _this.getAttribute('data-loaded') != 'done') {
						callback($(el));
					}
				})
			}, 80)
		}, false);

		setTimeout(function(){
			$(window).trigger('scroll')
		}, 0);
	}

	if(window.Zepto || window.jQuery) {
		(function($){
			$.fn.lazyload = function(callback) {
				return this.each(function(){
					lazyload($(this), callback);
				});
			}
		})(window.Zepto || window.jQuery);
	}

	return lazyload;
});