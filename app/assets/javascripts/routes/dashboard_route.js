App.DashboardRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  model: function(){
    return this.store.find('dashboard', 'user');
  }
})
