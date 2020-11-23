exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'OLSKWebViewStubRoute',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKLayoutRender(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteLanguages: ['en'],
	}, {
		OLSKRoutePath: '/alfa',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'OLSKWebViewAlfaRoute',
		OLSKRouteFunction (req, res, next) {
			return res.send(Math.random().toString());
		},
	}];
};
