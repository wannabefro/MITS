App.MitsShowController = Ember.ObjectController.extend({
  needs: 'application',
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  today: moment().format("MM-DD-YYYY"),
  isOwner: function(){
    if (this.get('content.user.id') === this.get('currentUser.id')){
      return true;
    }
  }.property('content', 'currentUser'),

  canEdit: function(){
    if (this.get('content.date') === this.get('today') && this.get('isOwner')){
      return true;
    }
  }.property('currentUser', 'today')
});
