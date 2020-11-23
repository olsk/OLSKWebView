const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKWebView_Misc', function () {	

	const OLSKModalViewTitleText = Math.random().toString();
	const OLSKWebViewURL = '/alfa?' + Math.random().toString();

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKModalViewTitleText,
			OLSKWebViewURL,
		});
	});
	
	before(function () {
		return browser.pressButton('#TestOLSKModalViewShow');
	});

	describe('OLSKModalViewTitle', function test_OLSKModalViewTitle () {

		it('binds OLSKModalViewTitleText', function () {
			browser.assert.text('.OLSKModalViewTitle', OLSKModalViewTitleText);
		});

	});

	describe('OLSKWebViewFrame', function test_OLSKWebViewFrame () {

		it('sets src', function () {
			browser.assert.attribute(OLSKWebViewFrame, 'src', OLSKWebViewURL);
		});

	});

	describe('OLSKWebViewWindowButton', function test_OLSKWebViewWindowButton () {

		it('sets target', function () {
			browser.assert.attribute(OLSKWebViewWindowButton, 'target', '_blank');
		});

		it('sets href', function () {
			browser.assert.attribute(OLSKWebViewWindowButton, 'href', OLSKWebViewURL);
		});

	});
	
});
