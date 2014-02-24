App.MitsRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(){
    return this.store.find('mit');
  }
});
