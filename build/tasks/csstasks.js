module.exports = function(config) {

	return {

		cssmin: {

			global: {
				src: [config.stylesheets + '/css/foo.css'],
				dest: config.cssbin + '/foo.min.css'
			}
		}

	};
}