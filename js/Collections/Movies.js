MovieApp.Collections.Movies = Backbone.Collection.extend({

  initialize: function(options){
  	if (options.title) {
  		this.title = options.title;
  	}
  },

  url: function(){
		return "https://jsonplaceholder.typicode.com/albums";
	},

  parse: function(response){
    var toSearch = this.title;
    if (!_.isEmpty(toSearch)) {
      var filtered = _.filter(response, function(obj){
        return ~obj.title.toLowerCase().indexOf(toSearch);
      })
    }else {
      var filtered = response;
    }

    return filtered;
	}
});
