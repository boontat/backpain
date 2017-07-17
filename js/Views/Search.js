MovieApp.Views.Search = Backbone.View.extend({

    initialize: function(options) {},

    template: "<input type='text'> \
              <button>Fetch</button> \
               <ul id='movie-list'></ul>",

    render: function()
    {
        this.$el.html(this.template);
        return this;
    },

    events: {
    	'click button' : 'getMovies'
    },

    getMovies: function(){
    	var title = this.$el.find('input').val();
    	var movies = new MovieApp.Collections.Movies({title: title});
        // var filtered = movies.where({title: title});
        movies.fetch({success: this.rendermovies.bind(this)});
    },

    rendermovies: function(movies) {
      if (movies.length) {
        var movieview;
        this.$el.find('#movie-list').html('');
        for (var n in movies.models) {
            movieview = new MovieApp.Views.MovieView({model: movies.models[n]});

            this.$el.find('#movie-list').append(movieview.render().el);
        }
      }else{
        this.$el.find('#movie-list').html('No Results...');
      }
    }
});
