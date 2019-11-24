// config.js is used to initialize api's and other libaries across all html files.
// this allow the html files to be less crowded with script tag elements.

requirejs.config({
	baseUrl: 'js',
	paths: {
		jquery: 'jquery-3.2.1.min',
		materialize: ['https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize', 'materialize.min'],
		velocity: 'velocity.min',
		methods: 'Custom-scripts/methods',
		auto: 'https://cdnjs.cloudflare.com/ajax/libs/materialize-autocomplete/1.0.7/jquery.materialize-autocomplete.min',
		hammer: 'hammer.min',
		search: 'search'
	},

	shim: {
		"velocity": {
			deps: ["jquery"]
		}
	}
});

require(['jquery', 'velocity'], function ($, Velocity){
	$("body").velocity({opacity: 0.5});
});