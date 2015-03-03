Twitter.TweetsRoute = Ember.Route.extend({
  controllerName: 'tweets',
  renderTemplate: function() {
    //tweets.hbs
    this.render('tweets');
  },
  model: function() {
    //return the tweets array in store.js
    return tweets;
  }
});
