App.TeamsShowRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('team', params.team_id);
  },

  actions: {
    addMembers: function(model){
      this.store.createRecord('membership', {team: model, state: 'new'});
      this.controller.toggleProperty('showMemberForm');
    },
    cancel: function(model){
      model.get('memberships').filterBy('state', 'new').forEach(function(invite){
        invite.deleteRecord();
      });
      this.controller.toggleProperty('showMemberForm');
    }
  }
});
