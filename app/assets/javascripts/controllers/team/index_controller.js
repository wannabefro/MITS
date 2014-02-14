App.TeamIndexController = Ember.ObjectController.extend({
  needs: 'application',
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  showMemberForm: false,
  isAdmin: function(){
    return !(_.isEmpty(this.get('admins').filterBy('id', this.get('currentUser.id'))));
  }.property('currentUser')
});
