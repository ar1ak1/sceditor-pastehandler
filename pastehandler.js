/**
 * SCEditor Paste Handler Plugin
 * @author ariaki
 */
(function (sceditor) {
	'use strict';

	sceditor.plugins.pastehandler = function () {
		var base = this;
		var editor;
		var	opts;

		base.signalReady = function () {
			editor = this;
			opts = editor.opts.pastehandler || {};
		};

		base.signalPasteHtml = function (paste) {
			if (typeof opts.callback !== 'function') {
				return;
			}
			paste.val = opts.callback(paste.val);
		};
	};
})(sceditor);
