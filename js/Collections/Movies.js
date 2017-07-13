MovieApp.Collections.Movies = Backbone.Collection.extend({

  initialize: function(options){
  	if (options.title) {
  		this.title = options.title;
  	}
  },

  url: function(){
		return "http://www.omdapi.com/?s=" + this.title;
	},

  parse: function(){
		return response.search;
	}
});
