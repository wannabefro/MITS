App.TeamsIndexRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(){
    return this.store.find('team');
  }
});
