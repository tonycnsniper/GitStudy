require.config({
	paths: {
		jQuery: 'libs/jquery',
		Underscore: 'libs/underscore',
		Backbone: 'libs/backbone',
		text: 'libs/text',
		templates: '../templates'
	},

	shim: {
		'Backbone': ['Underscore', 'jQuery'],
		'SocialNet': ['Backbone']
	}
});

require(['SocialNet'], function(SocialNet) {
	SocialNet.initialize();
});