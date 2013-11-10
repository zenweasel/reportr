var _ = require("underscore");

function setup(options, imports, register) {
	var logger = imports.logger.namespace("tracker.whereami");
	var trackers = imports.trackers;
	var tasks = imports.tasks;

	var tracker = trackers.register({
		'id': "whereami",
		'name': "WhereAmI",
		'description': "Track my Location throughout the day",

		'initConfig': function() {
			_.defaults(this.config, {
				'interval': 60*60
			});
		},

		'initWorker': function() {
			tasks.addTrackerTask(this, function(user) {
				logger.log("whereami user", user.token);
				user.setModel({
					'eventNamespace': 'location',
					'eventName': 'whereami',

					'name': "Location",
					'description': "Track Location"
				});
				user.track({
					'namespace': 'location',
					'name': 'whereami'
				});
			}, this.config.interval);
		}
	});


    register(null, {
    	'tracker.whereami': tracker
    });
};

// Exports
module.exports = setup;
