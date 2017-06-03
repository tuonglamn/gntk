requirejs.config({
    baseUrl: '/js/',
	paths: {
        'jquery': 'bower/jquery/jquery',
        'angular': 'bower/angular/angular',
        'googlemaps': 'bower/googlemaps-amd/googlemaps',
        'async': 'bower/requirejs-plugins/async',
        'map': 'lib/map',
        'app': 'lib/app'
    },
    googlemaps: {
    	params: {
    		key: 'AIzaSyAzIDW9AZseqnR8vcY12OtfQPIV_MODSXQ'
    	}
    },
    shim: {
    	'jquery': [],
    	'app': ['jquery']
    }
});

require(['jquery','app','map'],function($, app, map){
	app.init();
	map.mapStart();
});