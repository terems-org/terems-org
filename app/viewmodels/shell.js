define(function (require) {
	var router = require('plugins/router');

    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title: 'Research', moduleId: 'viewmodels/research', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});