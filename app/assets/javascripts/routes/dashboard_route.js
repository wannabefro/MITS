App.DashboardRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(params, transition){
    if (transition.router.currentHandlerInfos){
      try{
        this.modelFor('dashboard').reload();
      } catch(e){
      }
    }
    return this.store.find('dashboard', 1);
  }
})
