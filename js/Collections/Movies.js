MovieApp.Collections.Movies = Backbone.Collection.extend({

  initialize: function(options){
  	if (options.title) {
  		this.title = options.title;
  	}
  },

  url: function(){
		return "https://jsonplaceholder.typicode.com/albums";
	},

  parse: function(response, optio){
    return response;
	}
});
