Twitter.PostsRoute = Ember.Route.extend({
  controllerName: 'tweets',
  renderTemplate: function() {
    this.render('tweets');
  },
  model: function() {
    return tweets;
  }
});
