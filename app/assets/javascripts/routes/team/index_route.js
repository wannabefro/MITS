App.TeamIndexRoute = Ember.Route.extend({
  model: function(params, transition){
    return this.store.find('team', transition.params.team.team_id);
  }
});
