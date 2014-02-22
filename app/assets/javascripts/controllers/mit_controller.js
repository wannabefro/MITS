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

  canComplete: function(){
    var createdAt = moment(new Date(this.get('createdAt')), 'MM-DD-YYYY');
    var today = moment(new Date(), 'MM-DD-YYYY');
    var diff = createdAt.diff(today, 'days'); 
    if (diff < 2){
      return true;
    }
  }.property('complete'),

  canEdit: function(){
    if (this.get('content.date') === 'Today' && this.get('isOwner')){
      return true;
    }
  }.property('currentUser', 'today', 'content'),

  actions: {
    newComment: function(){
      this.toggleProperty('showCommentForm');
    }
  }
});
