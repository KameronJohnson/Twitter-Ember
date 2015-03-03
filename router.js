Twitter.Router.map(function() {
  this.resource('tweets', {path: '/'});
  this.resource('tweet', {path: 'tweets/:tweet_id'});
});
