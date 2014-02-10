App.TeamsIndexController = Ember.ArrayController.extend({
  needs: 'application',
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  invites: function(){
    return this.get('currentUser.invitations');
  }.property('@each.memberships', 'invitations'),

  teamMember: function(){
    return this.get('currentUser.teams');
  }.property('@each.memberships')
});
