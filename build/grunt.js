var _ = require('underscore');

module.exports = function(grunt) {

	var config = {};

	config.root = '../assets';
	config.stylesheets = config.root + '/stylesheets';
	config.cssbin = config.stylesheets + '/generated';

	// Project configuration.
	var projectConfig = {

		// JS linting
		lint: {
			src: [
				config.javascripts + '/app/**/*.js'
			]
		}

	};

	_.extend(projectConfig, require('./tasks/csstasks.js')(config));

	grunt.initConfig(projectConfig);

	// Default task.
	grunt.registerTask('default', 'cssmin');

	// load grunt plugins
	grunt.loadNpmTasks('grunt-css');

};
