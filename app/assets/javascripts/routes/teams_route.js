App.TeamsRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(){
    return this.store.find('team');
  }
});
