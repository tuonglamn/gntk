requirejs.config({
    baseUrl: '/js/',
	paths: {
        'jquery': 'bower/jquery/jquery',
        'angular': 'bower/angular/angular',
        'googlemaps': 'bower/googlemaps-amd/googlemaps',
        'async': 'bower/requirejs-plugins/async',
        'map': 'common/map',
        'temp': 'common/temp'
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

require(['jquery','temp','map'],function($, temp, map){
	temp.init();
	map.mapStart();
});