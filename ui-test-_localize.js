const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (languageCode) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, languageCode);
	};

	describe(`OLSKWebView_Localize-${ languageCode }`, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage: languageCode,
			});
		});
	
		before(function () {
			return browser.pressButton('#TestOLSKModalViewShow');
		});

		it('localizes OLSKWebViewWindowButton', function() {
			browser.assert.text(OLSKWebViewWindowButton, uLocalized('OLSKWebViewWindowButtonText'));
		});
	
	});

});
