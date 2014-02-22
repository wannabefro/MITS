App.DashboardRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(params, transition){
    if (transition.router.currentHandlerInfos){
      this.modelFor('dashboard').reload();
    }
    return this.store.find('dashboard', 1);
  }
})
