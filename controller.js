exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'OLSKWebViewStubRoute',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt'],
	}, {
		OLSKRoutePath: '/alfa',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'OLSKWebViewAlfaRoute',
		OLSKRouteFunction (req, res, next) {
			return res.send(Math.random().toString());
		},
	}];
};
