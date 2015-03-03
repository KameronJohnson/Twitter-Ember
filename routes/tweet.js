Twitter.PostRoute = Ember.Route.extend({
  model: function(params) {
    return tweets.findBy('id', params.tweet_id);
}
});
