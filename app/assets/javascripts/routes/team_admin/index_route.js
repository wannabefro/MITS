App.TeamAdminIndexRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
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
  },
  actions: {
    save: function(model){
      var _this = this;
      invites = model.get('invites');
      identification = invites.map(function(invite){return invite.get('identification')});
      data = {members: identification};
      $.ajax({
        type: "PUT",
        url: '/api/v1/teams/' + model.id,
        data: data
      }).then(function(response){
        _this.controller.toggleProperty('showMemberForm');
      }, function(error){
      });
    },
    removeMember: function(model){
      model.deleteRecord();
    },
    newMember: function(model){
      this.store.createRecord('membership', {team: model, state: 'new'});
    },
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
