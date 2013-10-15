module.exports =  {
	/* Debug mode */
	"debug": true,

	/* Server configuration */
	"web": {
		/* (string) Hostname for the application */
		"host": process.env.HOST || "localhost",

		/* (boolean) Secure https mode */
		"secure": false,

		/* (int) TCP server port */
		"port": process.env.PORT || 7000,

		/* (string) Session secret */
		"sessionSecret": process.env.SESSION_SECRET || "sessionSecret",

		/* Use websocket */
		"websockets": true
	},

	/* Database configuration */
	"database": {
		/* (string) Url for mongodb */
		"url": process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/reportr'
	},

	/* Client configuration */
	"client": {
		"map": {
			/* Key for Google Maps API v3 */
			"apiKey": "AIzaSyAAeM47baWKdmKoqWeIuK5bQCxtur6mWm0"
		}
	},

	/* Tasks */
	"tasks": {
		/* (int) Interval between tasks started (in ms) */
		'interval': 1*60*1000
	},

	/* Trackers */
	"trackers": [
		{
			'module': './trackers/chrome',
			'config': {}
		},
		{
			'module': './trackers/foursquare',
			'config': {
				'interval': 6*60*60,
				'clientId': process.env.FOURSQUARE_CLIENTID,
				'clientSecret': process.env.FOURSQUARE_CLIENTSECRET
			}
		},
		{
			'module': './trackers/github',
			'config': {
				'interval': 6*60*60,
				'clientId': process.env.9d22c0ce6e6d1dd45e6d,
				'clientSecret': process.env.bcd7ad00b79b97f26b3d1231bd7498d2ba9e5212
			}
		},
		{
			'module': './trackers/facebook',
			'config': {
				'interval': 6*60*60,
				'clientId': process.env.FACEBOOK_CLIENTID,
				'clientSecret': process.env.FACEBOOK_CLIENTSECRET
			}
		},
		{
			'module': './trackers/ping',
			'config': {
				'interval': 10*60
			}
		}
	]
};
