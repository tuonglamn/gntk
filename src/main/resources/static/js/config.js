requirejs.config({
	paths: {
        'jquery': 'js/bower/jquery/jquery',
        'angular': 'js/bower/angular/angular',
        'googlemaps': 'js/bower/googlemaps-amd/googlemaps',
        'async': 'js/bower/requirejs-plugins/async',
        'map': 'js/common/map',
        'temp': 'js/common/temp'
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