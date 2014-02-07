App.MitController = Ember.ObjectController.extend({
  needs: 'application',
  showCommentForm: false,
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  today: moment().format("MM-DD-YYYY"),
  isOwner: function(){
    if (this.get('content.user.id') === this.get('currentUser.id')){
      return true;
    }
  }.property('content', 'currentUser'),

  cleanComments: function(){
    return this.get('comments').filterBy('isDirty', false);
  }.property('comments'),

  canEdit: function(){
    if (this.get('content.date') === this.get('today') && this.get('isOwner')){
      return true;
    }
  }.property('currentUser', 'today'),

  actions: {
    newComment: function(){
      this.toggleProperty('showCommentForm');
    }
  }
});
