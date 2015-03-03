Twitter.TweetsController = Ember.ArrayController.extend({

  sortProperties: ['date'],
  sortAscending: true,

  actions: {
    addTweet: function() {
      var id = (tweets.length + 1).toString();
      tweets.addObject({id: id, msg: this.msg, date: new Date});
      this.set("msg", null);
    },

    reverseSort: function() {
      this.set('sortAscending', !this.get('sortAscending'));
    }
  }
});
