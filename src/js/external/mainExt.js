requirejs.config({
	baseUrl: 'js',
	paths: {
		controllers: 'Controllers',
		bootstrap: 'external/bootstrap/bootstrap-3.3.1-dist/dist/js',
		angular: 'external/angular',
		jquery: 'external/jquery',
		lodash: 'external/lodash'
	}
});

require(['angular/angular.min', 'bootstrap/bootstrap.min', 'jquery/jquery-1.11.2.min', 'lodash/lodash.min'],
	function () {
		require(['gbSeriesApp', 'controllers/GiantBombSeriesCtrl'], 
			function () {
				angular.bootstrap(document, ['gbSeriesApp']);
			});
	});