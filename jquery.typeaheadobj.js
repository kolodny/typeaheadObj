;(function($) {
	$.fn.typeaheadObj = function(options) {
		var source = [],
			cleanItem = function(item) { return item.replace(/^<!-- \d+ -->/, ''); };

		options = $.extend({
			display: 'label',
			update: $.noop
		}, options);
	    
		for (var i = 0; i < options.source.length; i++) {
			source.push( '<!-- ' + i + ' -->' + options.source[i][options.display] );
		}
		return this.each(function() {
			var $this = $(this);

			$this.typeahead({
				source: source,
				updater: function(item) {
					options.update.call($this, options.source[item.match(/^<!-- (\d+) -->/)[1]]);
					return cleanItem(item);
				},
				highlighter: function(item) {
					return $.fn.typeahead.Constructor.prototype.highlighter.call(this, cleanItem(item));
				},
				matcher: function(item) {
					return $.fn.typeahead.Constructor.prototype.matcher.call(this, cleanItem(item));
				}
			});
		});
	};
})(jQuery);

