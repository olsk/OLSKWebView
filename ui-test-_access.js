const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKWebView: '.OLSKWebView',
	
	OLSKWebViewFrame: '.OLSKStandardViewBody .OLSKWebViewFrame',
	
	OLSKWebViewTail: '.OLSKStandardViewTail .OLSKWebViewTail',
	OLSKWebViewWindowButton: '.OLSKWebViewTail .OLSKWebViewWindowButton',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKWebView_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('hides OLSKWebView', function () {
		browser.assert.elements(OLSKWebView, 0);
	});

	context('OLSKModalViewShow', function () {

		before(function () {
			return browser.pressButton('#TestOLSKModalViewShow');
		});
		
		it('shows OLSKWebView', function () {
			browser.assert.elements(OLSKWebView, 1);
		});

		it('shows OLSKStandardView', function () {
			browser.assert.elements('.OLSKStandardView', 1);
		});

		it('shows OLSKWebViewFrame', function () {
			browser.assert.elements(OLSKWebViewFrame, 1);
		});

		it('shows OLSKWebViewTail', function () {
			browser.assert.elements(OLSKWebViewTail, 1);
		});

		it('shows OLSKWebViewWindowButton', function () {
			browser.assert.elements(OLSKWebViewWindowButton, 1);
		});

	});

	context('OLSKModalViewClose', function () {

		before(function () {
			return browser.pressButton('#TestOLSKModalViewClose');
		});

		it('hides OLSKWebView', function () {
			browser.assert.elements(OLSKWebView, 0);
		});
		
	});

});
