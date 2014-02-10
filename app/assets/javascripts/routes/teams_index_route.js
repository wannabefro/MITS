App.TeamsIndexRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(){
    return this.store.find('team');
  },

  actions: {
    update: function(model, state){
      var _this = this;
      user = this.controllerFor('application').get('currentUser');
      membership = user.get('memberships').filterBy('team', model)[0];
      membership.set('state', state);
      membership.save().then(function(response){
        if (response.get('state') === 'accepted'){
          _this.transitionTo('teams.show', model);
        } else if (response.get('state') === 'declined'){
          _this.controller.propertyDidChange('invitations');
          _this.transitionTo('teams.index');
        }
      }, function(err){
      });
    }
  }
});
