App.TeamAdminIndexRoute = Ember.Route.extend({
  beforeModel: function(transition){
    var _this = this;
    try {
      team_id = transition.intent.url.replace(/\D/g,'');
    } catch(e){
      team_id = transition.resolvedModels.teams.content[0].id
    }
    $.get('/api/v1/teams/' + team_id + '/admin_check').then(function(){
    }, function(){
      _this.transitionTo('teams.show', team_id);
    });
  },
  model: function(query, transition){
    try {
      team_id = transition.intent.url.replace(/\D/g,'');
    } catch(e){
      team_id = transition.resolvedModels.teams.content[0].id
    }
    return this.store.find('team', team_id);
  }
});
